# Go Unmanual: marketing site (Next.js)

Product-led site for Go Unmanual. Two products are front and centre:

- **Lead Management System** for real estate (`/products/lead-management`)
- **HRMS, Payroll & Compliance** for businesses of every size (`/products/hrms-payroll`)

Custom services (AI, software, automation, data, marketing, support) are still covered.

## Stack
- Next.js 14 (App Router), React 18, no other runtime dependencies
- Fonts: Bricolage Grotesque (display), Geist (text), Geist Mono (data), all from Google Fonts
- All styling lives in `app/globals.css` (design tokens at the top)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routes
| Route | Page |
|-------|------|
| `/` | Home |
| `/products/lead-management` | Lead Management System (with leak calculator) |
| `/products/hrms-payroll` | HRMS, Payroll & Compliance |
| `/industries` | Real estate · Businesses (HR) · Insurance · others (`/solutions` redirects here) |
| `/services` | Custom services |
| `/case-studies` | Opaks Realty + other work |
| `/pricing` | How we engage + FAQ |
| `/about` | About, team, security |
| `/contact` | Book a demo (form posts to Google Apps Script) |

## Editing
- Brand, contact details, form endpoint, product names and nav: `lib/site.js`
- Shared pieces: `components/` (`Nav`, `Footer`, `HeroConsole` animated demo,
  `LeakPipe`, `LeakCalculator`, `ContactForm`, `Blocks` for CTA/FAQ/section heads)
- Client logos: `public/clients/`
- Add `className="rv"` to any element to fade it in on scroll.
