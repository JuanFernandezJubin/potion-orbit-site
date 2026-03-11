# Potion Orbit Site

Modern, production-ready landing page for **Potion** — a web design and application development agency.

Built with **Vite + Vue 3 + TypeScript + TailwindCSS + shadcn-vue**.

## Tech Stack

| Technology | Purpose |
|---|---|
| Vue 3 | UI framework (Composition API) |
| Vite | Build tool & dev server |
| TypeScript | Static typing across the entire codebase |
| Tailwind CSS 4 | Utility-first CSS with CSS variable design tokens |
| shadcn-vue | Accessible, customizable UI components |
| Vue I18n | Internationalization (English + Spanish) |
| Zod | Schema validation (newsletter form) |
| Lucide Icons | Icon library |
| Vue Router | SPA routing (prepared for multi-page) |
| Docker + Nginx | Production containerization |

## Getting Started

### Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

### Docker

```bash
docker compose up -d --build
```

The site is served at `http://localhost:8080`.

## Project Structure

```
src/
├── assets/css/main.css          # Tailwind + CSS variable design tokens
├── components/
│   ├── ui/                      # Base UI components (Button, Card, Badge, etc.)
│   ├── layout/                  # AppHeader, AppFooter, AppLogo
│   ├── sections/                # Landing page sections (Hero, Features, Pricing, etc.)
│   └── shared/                  # Reusable components (FeatureCard, PricingCard, etc.)
├── composables/                 # useTheme, useScrollspy
├── data/site.ts                 # Static data with i18n keys
├── i18n/
│   ├── locales/en.json          # English translations
│   ├── locales/es.json          # Spanish translations
│   └── index.ts                 # Vue I18n setup
├── lib/utils.ts                 # cn() helper for class merging
├── schemas/newsletter.ts        # Zod validation schema
├── types/index.ts               # TypeScript interfaces
├── views/HomePage.vue           # Main landing page view
├── router.ts                    # Vue Router configuration
├── App.vue                      # Root component
└── main.ts                      # Application entry point
```

## Internationalization (i18n)

The app supports **English** (default) and **Spanish**. To add a new language:

1. Create `src/i18n/locales/<code>.json` with all translation keys
2. Import it in `src/i18n/index.ts` and add it to `messages`

All UI texts use translation keys — no hardcoded strings in components.

## Design Tokens

Colors are defined as CSS variables in `src/assets/css/main.css`. To customize the palette, edit the `:root` and `.dark` blocks. The Tailwind theme references these variables automatically.

## Code Conventions

- **Source code, variables, file names**: English
- **Code comments**: Spanish
- **TypeScript**: Strict mode enabled
