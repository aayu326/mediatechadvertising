# MediaTech Advertising — Homepage

Single-page React + Vite site. No router, no backend, no CMS.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Build for production with `npm run build`, preview with `npm run preview`.

## Where to edit things

| What | File |
|---|---|
| Phone, email, WhatsApp, social links | `src/site.js` |
| Colors, fonts, spacing, all styling | `src/index.css` (tokens at the top) |
| Section order | `src/App.jsx` |
| Page title, meta description, Open Graph | `index.html` |
| Favicon | `public/favicon.svg` |

## Things to replace before launch

1. **Testimonials** — `src/components/Testimonials.jsx` holds clearly-marked placeholder
   quotes. Replace `TESTIMONIALS` with real, approved client feedback and delete the
   "Placeholder content" note.
2. **Client story videos** — in the same file, set `embedUrl` (YouTube/Vimeo embed link) or
   `videoSrc` (a file in `/public`) on each entry in `STORIES`. The player appears
   automatically once either is filled in.
3. **Project screenshots** — `src/components/Portfolio.jsx` uses gradient placeholders. Drop
   images into `public/work/` and set `image: '/work/name.jpg'` on that project.
4. **Open Graph image** — add a 1200×630 image at `public/og-image.jpg`.
5. **Social profile URLs** — `instagram` and `linkedin` in `src/site.js` currently point at
   the platform homepages.
6. **Contact form** — validation and the success message run entirely in the browser. Nothing
   is sent anywhere. To make it live, POST `values` inside `handleSubmit` in
   `src/components/Contact.jsx` to a form service (Formspree, Web3Forms) or your own endpoint.

## Adding pages later

The nav links are hash anchors that smooth-scroll to sections. When you add real pages,
install `react-router-dom`, wrap `App` in a router, and swap those anchors for `<Link>`.
The `LINKS` array in `src/components/Navbar.jsx` is the only place you need to change.

## Scroll animations

One `IntersectionObserver` in `App.jsx` watches every element with a `data-reveal`
attribute and adds `.is-visible` when it enters the viewport. To animate something new, add
`data-reveal` to it. To stagger a group, add `style={{ '--reveal-delay': '90ms' }}`.
All motion is disabled under `prefers-reduced-motion`.
