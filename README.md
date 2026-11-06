# James Waters Gardening Services

Website for **James Waters Gardening Services** — a friendly, fully insured gardener based in Headingley, Leeds.

Built with [Next.js](https://nextjs.org) (static export) and Tailwind CSS v4.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services preview, trust points, before/after, reviews, service areas |
| `/services` | All 8 services |
| `/projects` | Project grid with category filter |
| `/contact` | Free-quote form (opens WhatsApp) + contact details |

## TODO before going live

- [ ] Replace `/images/placeholder-garden.jpg` with real gardening photos (see placeholder list in README or in code comments).
- [ ] Set `HAS_LOGO_IMAGE = true` in `src/components/ui/Logo.tsx` once `/public/images/logo.png` is ready.
- [ ] Set `FACEBOOK_URL` in `src/data/site.ts` to the real Facebook page URL.
- [ ] Replace full text of Philippa Barrett's review in `src/data/reviews.ts`.
- [ ] Add the name of the third reviewer (currently "Facebook customer") in `src/data/reviews.ts`.
- [ ] Set `SITE_URL` in `src/data/site.ts` to the real production domain.
- [ ] Check/update Open Graph image once real photos are available.
