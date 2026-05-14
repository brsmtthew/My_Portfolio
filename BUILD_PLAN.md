# Boris Matthew Dairo Personal Portfolio Build Plan

## Project Overview
- Project name: `Boris Matthew Dairo`
- Category: personal portfolio website
- Target users: recruiters, technical clients, automation stakeholders, collaborators
- Primary outcome: visitors quickly understand Boris Matthew Dairo as a full-stack and AI automation builder, inspect work, and contact him.
- Hero interaction role: personal brand / 3D glass showcase. A left-intro/right-portrait hero imports the local portrait from `src/assets`, frames it in layered liquid-glass depth panels, and keeps all critical copy and CTAs DOM-accessible.

## Objectives
- Must-have: React/Vite implementation, mobile-first responsive layout, contact form validation, static local portrait asset, liquid-glass theme, clean navigation text, repaired navigation hover, and 3D-styled hero presentation.
- Nice-to-have: project/system cards with operational metrics, glass surfaces, animated border glow, and visual depth cues inspired by modern iOS interfaces.
- Non-goals: auth, database, CMS, payment, blog, backend email delivery.
- Success criteria: production build passes, preview serves locally, no obvious horizontal overflow at mobile/tablet/desktop/wide checks, and the hero portrait loads from the React asset pipeline.

## Tech Stack Decision
| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | React + Vite | Existing project stack; enough interactivity for one-page portfolio |
| Styling | Vanilla CSS | Precise design-system control without adding Tailwind runtime/build config |
| Hero interaction | Imported JPG + CSS 3D layers | Local React asset pipeline with a polished static hero |
| State | Local React state | Mobile menu and contact form only |
| Data | Static arrays in `App.jsx` | Portfolio content is fixed for now |
| Auth | N/A | Public portfolio has no protected routes |
| Hosting | Vercel / Netlify / GitHub Pages | Static Vite output works well on all |

## System Architecture
- Single route: `/`
- Component boundaries: header/nav, hero portrait, about, services, stack, work, systems, history, process, contact, footer.
- Hero portrait lifecycle: `App.jsx` imports the local image from `src/assets`, allowing Vite to fingerprint it for production builds.
- Progressive enhancement: the portrait remains visible even if JavaScript fails after the initial document loads.
- Third-party integrations: none.

## Page Map
- `/`: home portfolio page. Sections: hero, about, services, stack, work, systems, history, process, contact. CTA: contact/hire.

## Design System Plan
- Brand: Boris Matthew Dairo personal portfolio with a cyber-clinical engineering system based on `ENGINEER_CORE_V1`.
- Colors: obsidian `#050505`, warm off-white `#f7f2ed`, electric blue `#4b8eff`, neon green `#13ff43`, surface `#101010`, soft glass borders, muted grid lines.
- Typography: system Inter-style sans fallback for headlines; JetBrains Mono-style mono fallback for labels. No external font dependency.
- Layout: max width 1440px, mobile margins 20-24px, desktop margins 64-80px, large section rhythm.
- Components: rounded liquid-glass buttons, clean text chips, glass cards, status dots, underline inputs, project panels, timeline rows, and 3D portrait frame.

## UI/UX Plan
- Navigation: sticky topbar with desktop links and mobile disclosure menu.
- Visual hierarchy: conversational hero headline with portrait focus; huge section titles; project/system details secondary; mono metadata tertiary.
- Forms: accessible labels, inline errors, success/status live region, mailto submission fallback.
- Responsive: mobile-first stacks; two-column layouts at tablet; wide editorial grids at desktop.

## Component Inventory
- [x] Header / mobile menu
- [x] Hero / 3D portrait frame
- [x] About metrics
- [x] Services grid
- [x] Stack grid
- [x] Project showcase
- [x] Automation systems
- [x] History timeline
- [x] Process cards
- [x] Contact form
- [x] Footer

## Development Phases

### Phase 1 - Project Foundation
- [x] 1.1 Initialize React + Vite project structure.
- [x] 1.2 Confirm package scripts for dev, build, preview, and visual verification.
- [x] 1.3 Establish single-page portfolio route through `src/main.jsx` and `src/App.jsx`.
- [x] 1.4 Keep assets inside `src/assets` so Vite can fingerprint production images.

