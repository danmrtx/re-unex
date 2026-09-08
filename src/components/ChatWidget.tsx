'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { ChatMessageContent } from '@/components/ChatMessageContent';
import type { ChatErrorCode, ChatMessage, StreamEvent } from '@/lib/chat-types';
import { MODEL_ID } from '@/lib/token-cost';

/** Telefone de atendimento — replicado aqui para não trazer o prompt/base de conhecimento ao bundle do cliente. */
const SUPPORT_PHONE = '0800 710 0070';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5508007100070';

/** Mesmos limites aplicados pela rota /api/chat (o servidor revalida). */
const MAX_HISTORY_MESSAGES = 10;
const MAX_MESSAGE_LENGTH = 1000;

const WELCOME_TEXT =
  'Olá! Sou o assistente virtual da Unex. Posso ajudar com cursos, campi, formas de ingresso e bolsas. O que você quer saber?';

const SUGGESTIONS = [
  'Quais cursos de saúde vocês têm?',
  'Onde fica o campus de Itabuna?',
  'Como funciona o vestibular online?'
];

/** Mensagem genérica usada para qualquer falha que não seja falta de chave ou limite de uso. */
const GENERIC_ERROR_MESSAGE =
  'Tive um problema para responder agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.';

const ERROR_MESSAGES: Record<ChatErrorCode, string> = {
  missing_api_key: 'O assistente ainda não foi configurado (chave da API ausente).',
  rate_limit: `Estamos com muitas conversas agora. Tente em instantes ou fale conosco no WhatsApp ${SUPPORT_PHONE}.`,
  invalid_request: GENERIC_ERROR_MESSAGE,
  unknown: GENERIC_ERROR_MESSAGE
};

const numberFormatter = new Intl.NumberFormat('pt-BR');
const costFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4
});

const TOKENS_TOOLTIP =
  'Tokens são os pedaços de texto que o modelo lê e escreve (cerca de 4 caracteres cada). O custo é calculado a partir deles.';

interface LastUsage {
  inputTokens: number;
  outputTokens: number;
  usd: number;
}

interface SessionUsage {
  totalTokens: number;
  brl: number;
}

interface ChatError {
  code: ChatErrorCode;
  message: string;
}

