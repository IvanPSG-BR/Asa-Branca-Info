# Contexto Técnico - Asa Branca Informática

## Stack Tecnológica

### Framework Principal

- **Astro v5.16.7** - Static Site Generator
  - Filosofia: Islands Architecture
  - Zero JS por padrão
  - Hidratação parcial quando necessário
  - Build otimizado para performance

### Estilização

- **Tailwind CSS v3.4.19** - Utility-first CSS
- **DaisyUI v5.5.14** - Componentes prontos para Tailwind
- **@tailwindcss/typography v0.5.19** - Tipografia otimizada

### Componentes Interativos

- **React v19.2.3** - Para componentes que precisam de interatividade
- **Lucide React v0.562.0** - Biblioteca de ícones SVG otimizados

## Arquitetura do Projeto

```
asa-branca-informatica/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout base com SEO
│   ├── pages/
│   │   └── index.astro           # Página inicial
│   ├── styles/
│   │   └── global.css            # Estilos globais + Tailwind
│   └── components/               # (a criar)
├── public/                       # Assets estáticos
├── docs/                         # Documentação do projeto
├── astro.config.mjs              # Configuração do Astro
├── tailwind.config.mjs           # Configuração do Tailwind
└── package.json                  # Dependências
```

## Identidade Visual

### Paleta de Cores

| Nome             | Hex     | Uso                        |
| ---------------- | ------- | -------------------------- |
| `ice-gray`       | #F5F7FA | Fundo principal            |
| `vibrant-yellow` | #FFD700 | CTAs, botões, destaques    |
| `deep-black`     | #0A0A0A | Títulos, textos principais |
| `soft-gray`      | #6B7280 | Textos secundários         |
| `accent-yellow`  | #FFC107 | Acento alternativo         |

### Tipografia

- **Corpo do texto:** Inter (Google Fonts)

  - Pesos: 300, 400, 500, 600, 700, 800
  - Uso: Parágrafos, navegação, botões

- **Preços e detalhes técnicos:** Fira Code (Google Fonts)
  - Pesos: 400, 500, 600
  - Uso: Valores monetários, especificações técnicas

### Tamanhos de Fonte

```css
display: 3.5rem (56px) - line-height: 1.1 - weight: 800
h1: 2.5rem (40px) - line-height: 1.2 - weight: 700
h2: 2rem (32px) - line-height: 1.3 - weight: 600
h3: 1.5rem (24px) - line-height: 1.4 - weight: 600
body: 1rem (16px) - line-height: 1.6 - weight: 400
small: 0.875rem (14px) - line-height: 1.5 - weight: 400
```

## Componentes Customizados (CSS)

### Botões

- `.btn-primary` - Botão amarelo vibrante com hover e animação
- `.btn-secondary` - Botão outline com transição

### Layout

- `.container-custom` - Container responsivo (max-width: 7xl)
- `.section-padding` - Espaçamento vertical responsivo

### Cards

- `.card-base` - Card branco com sombra e hover

### Utilitários

- `.price-display` - Display de preços em fonte mono
- `.badge-highlight` - Badge amarelo para destaques
- `.text-gradient-yellow` - Texto com gradiente amarelo

## SEO e Performance

### Meta Tags Implementadas

- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ SEO Local (Salvador-BA)
- ✅ Schema.org JSON-LD (ComputerStore)
- ✅ Geo tags (coordenadas de Salvador)

### Otimizações

- ✅ Compressão HTML
- ✅ Preconnect para fontes
- ✅ Font-smoothing antialiased
- ✅ Focus-visible para acessibilidade
- ⏳ Lazy loading de imagens (a implementar)
- ⏳ Critical CSS (a implementar)

## Filosofia QnL (Quick'n'Lite)

### Princípios

1. **Performance First** - Site deve carregar rápido mesmo em conexões lentas
2. **Inclusão Digital** - Funcionar bem em hardware modesto
3. **Acessibilidade** - WCAG 2.1 AA compliance
4. **SEO Local** - Otimizado para buscas em Salvador-BA

### Métricas Alvo

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 95
- Bundle Size: < 100KB (inicial)

## Comandos Úteis

```bash
# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview da build
pnpm run preview

# Verificar tipos
pnpm run astro check
```

## Integrações Configuradas

### @astrojs/tailwind

```js
tailwind({
  applyBaseStyles: false, // Usamos nosso global.css
});
```

### @astrojs/react

```js
react(); // Para componentes interativos
```

## DaisyUI - Tema Customizado

```js
daisyui: {
  themes: [{
    asabranca: {
      primary: '#FFD700',
      secondary: '#FFC107',
      neutral: '#0A0A0A',
      'base-100': '#F5F7FA',
      // ... outros
    }
  }],
  darkTheme: false, // Mantém consistência visual
}
```

## Próximas Implementações Técnicas

- [ ] Componentes React para formulários
- [ ] Integração com API de WhatsApp
- [ ] Sistema de validação de formulários
- [ ] Otimização de imagens (Sharp/Astro Image)
- [ ] Service Worker para PWA
- [ ] Analytics (Google Analytics ou Plausible)
