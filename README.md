# 🎓 Unex — Redesign de Landing Page Institucional
> **Estudo Dirigido de Desenvolvimento Front-end Avançado e UX/UI**  
> Proposta de Redesign moderna, responsiva, acessível e orientada à conversão para a **Unex (Rede UniFTC)**.

---

## 📌 Sobre o Projeto

A **Unex** é uma instituição de ensino superior privada (integrante da Rede UniFTC), com campi em **Feira de Santana, Vitória da Conquista, Itabuna e Jequié**.

Este projeto apresenta o redesign completo da landing page principal, mantendo o propósito de **captação de candidatos, divulgação de vestibulares e valorização institucional**, mas aplicando padrões modernos de engenharia de software front-end:

- ⚡ **Performance Ultra Rápida**: Construído em **Next.js (App Router)** com geração estática (SSG), sem scripts de terceiros bloqueantes.
- 🎨 **Design System Moderno**: Estilizado com **Tailwind CSS**, respeitando a identidade visual original (`#12123c` azul profundo e `#97e700` verde lima).
- 📱 **Mobile-First & Responsivo**: Experiência fluida em smartphones, tablets e monitores ultrawide.
- ♿ **Acessibilidade Universal**: Controles integrados de ajuste de tamanho de fonte (A-/A+) e modo de Alto Contraste via CSS nativo.
- 🎯 **Foco em Conversão**: **Simulador de Bolsa interativo com cálculo dinâmico baseado na nota do ENEM** e formulário de inscrição direta com validação.
- 🩺 **Destaque UnexMED**: Valorização da formação médica com metodologia ativa (PBL) e centros de simulação realística.

---

## 🚀 Demonstração das Seções Desenvolvidas

