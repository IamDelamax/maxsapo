# maxsapo.me

Personal site of Max Sapo (Delamax). Astro, static, deployed to GitHub Pages on push to `main`.

## Local development

```bash
npm install
npm run dev
```

## Content model

All copy lives in TypeScript, bilingual:

- `src/i18n/en.ts` — English content (single source of truth for the shape)
- `src/i18n/ru.ts` — Russian content (same shape, checked by the `Content` type)
- `src/data/site.ts` — links, email, socials
- `src/data/videos.ts` — YouTube video registry (talks / product / music)

Pages under `src/pages` are thin wrappers around shared sections in `src/sections`,
rendered once per language (`/` and `/ru/`).

## Analytics

Visitor tracking via [GoatCounter](https://www.goatcounter.com) (free, no
cookies). The snippet lives in `BaseLayout.astro`; the account URL is
`site.goatcounter` in `src/data/site.ts`.

- Dashboard on the site: <https://maxsapo.me/stats> (noindex, not linked
  from the nav, but public to anyone with the URL).
- Full dashboard (referrers, countries, graphs): <https://maxsapo.goatcounter.com>.

One-time setup: sign up at goatcounter.com with code `maxsapo` (must match
`site.goatcounter`), then in GoatCounter's Settings enable the visitor
counter so `/stats` can read counts via the public `counter/*.json` API.

## TODO for Max

- Confirm the public email in `src/data/site.ts` (currently `max@happyverse.ai`).
- Hero photo is `public/img/hero.jpg` (cropped from IMG_5944). Swap the file to change it.
