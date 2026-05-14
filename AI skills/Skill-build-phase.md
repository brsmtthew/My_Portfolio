---
name: project-build-phase-architect
description: Use this skill before starting or restructuring a software project, website, landing page, dashboard, mobile app, SaaS platform, capstone system, or full-stack application. Use it to produce concise build-phase documentation covering architecture, design system, page map, SEO, content strategy, animations, performance budgets, analytics, conversion strategy, legal compliance, component inventory, pre-launch checklists, hosting, phased task plans, risk analysis, and testing strategy before major code work begins. Covers all major website types: landing page, portfolio, SaaS marketing, blog, e-commerce, admin dashboard, and full-stack app.
---

# Project Build Phase Architect

Use this skill when the project needs a build plan before implementation. Prioritize implementation clarity over documentation volume. Do not block small fixes or obvious edits with excessive planning.

---

## Output Instructions

When this skill is activated, produce a single structured plan document using the sections below. Follow these rules:

- **Ask first if scope is unclear.** If the project type, stack, or audience is not stated, ask 2–3 focused questions before producing the plan.
- **Use the Website Type Quick-Start** to set baseline assumptions instantly — do not repeat generic scoping already covered there.
- **Skip irrelevant sections.** Static landing pages skip auth, data, and RBAC. Internal dashboards skip SEO and CRO. Mark skipped sections as `N/A — [reason]`.
- **Be specific, not generic.** Name real routes, real components, real third-party services — not vague "pages" or "features."
- **Flag unknowns explicitly** using `⚠️ Unknown:` so the developer knows exactly what to resolve before building.
- **Produce the plan as a markdown document** with all applicable sections filled in, ready to use as the project's build plan artifact.
- **Update on request.** When the user says "update the plan" or reveals a new constraint, revise only the affected sections — do not regenerate the entire document.
- **Recommend the stack.** If no stack is specified, recommend one based on the project type and justify the choice in the Tech Stack Decision section.

---

## Build Plan Workflow

1. **Understand scope:**
   - Project purpose and product category
   - Target users and roles
   - Core workflows and primary user journey
   - Required platforms (desktop, mobile, PWA, etc.)
   - Constraints, deadline, and deployment target
2. **Choose the stack (for websites):**
   - Static site (plain HTML/CSS/JS) → simple landing pages, portfolios, no dynamic data
   - Vite + React → interactive apps, dashboards, CRUD, auth-required flows
   - Next.js → SEO-critical sites, SSR/SSG, blogs, e-commerce, marketing sites
   - Use the project's existing stack if one already exists
3. **Inspect existing work if present:**
   - Framework, package manager, and config files
   - Folder structure, routing, and module layout
   - Database or API layer
   - Current tests and deployment config
4. **Produce an implementation-ready plan** using the required sections below.
5. **Update the plan** as implementation reveals new constraints.

---

## Website Type Quick-Start

Pick the type that matches the project and use the listed starting assumptions to skip redundant planning:

### 🏠 Landing Page / Marketing Site

- Pages: Home, Features, Pricing, FAQ, Contact, Legal
- Stack: HTML/CSS/JS or Next.js (for SEO)
- Must-haves: hero CTA, social proof, fast LCP, OG tags, form with email capture
- Skip: auth, complex state, CMS (unless blog needed)
- Hosting: Vercel / Netlify / Cloudflare Pages

### 👤 Portfolio / Personal Site

- Pages: Home, About, Work/Projects, Blog (optional), Contact
- Stack: HTML/CSS/JS, Astro, or Next.js
- Must-haves: project showcase, contact form, mobile-perfect layout, fast load
- Skip: auth, database (unless blog CMS)
- Hosting: GitHub Pages / Vercel

### 📝 Blog / Content Site

- Pages: Home, Posts list, Post detail, Category, About, Contact
- Stack: Next.js + MDX / Contentlayer / Sanity / Ghost
- Must-haves: SSG/SSR for SEO, RSS feed, sitemap, reading time, OG images
- Skip: complex auth (can use simple admin login)
- Hosting: Vercel / Netlify

### 🛒 E-Commerce Site

- Pages: Home, Catalog, Product detail, Cart, Checkout, Order confirmation, Account
- Stack: Next.js + Stripe / Shopify Headless / WooCommerce
- Must-haves: product schema, cart state, payment flow, inventory, order emails
- Skip: nothing — all sections apply
- Hosting: Vercel / dedicated VPS for complex backends

### 🚀 SaaS Marketing + App

