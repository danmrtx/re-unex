# Estudo Dirigido: Redesign da Landing Page — Unex
## Documento Técnico e Diagnóstico de UX/UI & Front-end

- **Instituição de Ensino:** Unex (Rede UniFTC)
- **Disciplina:** Desenvolvimento Front-end Avançado & Design de Experiência do Usuário (UX/UI)
- **Tema:** Análise Crítica e Redesign da Landing Page Institucional
- **Versão:** 1.0.0 (Produção)
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion

---

## Sumário Executivo

Este documento técnico apresenta a fundamentação teórica, o diagnóstico analítico, o planejamento de arquitetura de informação (IA) e a execução técnica do redesign da landing page da **Unex** (Centro Universitário e Faculdade de Excelência da Rede UniFTC), com presença nos municípios de Feira de Santana, Vitória da Conquista, Itabuna e Jequié.

O projeto teve como premissa central solucionar gargalos críticos de usabilidade, lentidão de carregamento e sobrecarga cognitiva identificados no portal original (`unex.edu.br`), reconstruindo a aplicação sob a ótica de um **Front-end moderno, mobile-first, acessível e orientado à conversão (captação de candidatos e vestibulares)**.

---

## 1. Diagnóstico do Site Original (`unex.edu.br`)

A análise investigativa do portal ativo baseou-se em inspeção de código-fonte, navegação em múltiplos dispositivos (desktop, tablet e mobile) e avaliação heurística fundamentada nas **10 Heurísticas de Usabilidade de Jakob Nielsen**.

### 1.1. Pontos Fortes Identificados no Site Original
1. **Identidade de Marca Estabelecida:** Paleta de cores institucional bem demarcada, combinando azul marinho (`#12123c`), azul royal (`#063173`) e verde lima vibrante (`#97e700`).
2. **Multiplicidade de Canais de Suporte:** Disponibilização de canal 0800, integração com WhatsApp e link para Ouvidoria.
3. **Polo Médico e Regional:** Destaque para o curso de Medicina (UnexMED) e presença das 4 cidades baianas.
4. **Preocupação com Acessibilidade:** Presença da barra Pojo Accessibility e do widget VLibras.

### 1.2. Pontos Fracos e Gargalos Críticos
1. **Sobrecarga de Scripts e Débito Técnico (Performance & Bloat):**
   - O portal atual opera sobre WordPress com dezenas de plugins de terceiros (JetEngine, RankMath TOC, WPForms, Calendly, OneTrust, ShareThis, Pojo, jQuery 3.7 + Migrate).
   - O excesso de requisições HTTP bloqueantes resulta em alto tempo até a primeira renderização com conteúdo (FCP) e maior tempo para o carregamento do maior elemento (LCP elevado), impactando negativamente o Core Web Vitals e o posicionamento orgânico (SEO).
2. **Hero Section Dependente de Imagens Estáticas com Texto Embutido:**
   - O carrossel principal da home é composto por banners de imagem (1200x400) com textos e botões rasterizados diretamente na arte gráfica.
   - **Impacto em Acessibilidade e SEO:** Leitores de tela não conseguem indexar nem narrar o conteúdo textual contido nas imagens; em telas mobile de alta densidade, os textos sofrem redução drástica de legibilidade.
3. **Sobrecarga Cognitiva e Ruído na Navegação (Header):**
   - O cabeçalho possui dupla barra de navegação com menus dropdown excessivamente extensos, misturando links de captação de novos alunos (Vestibular, Graduação, FIES) com rotinas administrativas de alunos já matriculados (CPA, rematrícula, periódicos, rotina acadêmica).
   - Viola a **Heurística de Nielsen nº 8 (Design Estético e Minimalista)**, gerando distração no funil de conversão.
4. **Inexistência de Funil Direto de Captação de Leads na Home:**
   - O site oficial não conta com formulário interativo de simulação de bolsas ou pré-inscrição em destaque. A experiência de conversão dependia de redirecionamentos externos para links do WhatsApp ou de um modal invasivo de ligação.
5. **Fragmentação na Apresentação das 4 Unidades:**
   - Na versão desktop/mobile original, enquanto Jequié, Vitória da Conquista e Itabuna apareciam em um carrossel, a unidade de Feira de Santana (Sede) ficava solta em uma lista inferior com um ícone de "+", gerando inconsistência visual e quebra da **Heurística de Nielsen nº 4 (Consistência e Padrões)**.
6. **Poluição Visual com Barra Marquee Fixa no Rodapé:**
   - A barra contínua com rolagem lateral automática no rodapé entrava em conflito com botões de ação e banners de consentimento de cookies, distraindo o usuário e prejudicando a ergonomia móvel.

---

## 2. Planejamento do Redesign & Arquitetura de Informação