/** Sempre oferece o WhatsApp, exceto quando o problema é de configuração do próprio site. */
function shouldOfferWhatsApp(code: ChatErrorCode): boolean {
  return code !== 'missing_api_key';
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<ChatError | null>(null);
  const [lastUsage, setLastUsage] = useState<LastUsage | null>(null);
  const [sessionUsage, setSessionUsage] = useState<SessionUsage>({ totalTokens: 0, brl: 0 });

  const abortRef = useRef<AbortController | null>(null);
  const isMountedRef = useRef(true);
  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listEndRef = useRef<HTMLDivElement>(null);

  const hasUserMessage = messages.some((message) => message.role === 'user');

  const closeWidget = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
    setIsOpen(false);
    fabRef.current?.focus();
  }, []);

  // Aborta qualquer geração pendente ao desmontar (evita custo desnecessário).
  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      abortRef.current?.abort();
      abortRef.current = null;
    };
  }, []);

  // Foco no campo de texto assim que o painel abre.
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Esc fecha o painel de qualquer lugar da página.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeWidget();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeWidget]);

  // Rola para a última mensagem enquanto a resposta chega.
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, isStreaming, error]);

  const appendToLastMessage = useCallback((text: string) => {
    setMessages((previous) => {
      const next = [...previous];
      const last = next[next.length - 1];

      if (last && last.role === 'assistant') {
        next[next.length - 1] = { ...last, content: last.content + text };
      }

      return next;
    });
  }, []);

  /** Remove a bolha vazia do assistente quando a resposta nem chegou a começar. */
  const dropEmptyAssistantMessage = useCallback(() => {
    setMessages((previous) => {
      const last = previous[previous.length - 1];
      return last && last.role === 'assistant' && last.content.length === 0
        ? previous.slice(0, -1)
        : previous;
    });
  }, []);

  const handleStreamEvent = useCallback(
    (event: StreamEvent) => {
      if (event.type === 'text') {
        appendToLastMessage(event.text);
        return;
      }

      if (event.type === 'usage') {
        setLastUsage({
          inputTokens: event.inputTokens,
          outputTokens: event.outputTokens,
          usd: event.cost.usd
        });
        setSessionUsage((previous) => ({
          totalTokens: previous.totalTokens + event.totalTokens,
          brl: previous.brl + event.cost.brl
        }));
        return;
      }

      setError({ code: event.code, message: ERROR_MESSAGES[event.code] });
    },
    [appendToLastMessage]
  );

  const sendMessage = useCallback(
    async (rawContent: string) => {
      const content = rawContent.trim().slice(0, MAX_MESSAGE_LENGTH);

      if (content.length === 0 || isStreaming) {
        return;
      }

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      // A mensagem de boas-vindas é local e nunca vai para o servidor.
      const history = [...messages, { role: 'user' as const, content }].slice(-MAX_HISTORY_MESSAGES);

      setMessages((previous) => [
        ...previous,
        { role: 'user', content },
        { role: 'assistant', content: '' }
      ]);
      setInput('');
      setError(null);
      setIsStreaming(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal
        });

        if (!response.ok || !response.body) {
          const payload = (await response.json().catch(() => null)) as { code?: ChatErrorCode } | null;
          const code: ChatErrorCode = payload?.code ?? 'unknown';
          dropEmptyAssistantMessage();
          setError({ code, message: ERROR_MESSAGES[code] });
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        const consumeLine = (line: string) => {
          const trimmed = line.trim();

          if (trimmed.length === 0) {
            return;
          }

          try {
            handleStreamEvent(JSON.parse(trimmed) as StreamEvent);
          } catch {
            // Linha incompleta ou inválida: ignorar é melhor do que quebrar a conversa.
          }
        };

        for (;;) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          lines.forEach(consumeLine);
        }

        consumeLine(buffer);
        dropEmptyAssistantMessage();
      } catch (streamError) {
        if ((streamError as { name?: string })?.name === 'AbortError') {
          return;
        }

        dropEmptyAssistantMessage();
        setError({ code: 'unknown', message: ERROR_MESSAGES.unknown });
      } finally {
        // Não atualiza estado se o componente já saiu da tela.
        if (isMountedRef.current && abortRef.current === controller) {
          abortRef.current = null;
          setIsStreaming(false);
        }
      }
    },
    [dropEmptyAssistantMessage, handleStreamEvent, isStreaming, messages]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  return (
    <>
      {/* FAB do chat — primeiro item da coluna, acima do botão do WhatsApp */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => (isOpen ? closeWidget() : setIsOpen(true))}
        className="w-12 h-12 rounded-full bg-unex-navy hover:bg-unex-navy-light border-2 border-unex-lime text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#97e700] focus-visible:ring-offset-2"
        title={isOpen ? 'Fechar assistente virtual' : 'Falar com o assistente virtual'}
        aria-label={isOpen ? 'Fechar assistente virtual Unex' : 'Abrir assistente virtual Unex'}
        aria-expanded={isOpen}
        aria-controls="unex-chat-panel"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Bot className="w-6 h-6 text-unex-lime" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="unex-chat-panel"
            role="dialog"
            aria-label="Assistente virtual Unex"
            aria-modal="false"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 w-[min(92vw,380px)] h-[min(70vh,560px)] z-50 flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
          >
            {/* Cabeçalho */}
            <header className="flex items-center gap-3 px-4 py-3 bg-unex-navy text-white shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-unex-lime flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-unex-lime" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-tight">Assistente Unex</p>
                <p className="text-[0.6875rem] text-white/70 leading-tight">
                  Respostas geradas por IA · {MODEL_ID}
                </p>
              </div>
              <button
                type="button"
                onClick={closeWidget}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                title="Fechar"
                aria-label="Fechar assistente virtual Unex"
              >
                <X className="w-4 h-4" />
              </button>
            </header>

            {/* Lista de mensagens */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50 text-sm text-slate-700"
              aria-live="polite"
              aria-busy={isStreaming}
            >
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2 leading-relaxed">
                {WELCOME_TEXT}
              </div>

              {!hasUserMessage && (
                <div className="space-y-2 pt-1">
                  <p className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-slate-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    Sugestões
                  </p>
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      disabled={isStreaming}
                      className="block w-full text-left text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-slate-200 text-unex-navy hover:border-unex-lime hover:bg-unex-lime-light transition-colors disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((message, index) =>
                message.role === 'user' ? (
                  <div
                    key={index}
                    className="max-w-[85%] ml-auto rounded-2xl rounded-br-sm bg-unex-navy text-white px-3 py-2 leading-relaxed whitespace-pre-wrap"
                  >
                    {message.content}
                  </div>
                ) : (
                  message.content.length > 0 && (
                    <div
                      key={index}
                      className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2 leading-relaxed"
                    >
                      <ChatMessageContent content={message.content} />
                    </div>
                  )
                )
              )}

              {isStreaming && (
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2.5 flex items-center gap-1.5">
                  <span className="sr-only">O assistente está digitando</span>
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: `${dot * 0.15}s` }}
                    />
                  ))}
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="max-w-[90%] rounded-2xl rounded-tl-sm bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-900 leading-relaxed"
                >
                  {error.message}
                  {shouldOfferWhatsApp(error.code) && (
                    <>
                      {' '}
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline underline-offset-2"
                      >
                        Falar no WhatsApp
                      </a>
                    </>
                  )}
                </div>
              )}

              <div ref={listEndRef} />
            </div>

            {/* Campo de envio */}
            <div className="border-t border-slate-200 bg-white px-3 pt-3 pb-2 shrink-0">
              <div className="flex items-end gap-2">
                <label htmlFor="unex-chat-input" className="sr-only">
                  Escreva sua pergunta para o assistente virtual
                </label>
                <textarea
                  id="unex-chat-input"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Digite sua dúvida sobre a Unex..."
                  className="flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-unex-lime"
                />
                <button
                  type="button"
                  onClick={() => void sendMessage(input)}
                  disabled={isStreaming || input.trim().length === 0}
                  className="w-10 h-10 shrink-0 rounded-xl bg-unex-navy text-unex-lime flex items-center justify-center transition-colors hover:bg-unex-navy-light disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Enviar mensagem"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-1 text-[0.625rem] text-slate-400 text-right">
                {numberFormatter.format(input.length)}/{numberFormatter.format(MAX_MESSAGE_LENGTH)} caracteres
              </p>
            </div>

            {/* Rodapé com consumo de tokens e custo estimado */}
            <footer className="border-t border-slate-200 bg-slate-50 px-3 py-2 text-[0.625rem] text-slate-500 leading-relaxed shrink-0">
              <p className="flex items-center gap-1">
                <span>
                  {lastUsage
                    ? `Última resposta: ${numberFormatter.format(lastUsage.inputTokens)} in / ${numberFormatter.format(lastUsage.outputTokens)} out · ≈ US$ ${costFormatter.format(lastUsage.usd)}`
                    : 'Última resposta: —'}
                </span>
                <span
                  className="w-3.5 h-3.5 shrink-0 rounded-full bg-slate-200 text-slate-600 text-[0.5625rem] font-bold flex items-center justify-center cursor-help"
                  title={TOKENS_TOOLTIP}
                  aria-label={TOKENS_TOOLTIP}
                  role="img"
                >
                  ?
                </span>
              </p>
              <p>
                Sessão: {numberFormatter.format(sessionUsage.totalTokens)} tokens · ≈ R${' '}
                {costFormatter.format(sessionUsage.brl)}
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
