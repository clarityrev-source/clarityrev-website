# ClarityRev Website

Active codebase for clarityrev.com. Next.js 15 (App Router) + TypeScript + Tailwind CSS 4. Static single-page positioning site — no backend, no CMS, no environment variables, no secrets.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build     # production build (also type-checks)
npm run start     # serve the production build locally
```

## Deploy

Vercel-ready as-is: import the repo in Vercel, framework preset "Next.js", no configuration needed. **Do not deploy without Bob's review** — see `docs/website/06_IMPLEMENTATION_NOTES.md` for the pre-deployment checklist.

## Structure

- `app/` — layout (metadata, fonts), the single page, global styles/design tokens, favicon
- `components/` — shared primitives (Container, CtaLink, Eyebrow, Header, Footer, SignalCard)
- `components/sections/` — the page's sections in order
- `docs/website/` — strategy and implementation documentation (premise challenge, expert panel, positioning, red team, recommendation, implementation notes)

## What does not belong here

Marketing copy drafts, brand assets, and positioning source docs belong in `05_Company/`. This folder is the live codebase plus its own build documentation.

## Rules

- Treat this like a production codebase — no untested changes pushed directly
- No secrets, no `.env` files — this site needs none
- Copy changes must respect the banned-vocabulary list in `docs/website/03_POSITIONING_STRATEGY.md`