- Pages: Marketing (Home, Pricing, Features, Blog) + App (Dashboard, Settings, Billing)
- Stack: Next.js for marketing, React/Vite for app shell
- Must-haves: auth, billing (Stripe), protected routes, onboarding flow, analytics
- Skip: nothing — all sections apply
- Hosting: Vercel + backend service (Railway, Fly.io, Supabase)

### 📊 Admin Dashboard / Internal Tool

- Pages: Login, Dashboard, Tables/Lists, Detail views, Settings
- Stack: React + Vite, Tanstack Query, Recharts
- Must-haves: RBAC, data tables, filters, bulk actions, audit logs
- Skip: SEO (internal tool), public-facing content sections
- Hosting: internal VPN or private Vercel deployment

---

## Quick Decision Framework

Answer these 10 questions before filling the required sections. For each unknown, write `⚠️ TBD` and flag it in the plan.

| #   | Question                                                        | Answer                                                                   |
| --- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | What type of site is this?                                      | landing page / portfolio / blog / SaaS / e-commerce / dashboard / other  |
| 2   | Who are the users?                                              | public visitors / authenticated users / admin only / B2B clients / other |
| 3   | What is the single most important action a visitor should take? | sign up / buy / contact / read / download / other                        |
| 4   | Does it need a backend or database?                             | yes / no / later                                                         |
| 5   | Does it need user authentication?                               | yes / no / later                                                         |
| 6   | Is SEO critical?                                                | yes → use SSR/SSG &nbsp;&nbsp; no → CSR is fine                          |
| 7   | What is the content source?                                     | static/hardcoded / CMS / API / database                                  |
| 8   | Who is building it and what is the deadline?                    | solo dev / small team / freelancer / agency — deadline: **\_**           |
| 9   | Are there existing brand assets?                                | logo / colors / fonts / copy / images — yes / no / partial               |
| 10  | What is the target hosting environment?                         | Vercel / Netlify / GitHub Pages / Cloudflare / custom server             |

**After answering:**

- Select the matching Website Type Quick-Start template
- Cross out or mark `N/A` sections that do not apply
- Identify all `⚠️ TBD` items as open decisions that must be resolved before implementation begins

---

## Required Sections

### Project Overview

Include:

- Project name
- Product category (website, web app, dashboard, landing page, SaaS, portfolio, e-commerce, etc.)
- Main user problem being solved
- Target users and personas
- Primary outcome / success definition

---

### Objectives

Separate into:

- Must-have goals
- Nice-to-have goals
- Non-goals (what is explicitly out of scope)
- Success criteria (measurable outcomes)

---

### Tech Stack Decision

Specify the chosen stack and justify the choice:

| Layer     | Choice                            | Reason                     |
| --------- | --------------------------------- | -------------------------- |
| Framework | e.g. Next.js                      | SSR for SEO, blog routing  |
| Styling   | e.g. Vanilla CSS / Tailwind       | Design system control      |
| State     | e.g. Zustand / Context            | Scope of client state      |
| Data      | e.g. Firebase / REST API          | Backend requirement        |
| Auth      | e.g. Firebase Auth / Supabase     | User roles needed          |
| Hosting   | e.g. Vercel / Netlify             | CI/CD, edge, custom domain |
| CMS       | e.g. Contentlayer / Sanity / None | Content management needs   |

---

### State Management Plan

(Simplify or skip for purely static sites. Mark as `N/A` if not applicable.)

**Classify state by type before choosing tools:**

| Type            | What it is                           | Where it lives                        |
| --------------- | ------------------------------------ | ------------------------------------- |
| Server state    | Data fetched from APIs / database    | Tanstack Query / SWR / Apollo         |
| Client UI state | Modals, tabs, form steps, menus      | `useState` / Zustand / Context        |
| Form state      | Input values, validation, submission | React Hook Form / Formik              |
| URL state       | Filters, pagination, search params   | URLSearchParams / router query        |
| Persisted state | Theme, preferences, remembered user  | `localStorage` / cookie               |
| Auth state      | Session, token, user identity        | httpOnly cookie (SSR) or memory (CSR) |

**Rules:**

- Keep state as local as possible — lift only when shared across multiple components.
- Never store derived data as source state — compute it during render or with a selector.
- Never put server data in global client stores — use a data-fetching cache (Tanstack Query) instead.
- Never store sensitive auth tokens in `localStorage` — use httpOnly cookies.
- Optimistic updates: only when rollback behavior is explicitly defined.

**Global state needs (list only what is truly global for this project):**

- Auth / user session
- Theme (dark / light) — if supported
- Cart / selections — if e-commerce
- Notification / toast queue

---

