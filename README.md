# Ridvan Otel — Çeşme

Modern landing page for [Ridvan Hotel](https://ridvanotel.com). Vite + React, TR/EN, dark mode, gallery, testimonials, and mailto reservation form.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Stack

- Vite 6 + React 18 + TypeScript
- Tailwind CSS 3.4
- GSAP (scroll animations)
- lucide-react

## Customize

| Area | Path |
|------|------|
| Contact, brand, CTA | `src/config/site.ts` |
| Copy TR/EN | `src/i18n/translations.ts` |
| Rooms | `src/data/rooms.ts` |
| Gallery & hero slides | `src/data/gallery.ts` |
| Photos | `public/images/ro/` |

## Deploy (Vercel)

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Suggested staging URL: `ridvanotel.com` (project name `ridvanotel.com` on Vercel).