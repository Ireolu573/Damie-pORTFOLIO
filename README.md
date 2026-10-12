# Shot By Dami: portfolio website

React + TypeScript + Vite. Recreated from the Claude Artifact version of the site (same layout, colours, fonts and content).

## Run it
You need Node.js 18 or newer (nodejs.org).

    npm install
    npm run dev        # opens the site locally (usually http://localhost:5173)
    npm run build      # checks types and makes the finished site in /dist
    npm run preview    # previews the finished /dist build

## Edit your content
Everything you see on the site is in **src/data/portfolio.ts**: headline, bio, details list, contact, links, groups and photos.
- Photos go in **public/images/** and are referred to as "/images/yourfile.jpg".
- To add a group, add another { name, items: [...] } to `groups`. Empty groups are hidden.
- A video link inside a group is `{ title: "...", videoUrl: "https://..." }`.
- Showreel: `reel.cover` (photo), `reel.video` (a file in public/videos) and/or `reel.link` (YouTube/Instagram link).
- Colours: change `theme` to "rose", "berry", "lilac", "peach", "sage" or "night". Palettes live in src/theme.ts.
- Styles are in src/styles (global.css, components.css, responsive.css).

## Deploy
Run `npm run build`, then upload the **dist** folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). On Netlify you can drag the dist folder onto netlify.com/drop.

## Notes
- This version has no "add photo" buttons. Those only worked inside Claude. Here you edit portfolio.ts and rebuild.
- There is no contact form, because the original design had none. Visitors reach you by the WhatsApp, call, email, Instagram and LinkedIn buttons.
- package-lock.json is created the first time you run `npm install`.
- Fonts load from Google Fonts, so the site needs an internet connection to show them.
