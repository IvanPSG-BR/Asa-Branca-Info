# Asa Branca Informática - Landing Page

<!-- Badges serão adicionados aqui -->

## Índice

- [Asa Branca Informática - Landing Page](#asa-branca-informática---landing-page)
  - [Índice](#índice)
  - [Descrição do Projeto](#descrição-do-projeto)
  - [Status do Projeto](#status-do-projeto)
    - [Progresso Recente](#progresso-recente)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como Executar](#como-executar)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação](#instalação)
    - [Desenvolvimento](#desenvolvimento)
    - [Build de Produção](#build-de-produção)
  - [Filosofia do Projeto](#filosofia-do-projeto)
  - [Identidade Visual](#identidade-visual)
  - [Licença](#licença)

## Descrição do Projeto

**Asa Branca Informática** é uma landing page profissional e minimalista desenvolvida para o meu serviço de assistência técnica de computadores em Salvador-BA. O projeto foi construído seguindo a filosofia **Quickn'Lite (QnL)**, priorizando:

- **Performance extrema:** Site estático ultra-rápido com carregamento instantâneo
- **Leveza:** Código mínimo, sem JavaScript desnecessário no cliente
- **Inclusão digital:** Funciona perfeitamente em hardware modesto e conexões lentas
- **Acessibilidade:** Contraste WCAG AAA e navegação semântica

A landing page apresenta os serviços de manutenção, formatação e consultoria de hardware, com foco em transparência de preços e facilidade de contato via WhatsApp.

**Principais Seções:**

- **Hero:** Apresentação impactante com CTA direto para WhatsApp
- **Serviços:** Grid de 3 cards apresentando os principais serviços oferecidos
- **Processo:** "O Plano de Voo" - explicação do fluxo de atendimento em 3 passos
- **Diferenciais:** Destaque para ética, respeito ao hardware e transparência
- **Preços:** Tabela de pacotes com valores transparentes (Otimização, Decolagem, Consultoria)
- **FAQ:** Perguntas frequentes com accordion nativo (Zero-JS)
- **Contato:** Botão WhatsApp e telefone com função de copiar

## Status do Projeto

O projeto encontra-se atualmente em **desenvolvimento ativo**.

**Fase Atual:** Implementação de Componentes Concluída

**Última Atualização:** 09/01/2026

### Progresso Recente

- ✅ **Infraestrutura completa:** Astro v5.16.7 + Tailwind CSS v3.4.19 + DaisyUI v5.5.14
- ✅ **Layout base:** SEO completo para Salvador-BA com Schema.org JSON-LD
- ✅ **Componentes principais:** Hero, ServiceGrid, ProcessSection, DifferentialsSection implementados
- ✅ **Navegação:** Navbar sticky com menu mobile responsivo
- ✅ **Preços:** PricingSection com 3 pacotes e destaque para "Pacote Decolagem"
- ✅ **FAQ:** Accordion nativo HTML5 (Zero-JS) com 5 perguntas
- ✅ **Contato:** Integração WhatsApp e telefone com copy-to-clipboard
- ✅ **UX:** BackToTop button com scroll suave
- ✅ **Contraste:** Todos os textos passam WCAG AAA (contraste mínimo 10:1)
- 🚧 **Em desenvolvimento:** Seção "Sobre o Técnico"
- 🚧 **Pendente:** Otimização de imagens e testes de performance

Para mais detalhes sobre o progresso, consulte [docs/Progresso.md](docs/Progresso.md).

## Funcionalidades

As principais funcionalidades implementadas incluem:

**Funcionalidades de Navegação:**

- ✅ Navbar sticky com links de navegação suave (Início, Serviços, Processo, Preços)
- ✅ Menu mobile responsivo com toggle
- ✅ Botão "Back to Top" que aparece ao rolar a página
- ✅ Botão WhatsApp fixo na navbar

**Funcionalidades de Conteúdo:**

- ✅ Hero section com logo, título impactante e CTA amarelo
- ✅ Grid de 3 serviços com ícones Lucide inline (Zero-JS)
- ✅ Processo de atendimento em 3 passos com linha conectora
- ✅ Cards de diferenciais técnicos com badges destacados
- ✅ Tabela de preços com 3 pacotes (Lite, Standard, Consultoria)
- ✅ FAQ com accordion nativo HTML5 `<details>` (Zero-JS)
- ✅ Seção de contato com WhatsApp e telefone copiável

**Funcionalidades de UX:**

- ✅ Micro-interações com hover states e transições CSS
- ✅ Padrões de fundo (dots e grid) para quebrar monotonia visual
- ✅ Scroll suave para âncoras internas
- ✅ Copy-to-clipboard para número de telefone (mínimo JS inline)
- ✅ Responsividade completa (mobile-first)

## Tecnologias Utilizadas

O desenvolvimento da landing page utiliza as seguintes tecnologias:

- **Framework:** Astro v5.16.7 (Static Site Generator)
- **Linguagem:** TypeScript
- **Gerenciador de Pacotes:** pnpm
- **Estilização:** Tailwind CSS v3.4.19
- **Componentes UI:** DaisyUI v5.5.14
- **Ícones:** Lucide React v0.562.0 (renderizados como SVG inline)
- **Biblioteca de Componentes:** React v19.2.3 (apenas para ícones, sem JS no cliente)
- **Tipografia:** Google Fonts (Inter + Fira Code)
- **SEO:** Schema.org JSON-LD para negócio local
- **Otimização:** Compressão HTML nativa do Astro

**Filosofia Zero-JS:**

- Navbar usa CSS `sticky` (sem JavaScript para fixação)
- FAQ usa elemento nativo `<details>` do HTML5
- Animações e transições via CSS puro
- JavaScript mínimo apenas para: mobile menu toggle (3 linhas), back-to-top (3 linhas), copy-to-clipboard (inline)

## Estrutura do Projeto

```
asa-branca-informatica/
├── public/                          # Arquivos estáticos
│   ├── asa-branca-informatica-v3-no-bg.webp
│   └── favicon.png
├── src/
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── BackToTop.astro         # Botão voltar ao topo
│   │   ├── ContactSection.astro    # Seção de contato
│   │   ├── DifferentialsSection.astro
│   │   ├── FAQSection.astro        # Perguntas frequentes
│   │   ├── Hero.astro              # Seção hero
│   │   ├── Navbar.astro            # Barra de navegação
│   │   ├── PricingSection.astro    # Tabela de preços
│   │   ├── ProcessSection.astro    # O Plano de Voo
│   │   └── ServiceGrid.astro       # Grid de serviços
│   ├── layouts/
│   │   └── Layout.astro            # Layout base com SEO
│   ├── pages/
│   │   └── index.astro             # Página principal
│   └── styles/
│       └── global.css              # Estilos globais e componentes
├── docs/                            # Documentação do projeto
│   ├── ContextoDeProduto.md
│   ├── ContextoTecnico.md
│   ├── Progresso.md
│   └── RegrasDeNegócio.md
├── astro.config.mjs                 # Configuração do Astro
├── tailwind.config.mjs              # Configuração do Tailwind
├── package.json
└── README.md
```

## Como Executar

### Pré-requisitos

- Node.js v18+ ou superior
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/IvanPSG-BR/asa-branca-informatica.git

# Entre no diretório
cd asa-branca-informatica

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:4321/
```

### Build de Produção

```bash
# Gere os arquivos estáticos otimizados
pnpm run build

# Visualize o build localmente
pnpm run preview
```

Os arquivos otimizados estarão na pasta `dist/` prontos para deploy em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc).

## Filosofia do Projeto

O projeto segue a filosofia **Quickn'Lite (QnL)**, que prioriza:

1. **Performance:** Carregamento instantâneo com HTML estático pré-renderizado
2. **Leveza:** Mínimo de JavaScript no cliente (apenas 6 linhas + inline mínimo)
3. **Inclusão Digital:** Funciona perfeitamente em hardware modesto (Pentium 4, 2GB RAM)
4. **Acessibilidade:** Contraste WCAG AAA, navegação por teclado, semântica HTML5
5. **SEO Local:** Otimizado para buscas em Salvador-BA com Schema.org
6. **Transparência:** Preços claros e processo de atendimento explicado

## Identidade Visual

**Paleta de Cores:**

| Nome           | Hex       | Uso                         |
| -------------- | --------- | --------------------------- |
| Ice Gray       | `#F5F7FA` | Fundo principal             |
| Vibrant Yellow | `#FFD700` | CTAs e destaques            |
| Deep Black     | `#0A0A0A` | Títulos e textos principais |
| Soft Gray      | `#6B7280` | Textos secundários          |
| Accent Yellow  | `#FFC107` | Acento alternativo          |

**Tipografia:**

- **Corpo:** Inter (Google Fonts) - Legibilidade em telas
- **Mono:** Fira Code (Google Fonts) - Preços e detalhes técnicos

**Contraste:**

Todos os textos passam WCAG AAA:

- Botões amarelos: 10.4:1 (texto preto sobre amarelo)
- Texto principal: 16.8:1 (preto sobre cinza-gelo)
- Badges: 8.59:1 (preto sobre amarelo)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

**Desenvolvido com ❤️ para inclusão digital em Salvador-BA**
