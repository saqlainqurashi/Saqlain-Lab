# SAQLAIN//LAB

A responsive AI engineering portfolio for **Muhammad Saqlain Arshad**, built with React and Vite.

## Start locally

Requirements: Node.js 20.19+ and npm.

```bash
git clone https://github.com/saqlainqurashi/Saqlain-Lab.git
cd Saqlain-Lab
npm install
npm run dev
```

Open the localhost URL printed by Vite (usually http://localhost:5173).

## Build and preview

```bash
npm run build
npm run preview
```

## Customize

- `src/data.js`: project cards, repository links, experience, skills.
- `src/App.jsx`: hero, layout, navigation, case-study interactions.
- `src/styles.css`: design tokens, motion, layout, responsiveness.
- `index.html`: title, SEO metadata and fonts.
- `public/favicon.svg`: brand favicon.

## Deploy

Import this repository into Vercel. Use **Vite** preset, build command `npm run build`, output directory `dist`. No secrets or backend are needed for this version.

## Content and privacy

Professional content is based on the supplied resume and previously built projects. Enterprise case studies are deliberately high-level; review them against employer confidentiality agreements before sharing. The source resume is **not** included in the public website because it contains a personal phone number.

## Stack

React, Vite, Lucide icons, custom responsive CSS and lightweight native CSS animations.

## Continuous integration

GitHub Actions runs a production build on each push or pull request to `main`. Check the **Actions** tab to confirm the build succeeds. Deploy only after that check passes.

## Next design improvements

- Replace abstract project visuals with screenshots and architecture diagrams approved for public use.
- Add a reviewed PDF resume as a downloadable public asset (only after removing any contact details you do not want published).
- Add a custom domain and social sharing image after deploying.

## Accessibility

The site supports keyboard navigation, visible focus styles, reduced-motion preferences and mobile layouts. The project dialog focuses its close button and returns focus when dismissed.

## Phase 4 — Case-study system

- Seven **original UI-inspired project previews** (not actual product screenshots).
- Public-friendly case studies with challenge, approach, contribution and demonstrated capability.
- Interactive, accessible architecture lanes with selectable stages and explanatory descriptions.
- Shareable deep links: add `?case=03` to the URL to open the KnowledgeForge AI study; other IDs run from `01` through `07`.
- Focus-managed study dialogs and mobile-friendly horizontal architecture scrolling.
- A featured RAG architecture callout in the project gallery.

### Architecture accuracy and confidentiality

Architecture visuals are **conceptual summaries**, not verified internal deployment blueprints. Public enterprise examples omit sensitive bank and insurance platform details. Review every claim and repository link for employer confidentiality requirements before sharing widely.

### Editing case studies

- `src/caseStudies.js`: narratives, interactive flow stages and integrations.
- `src/CaseStudy.jsx`: case-study UI and architecture interactions.
- `src/ProjectVisual.jsx`: distinctive preview illustrations.
- `src/project-showcase.css` and `src/case-studies.css`: design and responsive behavior.


## Immersive design (Phase 5)

- **Actual WebGL hero object**: React Three Fiber renders a luminous geometric artifact with orbiting rings, dynamic lighting, particles, and cursor-reactive rotation. The scene is dynamically imported so case studies and page content do not require the 3D bundle during initial parsing.
- **Motion controls**: Pause / animate button; motion automatically respects the visitor's reduced-motion preference. The scene stops its animation loop when off-screen and degrades to a CSS 3D fallback when WebGL is unavailable.
- **Interactive Signal Lab**: Three selectable creative modes (Reason, Automate, Ship) with layered, perspective-transformed CSS 3D system panels.
- **Physical depth cards**: Pointer-reactive 3D tilt and specular lighting, plus a full-width feature card for Collect360 on the unfiltered project view.
- **Responsive and accessible**: keyboard-operable interactive controls, touch fallback, mobile-specific layout, reduced-motion overrides.

### Dependencies

`@react-three/fiber` v9 and Three.js support the React 19 application. WebGL artwork loads through `React.lazy`, not into the main JavaScript bundle.

To run after pulling the changes:

```sh
git pull origin main
npm install
npm run dev
```