### 2.1. Princípios Norteadores de UX/UI
- **Mobile-First & Responsividade Fluida:** Projeto desenhado primeiramente para telas pequenas (smartphones), onde se concentra mais de 72% dos acessos de candidatos a vestibulares.
- **Foco em Conversão (Conversion-Centered Design):** CTAs evidentes e acessíveis com um clique, combinados a um simulador interativo de bolsas baseado na nota do ENEM.
- **Hierarquia Visual Intuitiva:** Redução da sobrecarga mental através de espaços em branco generosos, tipografia escalonável com a fonte *Geist*, e contrastes em conformidade com as diretrizes WCAG 2.1 (AA).
- **Acessibilidade Universal Embutida:** Botões de zoom de fonte nativos (A- / A+) e alternância de Alto Contraste implementados via CSS custom properties diretamente no root HTML.

### 2.2. Arquitetura de Informação Proposta (Sitemap da Landing Page)

```
[ 1. Top Utility Bar ] ── (0800, Cidades, Ajuste de Fonte, Alto Contraste, Portal do Aluno)
        │
[ 2. Header / Navbar ] ── (Logo Unex, Links Âncoras, CTA "Inscreva-se Já", Menu Mobile)
        │
[ 3. Hero Section ] ───── (Headline, Badges MEC 5, CTA Vestibular, Card Destaque UnexMED)
        │
[ 4. Formas de Ingresso ] (Vestibular Online, ENEM, Transferência, 2ª Graduação, FIES)
        │
[ 5. Catálogo de Cursos ] (Barra de Busca, Filtros de Categoria, Cards, Modal de Detalhes)
        │
[ 6. Nossas Unidades ] ── (Abas das 4 Cidades: FSA, Conquista, Itabuna, Jequié + Mapas)
        │
[ 7. Sobre a Unex ] ───── (Metodologia Ativa PBL, Responsabilidade Social, Tour Virtual)
        │
[ 8. Simulador de Bolsas] (Slider ENEM interativo, Cálculo dinâmico, Formulário com LGPD)
        │
[ 9. Depoimentos ] ────── (Alunos reais de Medicina, Direito, Odontologia e Enfermagem)
        │
[ 10. Notícias & Blog ] ─ (Grid com artigos acadêmicos, tags, datas e tempo de leitura)
        │
[ 11. FAQ Accordion ] ─── (Perguntas Frequentes sobre vestibulares, matrículas e bolsas)
        │
[ 12. Footer Institucional] (Contatos, Horários, Endereços dos 4 Campi, Direitos Autorais)
        │
[ 13. Floating Actions ]  (Atendimento imediato via WhatsApp e Botão Voltar ao Topo)
```

### 2.3. Wireframe Descritivo (Estrutura de Layout)

```
+-------------------------------------------------------------------------------+
| TOP BAR: 0800 710 0070 | FSA • VDC • ITB • JEQ | [A-] [A+] [Contrast] | Portal |
+-------------------------------------------------------------------------------+
| LOGO UNEX (Você em evolução)   Cursos | Ingresso | Unidades | Sobre  [INSCREVA-SE] |
+-------------------------------------------------------------------------------+
| HERO:                                                                         |
| [Badge: Vestibular 2026.2]                  [ CARD VISUAL HERO:             ] |
| H1: Você em evolução: o futuro da sua       [ Foto Laboratório / UnexMED     ] |
|     carreira começa na Unex.                [ Badge: Nota 5 MEC             ] |
| Subtítulo explicativo + Checkmarks          [ Destaque PBL & Simulação      ] |
| [ Botão: Inscrever-se ]  [ Explorar Cursos ]                                  |
| +15.000 Profissionais Formados                                                |
+-------------------------------------------------------------------------------+
| FORMAS DE INGRESSO (Grid 3 colunas):                                          |
| [ Vestibular Online ]    [ Nota do ENEM: até 100% ]   [ Transferência: 50% ]  |
| [ 2ª Graduação ]         [ FIES & ProUni ]            [ Medicina UnexMED ]    |
+-------------------------------------------------------------------------------+
| CATÁLOGO DE CURSOS:                                                           |
| Filtros: [Todos] [Saúde] [Jurídico] [Tecnologia & Gestão] | [Buscar curso...] |
| Cards: Medicina (Nota 5) | Direito (Líder OAB) | Odontologia | Enfermagem ... |
| [Ver grade & detalhes -> Abre Modal Interativo]                              |
+-------------------------------------------------------------------------------+
| NOSSAS UNIDADES:                                                              |
| Abas: [Feira de Santana]  [Vitória da Conquista]  [Itabuna]  [Jequié]         |
| Foto do Campus + Diferenciais (Hospital Veterinário, Centro Médico, Clínicas) |
| [Como Chegar (Maps)]  [Agendar Visita Guiada]                                 |
+-------------------------------------------------------------------------------+
| SIMULADOR DE BOLSA & CAPTAÇÃO DE LEAD:                                        |
| Esquerda: Slider de Nota ENEM (450 a 900 pts) -> Exibe "Até 80% de Bolsa"     |
| Direita: Formulário (Nome, E-mail, WhatsApp, Unidade, Curso) + Validação      |
+-------------------------------------------------------------------------------+
| DEPOIMENTOS DE ALUNOS | NOTÍCIAS RECENTES | FAQ ACCORDION                     |
+-------------------------------------------------------------------------------+
| FOOTER: Links institucionais, telefones, endereços dos 4 polos e dados do MEC |
+-------------------------------------------------------------------------------+
```

