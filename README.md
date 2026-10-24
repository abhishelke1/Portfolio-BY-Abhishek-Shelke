# Abhishek Shelke — Portfolio

A responsive React portfolio with an interactive Three.js centerpiece, animated typography, scroll reveals, and visual project stories.

## Run locally

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The default build uses root-relative assets for Netlify and other root-domain hosts. `public/_redirects` preserves the existing Netlify fallback. `npm run deploy` builds with this repository's GitHub Pages base path before publishing `dist` to `gh-pages`.

## Where to edit

- `src/data/projects.js`: project descriptions, categories, repository links, and technical details.
- `src/components/Hero.jsx`: introduction and the three scene modes.
- `src/components/Sculpture.jsx`: procedural WebGL geometry, lighting, interaction, and cleanup.
- `src/components/About.jsx`, `Skills.jsx`, and `Contact.jsx`: profile, toolkit, and contact links.
- `src/index.css`: responsive layout, visual design, and motion.

The project previews are original interface concepts, labeled accordingly; they are not screenshots of the linked applications. Descriptions were checked against the public project READMEs. AgroEasy is labeled in development because its public repository currently documents the product direction.

## Motion and accessibility

- The Create, Connect, and Build buttons select three different 3D forms. Drag horizontally to rotate; vertical touch gestures can scroll the page.
- Motion follows the device's reduced-motion setting by default. The header Play/Pause control lets visitors explicitly override that preference for the current visit.
- Rendering pauses offscreen, in background tabs, and when animations are paused. Pixel ratio is capped at 1.5. Three.js loads separately from the page content.
- A CSS sculpture remains available if WebGL cannot initialize or its context is lost.
- Native project disclosures support the keyboard, filters announce their result count, and the mobile navigation closes with Escape.

## Verification

Build with `npm run build`. In the browser, check the three sculpture modes, Play/Pause, four project filters, native project disclosures, navigation anchors, mobile menu, and 320px / 390px / tablet / desktop layouts. Check reduced-motion behavior before enabling animations and confirm there are no runtime errors.