### System Architecture

Cover:

- Frontend architecture (component tree, routing strategy, state boundaries)
- Backend/API architecture (REST, GraphQL, serverless functions, BFF)
- Database architecture (relational, document, key-value, none)
- Authentication and authorization strategy
- File and media storage (S3, Firebase Storage, Cloudinary, etc.)
- Third-party services and integrations
- Deployment environment and CI/CD pipeline

---

### API & Third-Party Integration Map

List every external service the site depends on before writing any integration code:

| Service          | Purpose              | SDK / Method           | Credentials Needed               | Rate Limit   | Failure Fallback   |
| ---------------- | -------------------- | ---------------------- | -------------------------------- | ------------ | ------------------ |
| e.g. Stripe      | Payments             | stripe-js + server SDK | `STRIPE_SECRET_KEY`, `STRIPE_PK` | High         | Show error + retry |
| e.g. Resend      | Transactional email  | Resend SDK             | `RESEND_API_KEY`                 | 100/day free | Log + alert admin  |
| e.g. Cloudinary  | Image hosting/CDN    | Cloudinary SDK         | `CLOUDINARY_URL`                 | Plan-based   | Fallback to local  |
| e.g. Google Maps | Maps embed           | Maps JS API            | `GOOGLE_MAPS_API_KEY`            | Plan-based   | Show address text  |
| e.g. Formspree   | Contact form backend | HTTP POST              | None (free tier)                 | 50/mo free   | N/A                |
| e.g. Sanity      | Headless CMS         | `@sanity/client`       | `SANITY_TOKEN`                   | Plan-based   | Show cached data   |

**Integration Rules:**

- All API keys stored in `.env` — never committed to git, never bundled in frontend code.
- All required secrets validated at startup — fail fast with a clear error if any are missing.
- All external API calls wrapped in try/catch with typed error handling.
- External API failures must degrade gracefully — never crash the whole page.
- Evaluate bundle size impact before adding any third-party SDK.
- Document rate limits and set up alerts before production traffic starts.

---

### Page Map

List every page/route with its purpose. For each page include:

- **Route**: `/about`
- **Purpose**: What this page achieves for the user
- **Primary sections/components**: hero, cards, forms, tables
- **Key CTA**: What action the user takes
- **Data required**: Static copy, API data, CMS content, user auth
- **SEO priority**: High / Medium / Low

Example structure:

```
/ (Home)
/about
/services or /features
/portfolio or /work
/blog or /news
/contact
/login  /register  /dashboard  (if app)
/404
```

---

### Design System Plan

Define before writing any CSS:

**Brand Identity:**

- Primary color (and HSL value)
- Secondary/accent color
- Neutral/gray scale
- Success, warning, danger, info semantic colors

**Typography:**

- Primary font (heading) — e.g. Inter, Outfit, Playfair Display
- Secondary font (body) — e.g. Inter, Roboto
- Font source (Google Fonts, system, self-hosted)
- Scale: `xs sm base lg xl 2xl 3xl 4xl 5xl`

**Spacing & Layout:**

- Base spacing unit (4px or 8px system)
- Max content width (e.g. 1280px)
- Section padding (e.g. `80px 0` desktop, `48px 0` mobile)
- Grid columns (12-col or custom)

**Component Tokens:**

- Border radius scale (e.g. `4px / 8px / 16px / full`)
- Shadow scale (sm, md, lg, xl)
- Transition: default duration/easing (e.g. `300ms ease`)
- Z-index scale

**Dark Mode:**

- Supported? Yes / No / Later
- Implementation: CSS variables / class toggle / media query

---

### UI/UX Plan

Include:

- Navigation model (topbar, sidebar, hamburger, sticky, transparent-to-solid)
- Primary screens and layout pattern for each
- Reusable component list (Button, Card, Modal, Badge, Toast, etc.)
- Form patterns (inline validation, multi-step, single field)
- Table/list patterns (filterable, sortable, paginated)
- Empty, loading, error, and success states for every data-driven view
- Responsive breakpoints and behavior (mobile-first or desktop-first)
- Visual hierarchy per page (what the eye hits first, second, third)

---

### Component Inventory

List every UI component needed before writing code. Group by type:

**Layout:**

- `<PageWrapper>` — max-width container, section padding
- `<Section>` — semantic section with consistent vertical spacing
- `<Grid>` — responsive column grid
- `<Divider>` — horizontal separator

**Navigation:**

- `<Navbar>` — logo, links, CTA, hamburger toggle
- `<MobileMenu>` — off-canvas or dropdown mobile nav
- `<Footer>` — links, social icons, legal, copyright
- `<Breadcrumb>` — if multi-level page depth

