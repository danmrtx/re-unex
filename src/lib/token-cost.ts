import type { ChatCost, ChatUsage } from '@/lib/chat-types';

/** Modelo Gemini usado pelo chatbot (rápido e barato, adequado a atendimento). */
export const MODEL_ID = 'gemini-2.5-flash';

/**
 * Preços do gemini-2.5-flash em US$ por 1 milhão de tokens (tier pago).
 * Fonte: https://ai.google.dev/gemini-api/docs/pricing — consultado em 2026-09-08.
 */
export const PRICING = {
  inputPerMillion: 0.3,
  outputPerMillion: 2.5
} as const;

/**
 * Câmbio fixo usado apenas para exibição didática do custo em reais.
 * É uma aproximação: não consulta cotação em tempo real.
 */
export const USD_TO_BRL = 5.5;

/** Calcula o custo estimado de uma requisição a partir do consumo de tokens. */
export function estimateCost(usage: ChatUsage): ChatCost {
  const usd =
    (usage.inputTokens / 1_000_000) * PRICING.inputPerMillion +
    (usage.outputTokens / 1_000_000) * PRICING.outputPerMillion;

  return { usd, brl: usd * USD_TO_BRL };
}
