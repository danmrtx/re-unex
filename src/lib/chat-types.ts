// Tipos compartilhados entre o widget de chat (cliente) e a rota /api/chat (servidor).

/** Papel de uma mensagem na conversa exibida ao usuário. */
export type ChatRole = 'user' | 'assistant';

/** Mensagem trocada no chat (histórico mantido apenas em memória no cliente). */
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

/** Consumo de tokens reportado pelo provedor de IA. */
export interface ChatUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

/** Custo estimado da requisição, em dólar e em real (câmbio fixo). */
export interface ChatCost {
  usd: number;
  brl: number;
}

/** Códigos de erro enviados dentro do stream ou em respostas JSON de erro. */
export type ChatErrorCode = 'invalid_request' | 'rate_limit' | 'missing_api_key' | 'unknown';

/** Evento NDJSON emitido pela rota /api/chat (uma linha JSON por evento). */
export type StreamEvent =
  | { type: 'text'; text: string }
  | ({ type: 'usage'; cost: ChatCost } & ChatUsage)
  | { type: 'error'; code: ChatErrorCode; message: string };
