# Clipupp — marketing site (Next.js)

Production Next.js port of the Clipupp B2B-automation site. 7 pages, server-rendered
(SEO-friendly), with the original animations, hover states, scroll reveals, counters,
tabs, filters, FAQ accordion and ROI calculator preserved.

## Stack
- Next.js 14 (App Router), React 18 — no other runtime deps
- Fonts: Geist / Geist Mono (Google Fonts)
- All visuals are SVG/CSS — no image assets to host

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / deploy
```bash
npm run build    # regenerates page data, then next build
npm start
```
Deploy to Vercel: push to GitHub, import the repo — zero config.

## Routes
| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/solutions` | Solutions (by department) |
| `/case-studies` | Case studies |
| `/pricing` | Engagement models + ROI calc + FAQ |
| `/about` | About |
| `/contact` | Book a demo (form) |

## How it works / editing
- Source design lives in `extracted/*.dc.html` (the Claude-design export).
- `scripts/build.mjs` extracts each page's markup + behavior script, inlines the
  shared nav/footer, rewrites links to routes, and writes `lib/*.generated.*`.
- `components/PageRuntime.jsx` runs the page behavior scripts on the client and
  wires `style-hover`.
- To change copy now: edit the HTML in `extracted/*.dc.html`, then `npm run gen`.
  (Longer term these can be refactored into hand-written React components.)

## Brand rename
The name "Clipupp" is set in `scripts/build.mjs` (`const BRAND`). Change it and run
`npm run gen`.