**Content Blocks (Website-specific):**

- `<Hero>` — headline, subhead, CTA, background image/video/gradient
- `<FeatureCard>` — icon, title, description
- `<TestimonialCard>` — quote, avatar, name, role
- `<PricingCard>` — tier, price, features list, CTA
- `<FAQAccordion>` — question/answer expandable
- `<CTABanner>` — full-width call to action strip
- `<StatCounter>` — animated number + label
- `<LogoStrip>` — client/partner logo carousel or grid
- `<TeamCard>` — photo, name, role, socials
- `<BlogCard>` — thumbnail, title, date, tag, excerpt

**Forms & Inputs:**

- `<Input>` — text, email, password, number with label + error
- `<Textarea>` — multiline input
- `<Select>` — dropdown selector
- `<Checkbox>` / `<Radio>`
- `<ContactForm>` — name, email, message, submit + success state
- `<NewsletterForm>` — email input + subscribe button
- `<SearchBar>` — if search is needed

**Feedback:**

- `<Toast>` / `<Snackbar>` — success, error, info, warning
- `<Modal>` — overlay dialog with backdrop
- `<Drawer>` — side panel
- `<Skeleton>` — loading placeholder
- `<Spinner>` — inline loading indicator
- `<EmptyState>` — icon + message + optional CTA
- `<ErrorState>` — error message + retry action

**Utility:**

- `<Badge>` — status label (color-coded)
- `<Tag>` / `<Chip>` — category label
- `<Avatar>` — user image with fallback initials
- `<Tooltip>` — hover context
- `<ProgressBar>` — stepped or percentage
- `<Pagination>` — page controls for lists
- `<BackToTop>` — scroll to top button

Mark each component as: `[ ] Not started` / `[/] In progress` / `[x] Done`

---

### Animation & Interaction Plan

Specify motion intent before implementation:

- **Page transitions**: fade, slide, none
- **Scroll animations**: fade-in-up, parallax, counter, none
- **Hover effects**: button lift, card scale, underline draw, glow
- **Micro-animations**: form feedback, loading spinners, toast slide-in
- **Hero animations**: typewriter, gradient shift, particle, lottie
- **Reduced-motion fallback**: required (respect `prefers-reduced-motion`)
- **Libraries if needed**: GSAP, Framer Motion, AOS, CSS-only

Keep animations purposeful. Avoid animation that adds delay without adding clarity or delight.

---

### Content & Asset Plan

Define before implementation:

**Copy:**

- Who writes the copy? Client / AI-generated / placeholder
- Tone of voice: professional, friendly, playful, minimal
- Languages and i18n needed

**Images:**

- Source: AI-generated, stock (Unsplash/Pexels), client-supplied, icon-based
- Format: WebP preferred, AVIF optional, PNG for transparency
- Responsive images strategy (srcset, next/image, lazy load)

**Icons:**

- Library: Lucide, Heroicons, Tabler, custom SVG
- Usage: inline SVG, sprite, icon font, or component

**Fonts:**

- Load strategy: Google Fonts `display=swap`, self-hosted, system stack fallback
- Subset if needed

**Videos / Lottie:**

- Any hero video or animation? Source and format?

---

### SEO Plan

Cover before writing any HTML:

- `<title>` tag strategy per page (unique, keyword-rich, ≤60 chars)
- `<meta name="description">` per page (≤160 chars)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- Canonical URLs
- Heading hierarchy: one `<h1>` per page, logical `h2`–`h4` structure
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `robots.txt` and `sitemap.xml` generation
- Structured data / JSON-LD (if applicable: LocalBusiness, Article, FAQPage, etc.)
- Alt text strategy for all images
- Core Web Vitals targets (see Performance Plan)

---

### Accessibility Plan

Target: **WCAG 2.1 Level AA** compliance minimum on all public-facing pages.

**Semantic Structure:**