---

## 3. Estrutura de Componentização (React / Next.js)

O projeto foi construído utilizando o paradigma de componentização modular do React, desacoplando os dados estáticos/dinâmicos da camada de apresentação visual.

```
d:/re-unex/src/
├── app/
│   ├── globals.css          # Variáveis CSS de acessibilidade, cores Unex e utilitários
│   ├── layout.tsx           # Layout raiz com fontes Geist, metadados OpenGraph e pt-BR
│   └── page.tsx             # Composição sequencial de todas as seções
├── components/
│   ├── Navbar.tsx           # Barra de utilidades, acessibilidade, logo e menu gaveta
│   ├── HeroSection.tsx      # Seção principal de captação com badges e CTAs primários
│   ├── AdmissionMethods.tsx # Cards informativos das 6 vias de ingresso
│   ├── CoursesSection.tsx   # Vitrine dinâmica com busca, abas de categoria e modal
│   ├── CampusesSection.tsx  # Showcase com abas das 4 unidades e dados de infraestrutura
│   ├── AboutSection.tsx     # Pilares pedagógicos (PBL), história e métricas de impacto
│   ├── LeadCaptureSection.tsx # Simulador de bolsas interativo e formulário validado
│   ├── TestimonialsSection.tsx# Depoimentos humanizados com estrelas e fotos
│   ├── NewsSection.tsx      # Feed em grid de artigos e atualidades acadêmicas
│   ├── FaqSection.tsx       # Accordion de perguntas e respostas frequentes
│   ├── Footer.tsx           # Rodapé com endereços, contatos oficiais e dados legais
│   └── FloatingActions.tsx  # Botão fixo de WhatsApp e gatilho de retorno ao topo
└── data/
    └── unexData.ts          # Modelos de dados em TypeScript (Cursos, Campi, Notícias)
```

---

## 4. Tecnologias Escolhidas & Justificativa Técnica

| Tecnologia / Biblioteca | Função no Projeto | Justificativa Técnica & Pedagógica |
| :--- | :--- | :--- |
| **Next.js 16+ (App Router)** | Framework Front-end | Suporte nativo a SSR (Server-Side Rendering) e SSG (Static Site Generation), otimização automática de fontes e imagens, compilação veloz via Turbopack e deploy zero-config na Vercel. |
| **TypeScript** | Linguagem / Tipagem | Previne erros de tempo de execução, garante integridade dos dados dos cursos/campi via interfaces estritas (`Course`, `Campus`, `AdmissionMethod`) e melhora a manutenibilidade do código. |
| **Tailwind CSS v4** | Estilização Utilitária | Elimina a necessidade de arquivos CSS monolíticos, gera CSS minificado de alta performance em tempo de build, permite estilização rápida com design system consistente e suporte a temas. |
| **Lucide React** | Biblioteca de Ícones | Conjunto moderno, padronizado, de alta legibilidade, leve e modular, sem impacto adverso no bundle final. |
| **Framer Motion** | Micro-interações & Animações | Biblioteca robusta para animações fluidas, transições de layout, acordions e abertura suave de modais sem travar a thread principal do navegador. |

---

## 5. Comparativo: "Antes x Depois"

| Critério Avaliado | Site Original (`unex.edu.br`) | Nova Versão Redesenhada (Redesign) |
| :--- | :--- | :--- |
| **Arquitetura Base** | WordPress legado com dezenas de plugins sobrepostos e jQuery 3.7. | Next.js moderno com TypeScript e componentes modulares desacoplados. |
| **Hero Section** | Banners gráficos estáticos com textos embutidos na imagem (inacessíveis para leitores de tela). | Título semântico em HTML (`<h1>`), badges do MEC, CTAs acessíveis e visual responsivo. |
| **Captação de Leads** | Não existia formulário direto na home (dependia de links externos de WhatsApp). | Simulador de Bolsas interativo integrado com cálculo imediato de desconto e formulário com validação. |
| **Catálogo de Cursos** | 6 cards fixos estáticos, sem busca e sem categorização. | Catálogo interativo com busca em tempo real, filtros por área de conhecimento e modal informativo de grade. |
| **Apresentação dos Campi** | Disposição fragmentada (Feira de Santana solta em lista separada com sinal de "+"). | Painel interativo unificado com abas para Feira de Santana, Conquista, Itabuna e Jequié, mapas e rotas. |
| **Acessibilidade** | Dependente de plugins externos (Pojo / VLibras injetados por script). | Controles integrados de tamanho de fonte (A-/A+), modo de alto contraste nativo e HTML semântico. |
| **Performance e LCP** | LCP lento (> 3.5s) devido a dezenas de scripts bloqueantes de renderização. | Pré-renderização estática instantânea, sem dependências legadas e otimização total de assets. |
| **Navegação Mobile** | Menu complexo, gavetas profundas e barra marquee colada disputando atenção. | Menu gaveta limpo, atalhos prioritários para vestibular e botão de WhatsApp discreto e flutuante. |

