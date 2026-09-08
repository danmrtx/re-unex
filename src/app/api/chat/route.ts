import { GoogleGenAI } from '@google/genai';

import { SYSTEM_PROMPT } from '@/lib/chat-prompt';
import type { ChatErrorCode, ChatMessage, ChatUsage, StreamEvent } from '@/lib/chat-types';
import { MODEL_ID, estimateCost } from '@/lib/token-cost';

/** Limites de custo aplicados no servidor (o cliente não é confiável). */
const MAX_MESSAGES = 10;
const MAX_CONTENT_LENGTH = 1000;
const MAX_OUTPUT_TOKENS = 512;
const TEMPERATURE = 0.4;

type ValidationResult = { ok: true; messages: ChatMessage[] } | { ok: false; error: string };

function validateMessages(body: unknown): ValidationResult {
  if (typeof body !== 'object' || body === null || !('messages' in body)) {
    return { ok: false, error: 'Corpo da requisição deve conter o campo "messages".' };
  }

  const { messages } = body as { messages: unknown };

  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, error: 'O campo "messages" deve ser um array com pelo menos uma mensagem.' };
  }

  if (messages.length > MAX_MESSAGES) {
    return { ok: false, error: `Histórico limitado a ${MAX_MESSAGES} mensagens.` };
  }

  const validated: ChatMessage[] = [];

  for (const message of messages) {
    if (typeof message !== 'object' || message === null) {
      return { ok: false, error: 'Cada mensagem deve ser um objeto.' };
    }

    const { role, content } = message as { role?: unknown; content?: unknown };

    if (role !== 'user' && role !== 'assistant') {
      return { ok: false, error: 'Cada mensagem deve ter "role" igual a "user" ou "assistant".' };
    }

    if (typeof content !== 'string' || content.trim().length === 0) {
      return { ok: false, error: 'Cada mensagem deve ter "content" como texto não vazio.' };
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      return { ok: false, error: `Cada mensagem deve ter no máximo ${MAX_CONTENT_LENGTH} caracteres.` };
    }

    validated.push({ role, content });
  }

  if (validated[validated.length - 1].role !== 'user') {
    return { ok: false, error: 'A última mensagem do histórico deve ser do usuário.' };
  }

  return { ok: true, messages: validated };
}

/** Converte o histórico do widget para o formato `contents` do Gemini. */
function toGeminiContents(messages: ChatMessage[]) {
  return messages.map((message) => ({
    role: message.role === 'assistant' ? ('model' as const) : ('user' as const),
    parts: [{ text: message.content }]
  }));
}

/** Identifica erros de cota/limite de taxa do provedor. */
function isRateLimitError(error: unknown): boolean {
  const status = (error as { status?: unknown })?.status;
  if (status === 429) {
    return true;
  }

  const message = error instanceof Error ? error.message : String(error);
  return /429|quota|rate limit|RESOURCE_EXHAUSTED/i.test(message);
}

const encoder = new TextEncoder();

function encodeEvent(event: StreamEvent): Uint8Array {
  return encoder.encode(`${JSON.stringify(event)}\n`);
}

function jsonError(code: ChatErrorCode, message: string, status: number): Response {
  return Response.json({ error: message, code }, { status });
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError('invalid_request', 'JSON inválido.', 400);
  }

  const validation = validateMessages(body);

  if (!validation.ok) {
    return jsonError('invalid_request', validation.error, 400);
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return jsonError('missing_api_key', 'GEMINI_API_KEY não configurada', 500);
  }

  const ai = new GoogleGenAI({ apiKey });

  let geminiStream: Awaited<ReturnType<typeof ai.models.generateContentStream>>;

  try {
    geminiStream = await ai.models.generateContentStream({
      model: MODEL_ID,
      contents: toGeminiContents(validation.messages),
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: TEMPERATURE,
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        // Desliga o "thinking" do Gemini 2.5 Flash: menos latência e menos tokens de saída.
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
  } catch (error) {
    // Falha antes de qualquer byte enviado: dá para responder com status HTTP adequado.
    if (isRateLimitError(error)) {
      return jsonError('rate_limit', 'Limite de requisições atingido. Tente novamente em instantes.', 429);
    }

    console.error('[chat] falha ao iniciar o stream:', error);
    return jsonError('unknown', 'Não foi possível falar com o assistente agora.', 500);
  }

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let usage: ChatUsage = { inputTokens: 0, outputTokens: 0, totalTokens: 0 };

      try {
        for await (const chunk of geminiStream) {
          const text = chunk.text;

          if (text) {
            controller.enqueue(encodeEvent({ type: 'text', text }));
          }

          const metadata = chunk.usageMetadata;

          if (metadata) {
            // O "thinking" é cobrado como saída, então soma junto aos tokens de resposta.
            const inputTokens = metadata.promptTokenCount ?? 0;
            const outputTokens = (metadata.candidatesTokenCount ?? 0) + (metadata.thoughtsTokenCount ?? 0);

            usage = {
              inputTokens,
              outputTokens,
              totalTokens: metadata.totalTokenCount ?? inputTokens + outputTokens
            };
          }
        }

        const cost = estimateCost(usage);

        controller.enqueue(encodeEvent({ type: 'usage', ...usage, cost }));
        console.info(
          `[chat] modelo=${MODEL_ID} tokens_in=${usage.inputTokens} tokens_out=${usage.outputTokens} custo_usd=${cost.usd.toFixed(6)} custo_brl=${cost.brl.toFixed(6)}`
        );
      } catch (error) {
        // Stream já iniciado: o erro precisa viajar como evento, não como status HTTP.
        console.error('[chat] falha durante o stream:', error);
        const rateLimited = isRateLimitError(error);
        controller.enqueue(
          encodeEvent({
            type: 'error',
            code: rateLimited ? 'rate_limit' : 'unknown',
            message: rateLimited
              ? 'Limite de requisições atingido. Tente novamente em instantes.'
              : 'A resposta foi interrompida. Tente novamente.'
          })
        );
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/x-ndjson; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