1. **Top Utility Bar:** Atendimento 0800, cidades dos polos, controles de acessibilidade (zoom e contraste) e acesso ao Portal do Aluno.
2. **Navbar Responsiva:** Menu moderno com efeito vidro (*glassmorphism*), links âncoras suaves e menu gaveta mobile.
3. **Hero Section de Alto Impacto:** Headline com proposta de valor, badges de Nota 5 no MEC, cards de destaques e botões de chamada rápida.
4. **Formas de Ingresso:** Vitrine com 6 modalidades (Vestibular Online, ENEM até 100%, Transferência com 50%, 2ª Graduação, FIES/Prouni e Medicina).
5. **Catálogo Dinâmico de Cursos:** Busca em tempo real, filtros por categorias (Saúde, Jurídico, Negócios & Tech) e modal detalhado de grade curricular.
6. **Showcase das 4 Unidades:** Abas interativas para **Feira de Santana (Sede), Vitória da Conquista, Itabuna e Jequié**, com diferenciais de infraestrutura e rotas no Google Maps.
7. **Sobre a Unex:** Apresentação da metodologia ativa (PBL), clínicas-escola, hospitais veterinários e métricas institucionais.
8. **Simulador de Bolsas & Captação de Leads:** Slider interativo para cálculo automático do percentual de desconto e formulário integrado com confirmação instantânea.
9. **Depoimentos:** Avaliações com estrelas e depoimentos humanizados de discentes de diferentes campi.
10. **Notícias & Blog:** Grid de novidades acadêmicas com tags, datas e tempo estimado de leitura.
11. **FAQ Interativo:** Perguntas frequentes em accordion sobre documentação, bolsas e vestibulares.
12. **Rodapé Institucional:** Links organizados, contatos oficiais, endereços de todos os campi e dados de credenciamento.
13. **Ações Flutuantes:** Botão de atendimento direto no WhatsApp e botão de retorno ao topo.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js 16+ (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [@google/genai](https://www.npmjs.com/package/@google/genai) — SDK oficial do Google Gemini (chatbot de atendimento)

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn instalado

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/re-unex.git

# 2. Acesse a pasta do projeto
cd re-unex

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente (necessário para o chatbot)
cp .env.example .env.local
# edite .env.local e preencha GEMINI_API_KEY=...

# 5. Inicie o servidor de desenvolvimento
npm run dev

# 6. Abra no navegador:
http://localhost:3000
```

> Sem `GEMINI_API_KEY` o site funciona normalmente, mas o chatbot responde com erro de configuração. Veja a seção [🤖 Chatbot com IA (Gemini)](#-chatbot-com-ia-gemini).

### Build de Produção
Para testar a compilação estática de produção:
```bash
npm run build
npm start
```

---

## 🤖 Chatbot com IA (Gemini)

A landing page inclui uma assistente virtual de atendimento que responde dúvidas sobre **cursos, campi, formas de ingresso e FAQ** da Unex. Ela usa a API do **Google Gemini** (modelo `gemini-3.5-flash-lite`) através do SDK oficial `@google/genai`.

### 🔑 Configuração da chave de API

1. Acesse o **Google AI Studio**: <https://aistudio.google.com/apikey>
2. Faça login com uma conta Google e clique em **Create API key** (o *free tier* do AI Studio é suficiente para testes e para a apresentação).
   > Modelos da geração 2.5 não estão mais disponíveis para contas novas do Google AI Studio; por isso o projeto usa `gemini-3.5-flash-lite`.
3. Na raiz do projeto, copie o arquivo de exemplo e cole a chave:

```bash
cp .env.example .env.local
```

```dotenv
# .env.local
GEMINI_API_KEY=sua_chave_aqui
```

4. Reinicie o `npm run dev` para que a variável seja carregada.

> ⚠️ **Nunca** use o prefixo `NEXT_PUBLIC_` nessa variável: isso exporia a chave no bundle do navegador. `.env.local` já é ignorado pelo Git.
>
> 🚀 **Na Vercel:** cadastre a mesma variável em *Project Settings → Environment Variables* antes do deploy.

### 🏗️ Arquitetura da integração

```
┌──────────────────────┐   POST /api/chat        ┌──────────────────────┐
│  ChatWidget (client) │  { messages: [...] }    │  route.ts (servidor) │
│  React, "use client" │ ──────────────────────► │  Next.js Route       │
│                      │                         │  Handler             │
│                      │   stream NDJSON         │  + GEMINI_API_KEY    │
│                      │ ◄────────────────────── │  + SYSTEM_PROMPT     │
│  {type:"text"} ...   │  uma linha JSON/evento  └──────────┬───────────┘
│  {type:"usage"}      │                                    │ generateContentStream
│  {type:"error"}      │                                    ▼
└──────────────────────┘                         ┌──────────────────────┐
                                                 │  Google Gemini API   │
                                                 │ gemini-3.5-flash-lite│
                                                 └──────────────────────┘
```

O navegador **nunca** fala com o Gemini: ele só conhece a rota `/api/chat` do próprio site. A chave, o *system prompt* e os limites de custo ficam no servidor, onde o usuário não pode alterá-los.

A resposta volta em **streaming NDJSON** (uma linha JSON por evento), o que faz o texto aparecer palavra a palavra em vez de esperar a resposta inteira:

| Evento | Conteúdo |
|---|---|
| `text` | Um pedaço do texto gerado, exibido imediatamente no widget. |
| `usage` | Enviado ao final: tokens de entrada/saída e o custo estimado (US$ e R$). |
| `error` | Falha ocorrida **depois** que o stream começou (ex.: limite de requisições). |

Erros que acontecem **antes** do stream viram respostas HTTP normais: `400` (body inválido), `429` (cota estourada) e `500` (chave ausente ou falha do provedor).

### 📁 Arquivos e responsabilidades

| Arquivo | Responsabilidade |
|---|---|
| `src/components/ChatWidget.tsx` | Botão flutuante + painel de chat, sugestões iniciais, leitura do stream e contador de tokens/custo da sessão. |
| `src/app/api/chat/route.ts` | Route Handler no servidor: valida o corpo, chama o Gemini em streaming e devolve NDJSON. |
| `src/lib/chat-prompt.ts` | `SYSTEM_PROMPT`: persona, regras (não inventar dados, recusar assuntos fora da Unex) + base de conhecimento. |
| `src/lib/knowledge.ts` | Serializa `src/data/unexData.ts` (cursos, campi, formas de ingresso e FAQ) em texto compacto para o prompt. |
| `src/lib/token-cost.ts` | `MODEL_ID`, tabela de preços e `estimateCost()` — converte tokens em US$/R$. |
| `src/lib/chat-types.ts` | Tipos compartilhados entre cliente e servidor (`ChatMessage`, `ChatUsage`, `StreamEvent`). |
| `.env.example` | Modelo do `.env.local` com `GEMINI_API_KEY`. |

### 💰 Custo de tokens

Preços do `gemini-3.5-flash-lite` no *tier* pago (fonte: [Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing), consultado em 08/09/2026):

| Direção | Preço por 1 milhão de tokens |
|---|---|
| Entrada (*input*: prompt de sistema + histórico + pergunta) | **US$ 0,30** |
| Saída (*output*: resposta gerada) | **US$ 2,50** |

**Exemplo de uma pergunta isolada** (≈ 3.900 tokens de entrada — quase todos vindos da base de conhecimento de ~3,7k tokens — e 200 tokens de resposta):

```
entrada: 3.900 / 1.000.000 × US$ 0,30 = US$ 0,00117
saída:     200 / 1.000.000 × US$ 2,50 = US$ 0,00050
total   ............................. ≈ US$ 0,0017  (≈ R$ 0,009)
```

Ou seja: **cerca de 1 centavo de real por pergunta**, e ~R$ 9,00 a cada mil perguntas. O ponto didático é que a **base de conhecimento é reenviada e cobrada em toda requisição** — o modelo não "lembra" nada entre chamadas. A conversão para reais usa um câmbio fixo (`USD_TO_BRL = 5.5` em `src/lib/token-cost.ts`), apenas para exibição.

Cada requisição também gera **uma linha de log no servidor** com modelo, tokens e custo — útil para demonstrar o consumo ao vivo durante a apresentação.

### 🚧 Limites aplicados

Todos validados **no servidor**, porque o cliente pode ser adulterado:

- **10 mensagens** de histórico por requisição;
- **1.000 caracteres** por mensagem;
- `maxOutputTokens`: **512** (teto de gasto na saída, que é a parte cara);
- `temperature`: **0.4** (respostas mais previsíveis, adequadas a atendimento);
- *thinking* no nível mínimo (`thinkingLevel: MINIMAL`) — menos latência e menos tokens de saída;
- se o usuário fecha o widget, o `AbortController` do cliente cancela a geração no servidor (`abortSignal`), interrompendo o custo;
- histórico mantido **apenas em memória no React** — nada é persistido.

> **Sem limite por IP.** A rota `/api/chat` **não** aplica *rate limiting* por IP: o teto real é a cota do plano gratuito do Gemini, o que basta para delimitar o pior caso nesta demonstração acadêmica.
> Em um deploy público, o limitador deve ficar na borda — *rate limiting* do Vercel Firewall/WAF ou um proxy reverso à frente da aplicação.

### 🎓 Conceitos aplicados

- **Tipos de LLM.** Modelos "Flash-Lite" são o menor e mais barato nível da família Flash — pequenos, rápidos e baratos — o perfil certo para atendimento, onde as respostas são curtas, factuais e extraídas de uma base pronta. Modelos maiores de raciocínio (que "pensam" antes de responder) custariam várias vezes mais e adicionariam segundos de latência sem melhorar respostas desse tipo. Optou-se por uma **API proprietária** (Gemini) em vez de um modelo aberto auto-hospedado por não exigir infraestrutura de GPU no escopo de um projeto acadêmico.
- **Custo de tokens.** Token é a unidade que o modelo lê e escreve (≈ 4 caracteres). Entrada e saída têm preços diferentes — aqui a saída custa **8,3× mais** que a entrada — e o *system prompt* entra na conta de **toda** requisição. Daí as duas alavancas de economia usadas: um prompt enxuto e um teto de tokens de saída.
- **Arquitetura de integração.** A chave fica no servidor porque qualquer variável entregue ao navegador é pública; o *streaming* melhora a percepção de velocidade sem alterar o custo; e os limites vivem no Route Handler, o único ponto que o usuário não controla. A base de conhecimento é injetada inteira no prompt (sem RAG), o que é simples e suficiente para um volume de dados pequeno e estável.

---

## 📄 Documento Técnico

O relatório analítico completo contendo diagnóstico heurístico do site oficial, wireframes descritivos, matriz comparativa "Antes x Depois", justificativas de UX e roadmap futuro está disponível em:
👉 [RELATORIO_TECNICO.md](./RELATORIO_TECNICO.md)

---

## 🌐 Publicação (Deploy)

O projeto está pronto para publicação com 1 clique na [Vercel](https://vercel.com):
1. Suba o código para o seu GitHub;
2. Conecte o repositório na Vercel;
3. O deploy será realizado automaticamente gerando o link público HTTPS da atividade.