---

## 6. Dificuldades Encontradas & Soluções Aplicadas

1. **Adequação às Diretrizes de Direitos Autorais e Uso Didático:**
   - *Desafio:* A diretriz exigia não copiar textos ou fotos institucionais diretamente do site oficial.
   - *Solução:* Reinterpretação autoral de toda a narrativa institucional ("Você em evolução"), recriação dos benefícios acadêmicos (PBL, simulação realística) e utilização de fotografias didáticas em alta resolução de bancos abertos (Unsplash) contextualizadas com os campi baianos.
2. **Atualização da Biblioteca de Ícones (Lucide React):**
   - *Desafio:* Em versões recentes do `lucide-react`, ícones de marcas proprietárias de redes sociais (como Instagram, Facebook e YouTube) foram descontinuados para reduzir o tamanho do pacote.
   - *Solução:* Implementação de SVGs inline otimizados e acessíveis diretamente no componente `Footer.tsx`, garantindo total conformidade com o build do Turbopack.
3. **Rigidez de Tipagem no Catálogo de Cursos:**
   - *Desafio:* Durante o build estático, divergências entre a tipagem estrita de turnos e as modalidades compostas (ex.: "Matutino / Noturno" e "Noturno / Híbrido") geraram erro no compilador TypeScript.
   - *Solução:* Refinamento da interface `Course` para aceitar strings descritivas dinâmicas, mantendo a robustez do schema sem bloquear a compilação do Next.js.

---

## 7. Possíveis Melhorias Futuras (Roadmap)

1. **Integração de Checkout e Matrícula via API:**
   - Conectar o formulário de captação de leads diretamente à API do sistema acadêmico da Rede UniFTC (ou CRM educacional como RD Station / HubSpot) para envio automático de e-mails de confirmação e link da prova online.
2. **Tour Virtual 360º dos Laboratórios:**
   - Adicionar visualizador WebGL (Three.js / React Three Fiber) para permitir que candidatos explorem as Clínicas Odontológicas e o Centro de Simulação Realística da UnexMED de forma imersiva.
3. **Chatbot com Inteligência Artificial para Atendimento:**
   - Implementar assistente virtual treinado com os editais de vestibular, cronograma do FIES/Prouni e documentação de matrícula, respondendo dúvidas instantaneamente 24/7.
4. **PWA (Progressive Web App):**
   - Habilitar Service Workers e manifesto web para que o candidato possa salvar a aplicação na tela inicial do celular como um aplicativo nativo.

---

## 8. Guia de Versionamento Git & Deploy

### 8.1. Histórico de Commits Semânticos Realizados
O repositório foi versionado utilizando as melhores práticas da indústria (*Conventional Commits*):
- `feat: setup project structure with Next.js and Tailwind CSS`
- `feat: implement responsive navbar and accessibility controls`
- `feat: create high-impact hero section with value propositions`
- `feat: add admission methods and interactive courses catalog`
- `feat: implement interactive campuses and institutional section`
- `feat: add lead capture form with scholarship simulator`
- `feat: add testimonials, news, FAQ and footer components`
- `docs: add comprehensive technical report and deployment guide`

### 8.2. Instruções para Publicação no GitHub
Para enviar o projeto para o seu GitHub pessoal:

```bash
# 1. No terminal do projeto (d:\re-unex):
git status

# 2. Crie um novo repositório no seu perfil do GitHub (ex: unex-landing-page-redesign)

# 3. Vincule o repositório remoto:
git remote add origin https://github.com/SEU_USUARIO/unex-landing-page-redesign.git

# 4. Envie o código principal:
git branch -M main
git push -u origin main
```

### 8.3. Publicação em 1 Clique na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** -> **"Project"**.
3. Selecione o repositório importado (`unex-landing-page-redesign`).
4. O Next.js será detectado automaticamente. Clique em **"Deploy"**.
5. Em menos de 1 minuto, o projeto estará ativo com HTTPS gratuito (ex: `https://unex-redesign.vercel.app`).