- One `<h1>` per page; logical heading hierarchy `h1 → h2 → h3` (never skip levels)
- Use landmark elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`
- First focusable element on every page: a skip-navigation link (`Skip to main content`)
- `lang` attribute set on `<html>` element; `lang` overrides on foreign-language passages

**Keyboard Navigation:**

- All interactive elements reachable via `Tab` in logical visual order
- No keyboard traps (except within open modals — trap focus while modal is open, release on close)
- `Escape` key closes modals, drawers, and dropdowns
- Visible focus ring on all interactive elements — never `outline: none` without a custom replacement

**Screen Reader Support:**

- All meaningful images: descriptive `alt` text. Decorative images: `alt=""`
- Icon-only buttons: `aria-label` or visually-hidden text span
- Form fields: associated `<label>` (not placeholder-only)
- Error messages: `role="alert"` or linked via `aria-describedby`
- Dynamic content updates: `aria-live="polite"` for non-urgent, `aria-live="assertive"` for critical
- Modals: `role="dialog"`, `aria-modal="true"`, focus moved to modal on open, returned on close
- Loading states: `aria-busy="true"` on the loading container

**Color & Contrast:**

- Normal text: contrast ratio ≥ 4.5:1
- Large text (18px+ or 14px+ bold): contrast ratio ≥ 3:1
- UI components and icons: contrast ratio ≥ 3:1
- Never use color alone to convey status — pair with text, icon, or pattern

**Motion & Animation:**

- All substantial animations respect `@media (prefers-reduced-motion: reduce)`
- No content flashes more than 3 times per second (WCAG seizure threshold)

**Forms:**

- Required fields: `aria-required="true"` + visible indicator (asterisk with legend)
- Autocomplete attributes set for standard fields: `name`, `email`, `tel`, `address-line1`, etc.
- Validation errors shown inline next to the field, not only at the top of the form

**Testing Tools:**

- Lighthouse Accessibility audit — target score ≥ 90
- axe DevTools browser extension — zero critical violations
- Manual keyboard-only walkthrough of all primary user flows
- Screen reader spot-check: VoiceOver (macOS / iOS) or NVDA (Windows)

---

### User Roles And Permissions

(Skip if the site has no authentication)

Define:

- Roles (Guest, User, Admin, etc.)
- Allowed actions per role
- Restricted actions per role
- Auth flow (sign-up, login, email verify, password reset, OAuth)
- Protected routes and redirect behavior

---

### Data Plan

Include:

- Entities or collections (e.g. User, Post, Product, Order)
- Relationships between entities
- Ownership rules (who can read/write what)
- Indexes and query patterns
- Data retention or audit logging requirements
- CMS schema if using a headless CMS

---

### Legal & Compliance Plan

Define before launch:

- **Privacy Policy**: Required if collecting any personal data (name, email, analytics). Link in footer.
- **Terms of Service**: Required for SaaS, e-commerce, and user accounts.
- **Cookie Consent Banner**: Required for GDPR (EU), CCPA (California), and similar regulations. Specify tool: Cookiebot, Osano, custom.
- **Cookie types used**: Strictly necessary / Functional / Analytics / Marketing
- **Data storage location**: EU servers required for GDPR-strict projects.
- **Contact/DPO email**: Required in Privacy Policy for GDPR.
- **Accessibility statement**: Required for government/public sector projects (WCAG 2.1 AA).
- **Copyright notice**: Year and owner name in footer.
- **i18n compliance**: If serving multiple regions, consider local legal requirements.

If unsure about legal requirements, note the uncertainty and flag for legal review before launch.

---

### Security Plan

Include:

- Auth mechanism and token storage (httpOnly cookies vs localStorage)
- Role-based access control enforcement (client + server)
- Server-side input validation
- Secret handling (environment variables, never in frontend bundles)
- CORS policy
- Rate limiting for forms and APIs
- Destructive-action safeguards (confirmation dialogs, soft deletes)
- Audit logging if required

---

### Performance Plan

Include targets and implementation approach:

**Core Web Vitals Targets (Lighthouse):**

- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms
- Performance score goal: ≥ 90

**Techniques:**

- Lazy loading for images and off-screen components
- Font preloading and `font-display: swap`
- Critical CSS inlining (if SSR/SSG)
- Image optimization (WebP, srcset, next/image)
- Code splitting and route-level chunking
- Caching strategy (CDN, stale-while-revalidate, service worker)
- Pagination or infinite scroll for large lists
- Bundle size budget and tree-shaking approach

---

### Conversion & CRO Plan

(Use for landing pages, SaaS, e-commerce, and any site with a measurable conversion goal)

**Above the Fold:**

- Headline must communicate the value proposition in one sentence
- CTA button must be visible without scrolling on all devices
- No competing CTAs on the hero — one primary action only

**Trust Signals:**

- Social proof placement: testimonials, reviews, star ratings, case studies
- Client logos / partner badges above or below the fold
- Security badges near forms and checkout (SSL, payment icons)
- Guarantees, refund policies, free trial callouts near pricing

**CTA Strategy:**

- Primary CTA text: action-oriented, specific ("Start Free Trial" > "Get Started")
- Secondary CTA for lower-intent users ("See how it works", "View demo")
- Sticky CTA bar on scroll for long pages
- Exit-intent modal or inline offer (if appropriate)

**Form Optimization:**

- Minimize fields — only ask what is essential
- Inline real-time validation
- Clear submit button label
- Success message immediately after submit
- Follow-up: email confirmation, redirect to thank-you page

**Page Speed as CRO:**

- Every 1s delay in load time reduces conversions by ~7%
- LCP < 2.5s is a hard target for landing pages

**A/B Testing Plan (if applicable):**

- Tool: Google Optimize (deprecated), VWO, Optimizely, or manual variant routing
- What to test first: headline copy, CTA button color/text, hero image

---

### Analytics & Tracking Plan

Define before launch:

- Analytics platform: Google Analytics 4, Plausible, Umami, none
- Events to track: page views, CTA clicks, form submissions, scroll depth
- Conversion goals: contact form submit, sign-up, purchase
- Cookie consent required? (GDPR / region-specific)
- Heatmap / session recording: Hotjar, Microsoft Clarity, none

---

### Email & Notifications Plan

(Skip if the site has no forms, user accounts, or transactional workflows. Mark as `N/A` if not applicable.)

**Transactional Emails — list which apply:**

- Welcome / account confirmation email
- Password reset email
- Order confirmation / receipt
- Shipping / delivery notification
- Invoice or billing receipt
- Failed payment alert
- Account suspension or security alert

**Admin Notifications:**

- Contact form submission → notify site owner
- New user signup → notify admin
- New order → notify fulfillment team

**Email Service:**

- Transactional: Resend / SendGrid / Postmark / AWS SES / Nodemailer (SMTP)
- Newsletter / marketing: Mailchimp / ConvertKit / Brevo / Loops.so
- Sending domain: configure SPF, DKIM, and DMARC before launch
- API keys: stored in environment variables, never in frontend code

**Email Templates:**

- Tool: React Email / MJML / Handlebars / plain HTML
- Required templates: (list each applicable type above)
- Design: must match site brand — logo, colors, typography, footer unsubscribe link

**Testing:**

- Test all flows in Mailtrap or Resend test mode before enabling production
- Verify SPF / DKIM / DMARC records with MXToolbox
- Test mobile rendering in Gmail app and Outlook mobile
- Confirm unsubscribe and reply-to addresses are set correctly

---

### Testing Plan

Include the minimum useful checks:

- Unit tests for core logic and utility functions
- Integration tests for critical user workflows (auth, checkout, form submit)
- UI smoke checks for key pages
- Permission/auth route tests
- Accessibility audit (axe, Lighthouse a11y tab)
- Cross-browser check: Chrome, Firefox, Safari, Edge
- Device check: mobile (375px), tablet (768px), desktop (1280px), wide (1920px)
- Build and lint checks in CI

---

### Hosting & Deployment Plan

Specify:

- Hosting platform: Vercel / Netlify / GitHub Pages / Cloudflare Pages / VPS
- Domain and DNS setup
- SSL/TLS (auto via platform or manual)
- CI/CD pipeline: auto-deploy on push to `main`, preview deploys on PRs
- Environment variables management (dev, staging, production)
- Staging/preview URL strategy
- Rollback plan

---

### Post-Launch & Maintenance Plan

Define what happens after go-live:

**Monitoring (set up before launch):**

- Uptime: UptimeRobot / Better Stack / Checkly — alert on downtime > 1 min
- Error tracking: Sentry / LogRocket / Bugsnag — capture JS errors and server exceptions
- Performance: Vercel Analytics / Lighthouse CI — re-run monthly
- Analytics review cadence: weekly for the first month, monthly thereafter

**Backups:**

- Database: automated daily backups, 30-day retention minimum
- Media / storage: CDN-replicated or cloud storage with versioning
- Code: GitHub / GitLab with protected `main` branch and tagged releases

**Regular Maintenance Tasks:**

- Monthly: `npm audit` + apply patch-level dependency updates
- On critical CVE: apply security patch within 48 hours
- Content updates: define who owns copy changes (client self-service CMS, developer, or agency)
- SSL renewal: auto-handled by Vercel / Netlify — verify annually
- Domain renewal: calendar reminder 60 days before expiry

**Versioning & Change Log:**

- Use semantic versioning for releases: `v1.0.0` (major), `v1.1.0` (feature), `v1.0.1` (fix)
- Maintain `CHANGELOG.md` at the repo root for all significant changes

**Client Handoff (if freelance / agency project):**

- Deliver: hosting login, domain registrar access, CMS credentials, API key list with renewal dates
- Provide `README.md` covering: local dev setup, environment variables, deployment process, content editing guide
- Record a short Loom walkthrough for non-technical clients

---

### Pre-Launch Checklist

Run through this before going live. Check off every item:

**Content & Copy:**

- [ ] All placeholder text replaced with real copy
- [ ] All images replaced (no lorem picsum, unsplash temp links)
- [ ] All links tested and working (no broken hrefs)
- [ ] 404 page designed and implemented
- [ ] Favicon set (32×32 ICO + 180×180 Apple Touch Icon)
- [ ] `og:image` set for all key pages (1200×630px)

**SEO:**

- [ ] Unique `<title>` on every page
- [ ] Unique `<meta description>` on every page
- [ ] `<h1>` present and unique on every page
- [ ] `alt` text on all images
- [ ] `sitemap.xml` generated and accessible
- [ ] `robots.txt` present and correct
- [ ] Google Search Console property verified
- [ ] No accidental `noindex` on public pages

**Performance:**

- [ ] Lighthouse score ≥ 90 on home page
- [ ] All images converted to WebP / optimized
- [ ] Fonts preloaded, `font-display: swap` set
- [ ] No render-blocking scripts
- [ ] CLS < 0.1 (no layout shift on load)

**Functionality:**

- [ ] All forms submit correctly and show success/error states
- [ ] Contact form delivers emails (test end-to-end)
- [ ] Auth flows work (if applicable): register, login, logout, reset password
- [ ] All CTAs navigate to correct targets
- [ ] External links open in new tab with `rel="noopener noreferrer"`

**Responsiveness:**

- [ ] Tested at 375px (iPhone SE), 768px (tablet), 1280px (laptop), 1920px (wide)
- [ ] No horizontal scroll on any breakpoint
- [ ] Text is legible at all sizes (min 16px body)
- [ ] Touch targets ≥ 44×44px on mobile

**Accessibility:**

- [ ] Keyboard navigation works through all interactive elements
- [ ] Focus states visible
- [ ] Color contrast passes WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Form fields have associated `<label>` elements
- [ ] Lighthouse a11y score ≥ 90

**Legal & Privacy:**

- [ ] Privacy Policy page live and linked in footer
- [ ] Cookie consent banner shown (if analytics/tracking used)
- [ ] Copyright year correct in footer
- [ ] Terms of Service live (if applicable)

**Analytics & Monitoring:**

- [ ] Analytics platform installed and verified (GA4, Plausible, etc.)
- [ ] Conversion events firing correctly
- [ ] Uptime monitoring configured (UptimeRobot, Better Stack, etc.)
- [ ] Error tracking set up (Sentry, LogRocket, etc.) — if applicable

**Deployment:**

- [ ] Production environment variables set (not dev values)
- [ ] Custom domain connected and SSL active
- [ ] WWW redirect set (www → non-www or vice versa)
- [ ] Redirects for old URLs set (if migration)
- [ ] Build passes with zero errors and zero warnings
- [ ] Preview/staging URL tested and approved before cutover

---

### Development Phases

Use phases that map to shippable progress:

1. **Project setup**: repo, stack init, folder structure, design tokens, CI/CD scaffold
2. **Design system**: global CSS, typography, colors, spacing, base components
3. **Layout & navigation**: header, footer, responsive nav, routing
4. **Core pages**: implement each page with real copy and assets
5. **Interactivity**: forms, animations, dynamic data, auth (if applicable)
6. **SEO & performance**: meta tags, sitemap, image optimization, Lighthouse audit
7. **Testing & polish**: cross-browser, mobile QA, accessibility, analytics wiring
8. **Deployment & launch**: production deploy, domain, monitoring

---

### Task Tracker

Use:

- `[ ]` Pending
- `[/]` In progress
- `[x]` Done
- `[!]` Blocked

Each task must be concrete enough to implement in a single session.

---

### Risk Register

For each risk, include:

| Risk                            | Impact                   | Mitigation                                     | Affected Module |
| ------------------------------- | ------------------------ | ---------------------------------------------- | --------------- |
| Example: Client copy delayed    | High - blocks page build | Use placeholder copy; finalize in polish phase | All pages       |
| Example: Performance LCP > 2.5s | Medium - SEO penalty     | Optimize hero image, add preload               | Home, Landing   |

---

### Version Control & Git Strategy

**Repository Setup:**

- Hosting: GitHub / GitLab / Bitbucket (specify and link)
- Visibility: public / private
- `.gitignore`: framework default + `.env*`, `node_modules/`, `.DS_Store`, build output dirs
- `README.md`: project summary, local setup steps, environment variables list, deployment process

**Branching Strategy:**

| Branch              | Purpose                        | Rules                                               |
| ------------------- | ------------------------------ | --------------------------------------------------- |
| `main`              | Production-ready code          | Protected — no direct pushes, deploys to production |
| `develop`           | Integration branch             | Used for team projects; merges into `main` via PR   |
| `feature/<name>`    | One branch per feature or page | Merge into `develop` or `main` via PR               |
| `fix/<name>`        | Bug fix                        | Merge into `develop` or `main` via PR               |
| `release/<version>` | Pre-release staging            | Optional for larger projects with staged rollouts   |

**Commit Conventions (Conventional Commits):**

- `feat: add contact form with email delivery`
- `fix: correct mobile nav overflow on 375px`
- `style: update hero section typography and spacing`
- `perf: convert hero image to WebP, add lazy load`
- `chore: update dependencies, apply security patches`
- `docs: add README setup and deployment instructions`
- `ci: add Lighthouse CI check on pull requests`

**Pull Request Rules:**

- Require at least 1 review before merge (team projects)
- CI must pass (lint + build) before merge is allowed
- Link each PR to the corresponding Task Tracker item
- Delete the branch after merge

**CI/CD Integration:**

- Auto-deploy `main` → production on push (Vercel / Netlify)
- Auto-deploy PRs → preview URLs for review before merge
- Block deploys if build or lint fails
- Run `npm audit` in CI pipeline and fail on high-severity vulnerabilities

---

### Build Tooling & Code Quality

Set up before writing any feature code. A consistent toolchain prevents drift and catches bugs early.

**Linting & Formatting:**

- **ESLint**: extend `eslint:recommended` + framework-specific rules
  - React: `plugin:react/recommended`, `plugin:react-hooks/recommended`
  - Next.js: `plugin:@next/next/recommended`
  - Accessibility: `plugin:jsx-a11y/recommended`
- **Prettier**: consistent code formatting; integrated with ESLint via `eslint-config-prettier`
- **Stylelint**: for CSS / SCSS / CSS Modules — enforce consistent styling rules
- Config files committed to repo: `.eslintrc.json`, `.prettierrc`, `.stylelintrc.json`

**TypeScript (if applicable):**

- `"strict": true` in `tsconfig.json`
- No `any` except where unavoidable and explicitly commented with justification
- All API responses typed; use Zod for runtime validation of external data
- All component props typed with interfaces or type aliases

**Pre-Commit Hooks:**

- Tool: **Husky** + **lint-staged**
- On `git commit`: run ESLint + Prettier on staged files only (fast)
- On `git push`: run full typecheck + build
- Prevents broken or unformatted code from entering the repo

**Editor Config:**

- `.editorconfig` committed to repo: tab size (2), end-of-line (LF), charset (UTF-8)
- Ensures consistency across all team editors (VS Code, WebStorm, Vim, etc.)

**Environment Variables:**

- `.env.example` committed with all key names and empty values (never real secrets)
- `.env.local` in `.gitignore`
- Validate all required env vars at startup with a typed check (Zod or custom guard) — fail fast with a clear error

**Bundle Size Budget:**

- Initial JS bundle: ≤ 200KB gzipped for landing pages, ≤ 350KB for apps
- Use `next/bundle-analyzer` or `rollup-plugin-visualizer` to audit on every major release
- Flag and justify any dependency that adds > 20KB to the bundle

**CI Pipeline Checks (all must pass before deploy):**

```
npm run lint        ← zero warnings in production
npm run typecheck   ← zero type errors
npm run test        ← all tests passing
npm run build       ← production build succeeds
```

---

## Planning Quality Rules

- Prefer implementation clarity over long prose.
- Avoid generic feature lists that do not map to code or design decisions.
- Name dependencies between modules and pages.
- Call out unknowns explicitly — do not hide gaps in the plan.
- Keep the plan current when major architecture or design changes happen.
- For websites: always plan SEO, performance, and mobile behavior before writing the first line of HTML.
- Use the **Website Type Quick-Start** to set baseline assumptions fast and skip redundant scoping.
- Always populate the **Component Inventory** before building — it prevents duplicate work and naming conflicts.
- Run the **Pre-Launch Checklist** before every deployment, not just the final launch.
- If the site has a business goal, always include the **Conversion & CRO Plan** — design without conversion intent is incomplete.
- Legal compliance (privacy, cookies, accessibility) is not optional for public websites — plan it early.
