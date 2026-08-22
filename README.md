# Kioku no Basho — 記憶の場所 / Places of Memory

A static, front-end-only bilingual (Thai/English) documentary archive of Japan's
stigmatized properties ("jiko bukken" / 事故物件) and places of dark history.
Case-file style, respectful, no graphic content.

## Stack

- React 18 + Vite 5
- TailwindCSS 3 (dark theme by default, class strategy)
- React Router **HashRouter** (required for GitHub Pages)
- Framer Motion (drawer/lightbox transitions) + CSS keyframes (flicker/fade)
- react-helmet-async for per-route SEO + schema.org JSON-LD
- Custom lightweight i18n Context (TH/EN, persisted in `localStorage`)

## Development

```bash
npm install
npm run dev
```

## Build & deploy (GitHub Pages)

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build   # sets the asset base path
npm run deploy                                   # gh-pages -> dist/
```

Or build plain (`npm run build`) and upload `dist/` anywhere static.

## SEO note

This is a client-rendered SPA on GitHub Pages. Per-route `<title>`, meta
description, Open Graph and JSON-LD are set at runtime via react-helmet-async.
Crawlers that don't execute JavaScript will only see the fallback meta in
`index.html`. For full crawler support, add a prerendering step
(`react-snap` or `vite-plugin-ssg`) before deploying — the HashRouter route
scheme is compatible with both.

## Adding a place

Append an entry to `src/data/places.js`: a slug, region, year, categories,
a `tone` (`blood` | `bruise`) for the card gradient, and `i18n.en` / `i18n.th`
objects containing `title`, `location`, `excerpt`, and `sections` (paragraph /
message / attachment blocks). Then extend `public/sitemap.xml`.

## Content policy

Documentary and respectful by design: no graphic descriptions, no methods,
no exact addresses of occupied private residences, content warnings where
topics require them, and crisis-support numbers in the footer.
