# Reza Khorshidi - Personal Portfolio

A cinematic personal portfolio for Reza (Ramtin) Khorshidi: front-end developer, award-winning actor, and client advisor at RBC, working where finance meets technology.

## 🚀 Live Site
[rezakhorshidi.com](https://rezakhorshidi.com/)

## 🛠 Tech Stack
- **Core**: React 19, TypeScript (strict), Vite
- **Styling**: Tailwind CSS v4, configured in `src/index.css` with CSS-variable themes
- **Animation**: Framer Motion (page transitions, parallax, staggered reveals), Splitting.js
- **Routing**: React Router with clean URLs, prerendered per page for GitHub Pages
- **Hosting**: GitHub Pages with a custom domain (`public/CNAME`)

## ✨ Features

### 🎨 Four themes
Forest (default), Orchid, Dark and Clay, cycled from the navbar toggle and remembered per visitor. Every theme defines `on-surface-muted` / `on-surface-accent` text colours tuned to at least 4.5:1 contrast on its card colour.

### 🎬 Motion
- Page transitions with exit and enter animations, and a hero text reveal.
- Scroll-triggered reveals, parallax background spotlights, and a Splitting.js "Creative Journey" title.
- Respects the operating system's reduce-motion setting.

### 🔎 SEO and link previews
- `scripts/prerender-routes.mjs` runs after `vite build` and writes `developer.html`, `about.html`, etc. from `src/seo/routes.json`, so every page has its own title, description and canonical URL and returns a 200 on GitHub Pages. It also writes `404.html` and `sitemap.xml`.
- Open Graph and Twitter card tags with a 1200x630 preview image (`public/og-image.jpg`), and schema.org `Person` structured data.
- Old hash links (`/#/about`) redirect to the clean URL.

### 📱 Pages
- **Home**: hero and calls to action.
- **Developer**: tech stack, certificates, projects (code and live links).
- **Creative**: acting (expanding gallery, recent roles, *Foreign Homeland*), music, barista.
- **About**: career timeline and languages.
- **Contact**: contact details and a message form.

## 📦 Usage

```bash
npm install
npm run dev       # local development server
npm run lint      # ESLint
npm run build     # type-check, build, and prerender pages into dist/
npm run preview   # serve the production build locally
npm run deploy    # build and publish dist/ to the gh-pages branch
```

### Contact form
The form sends through [EmailJS](https://www.emailjs.com) when these variables are set. Copy `.env.example` to `.env.local` (git-ignored) and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without them, the form opens the visitor's email app with the message pre-filled.

### Adding a page
Add the route in `src/App.tsx` and its title and description in `src/seo/routes.json`; the build then prerenders it and adds it to the sitemap.

### Optimizing photos
```bash
npm install --no-save sharp
node scripts/optimize-images.cjs src/assets/images/photo.jpg
```
Writes a WebP (max 1600px wide) next to the original.

## 📄 License
No license file has been added yet, so all rights are reserved by default.