### Phase 2 - Content Architecture
- [x] 2.1 Define profile, navigation, metrics, stack, projects, systems, history, and contact content as static arrays.
- [x] 2.2 Map one-page sections to portfolio goals: home, about, services, stack, work, systems, process, and contact.
- [x] 2.3 Set primary CTAs for hiring/contact and project exploration.
- [ ] 2.4 Replace placeholder links and email values with final production destinations.

### Phase 3 - Visual System
- [x] 3.1 Build the obsidian, off-white, electric blue, and neon green design tokens in CSS.
- [x] 3.2 Create liquid-glass surfaces, mono chips, rounded buttons, and editorial section spacing.
- [x] 3.3 Apply responsive typography and layout rules for mobile, tablet, desktop, and wide screens.
- [ ] 3.4 Finalize brand copy and confirm whether any additional logo or favicon assets are needed.

### Phase 4 - Portfolio Interface
- [x] 4.1 Implement sticky navigation with desktop links and mobile disclosure menu.
- [x] 4.2 Implement the hero with accessible DOM text and imported local portrait image.
- [x] 4.3 Implement about, services, stack, project, automation system, history, process, and footer sections.
- [x] 4.4 Implement accessible contact form validation with status feedback and mailto fallback.

### Phase 5 - Interaction & Accessibility
- [x] 5.1 Add hover, glow, transform, and 3D portrait frame interactions.
- [x] 5.2 Preserve reduced-motion behavior for users who request less animation.
- [x] 5.3 Keep skip link, semantic headings, labels, and form error descriptions in place.
- [ ] 5.4 Run a manual keyboard pass through navigation, contact form, and CTAs.

### Phase 6 - Performance & SEO
- [x] 6.1 Avoid external animation libraries, video, WebGL, and remote image dependencies.
- [x] 6.2 Import the portrait through the React asset pipeline instead of hardcoding a public path.
- [ ] 6.3 Add or confirm production meta title, description, Open Graph image, and canonical details.
- [ ] 6.4 Optimize final portrait asset if the production image changes.

### Phase 7 - Testing & Verification
- [x] 7.1 Run production build with `npm.cmd run build`.
- [x] 7.2 Run `npm.cmd run verify:visual` after the latest visual pass.
- [x] 7.3 Verify responsive behavior at 375px, 768px, 1280px, and 1920px.
- [x] 7.4 Check for horizontal overflow and missing portrait image assets.

### Phase 8 - Launch Readiness
- [ ] 8.1 Choose hosting target: Vercel, Netlify, or GitHub Pages.
- [ ] 8.2 Configure production domain, SSL, and deployment settings.
- [ ] 8.3 Confirm final contact email, social links, resume link, and analytics choice.
- [ ] 8.4 Run final build, preview, visual verification, and accessibility checklist before launch.

## Animation & Interaction Plan
- Hero: CSS 3D layered portrait frame with glass depth panels and floating interface badges.
- Hover: buttons, cards, project panels, process cards, and contact panel use short transforms, light sweeps, and glowing glass borders.
- Reduced motion: keep hover and transition effects minimal through the global reduced-motion rule.
- Loading/error: both hero frames are local static assets with useful alt text.

## SEO & Accessibility Plan
- One `h1`; section headings are ordered `h2`/`h3`.
- Skip link remains first focusable element.
- All form inputs have labels and `aria-describedby` error links.
- Hero portrait includes descriptive alt text.
- External links use safe attributes where applicable.

## Performance Plan
- No video file, WebGL runtime, external image CDN, or model loading.
- Hero portrait is a local JPG imported from `src/assets`; Vite fingerprints it during production builds.
- Bundle target: keep initial JS reasonable and avoid hero animation dependencies.

## Testing Plan
- Run `npm.cmd run build`.
- Serve preview and verify HTTP 200.
- Inspect responsive behavior at 375px, 768px, 1280px, and 1920px where tooling allows.
- Verify portrait asset loads and responsive layouts do not overflow with `npm.cmd run verify:visual`.

## Risks
| Risk | Impact | Mitigation | Module |
| --- | --- | --- | --- |
| Portfolio image needs replacement | Low | Swap the file imported in `App.jsx` or rename the asset for clarity | Hero |
| Dense typography overflows mobile | High | Clamp display sizes and stack all editorial grids | CSS |
| Contact form has no backend | Low | Use mailto and clear status message | Contact |
