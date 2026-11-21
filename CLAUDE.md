# CLAUDE.md

Guidance for working in the **QRS Contracting L.L.C.** website repository.

## Common Commands

### Development
- `npm run dev` — Next.js development server (default http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run type-check` — TypeScript check without emit

### Linting
- `npm run lint` — ESLint
- `npm run lint:fix` — Auto-fix lint issues

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # UI, sections, header/footer
└── lib/                 # constants, qrs-data.json, types, utils

public/
├── upload/              # QRS site images & media
└── images/              # Banners & processed brand assets
```

## Architecture Notes

- **Framework**: Next.js 14 App Router + TypeScript (strict)
- **Styling**: Tailwind CSS — navy/gold QRS brand tokens in `tailwind.config.ts`
- **Content**: Primary copy and media paths come from `src/lib/constants.ts` + `src/lib/qrs-data.json`
- **Animations**: Framer Motion (`ScrollReveal`, hero fade-ups)

## Brand Rules

- Company name: **QRS Contracting L.L.C.**
- Branding, copy, and media must stay QRS-only (no old template firm names)
- Header logo: gold mark + white secondary text (`/logo-header.png`)
- Hero uses `/images/banners/main-banner.png` with left navy gradient overlay

## Development Workflow

1. Edit under `src/`
2. Prefer `upload/` QRS images for media
3. Run `npm run type-check` and `npm run lint` before committing
4. Verify mobile + desktop after layout/header changes
