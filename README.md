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

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador:
http://localhost:3000
```

### Build de Produção
Para testar a compilação estática de produção:
```bash
npm run build
npm start
```

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
