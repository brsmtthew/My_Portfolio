---
name: ui-ux-system-designer
description: Use this skill when designing, redesigning, improving, reviewing, or implementing website interfaces, dashboards, admin panels, landing pages, and web application screens. Use it for product-grade UI/UX, visual hierarchy, design systems, color palettes, typography, responsive layouts, accessibility, interaction design, micro-animations, dashboard density, component patterns, and frontend experience architecture.
---

# UI/UX System Designer

Use this skill to design interfaces that are clear, usable, accessible, beautiful, and implementation-ready. Good design is not decoration — it is clarity made visible.

## Output Instructions

When activated:

- **Identify the product context first** — user roles, primary tasks, and data density.
- **Design for the actual user's job**, not an idealized version of it.
- **Produce implementation-ready output**: color tokens, font scales, component specs, layout rules, and interaction states — not vague adjectives.
- **Always address all states**: loading, empty, error, success, disabled, hover, and focus.
- **Flag accessibility issues** explicitly — never leave contrast or keyboard access as an afterthought.

---

## Design Workflow

1. **Identify the product context:**
   - Who are the users? (roles, technical level, frequency of use)
   - What is the primary task on this screen?
   - What decisions must the user make here?
   - How dense is the data? (sparse info page vs. power-user dashboard)
   - What is the emotional tone? (calm trust vs. urgent action vs. creative inspiration)

2. **Establish layout and hierarchy:**
   - Navigation model (topbar, sidebar, bottom tabs, breadcrumb)
   - Page hierarchy: which content is primary, secondary, tertiary?
   - Primary and secondary actions
   - Content grouping: what belongs together visually?
   - Responsive behavior at each breakpoint

3. **Define the design system:**
   - Color tokens, typography scale, spacing system, component tokens
   - (Use the Design System section below)

4. **Design components:**
   - Use existing design tokens first — never ad-hoc values
   - Specify all states: loading, empty, error, disabled, hover, focus, success
   - Create reusable variants only when reuse is likely

5. **Review the design:**
   - Is the scan order obvious?
   - Is the primary action immediately visible?
   - Does every control have an accessible label?
   - Does the layout work on mobile, tablet, desktop, and wide screens?

---

## Design System Definition

Define these tokens before designing any screen:

### Color Palette

```css
:root {
  /* Brand */
  --color-primary: hsl(220, 90%, 56%); /* Vibrant blue */
  --color-primary-light: hsl(220, 90%, 96%);
  --color-primary-dark: hsl(220, 90%, 40%);

  /* Semantic */
  --color-success: hsl(145, 63%, 42%);
  --color-warning: hsl(38, 92%, 50%);
  --color-danger: hsl(0, 72%, 51%);
  --color-info: hsl(200, 85%, 50%);

  /* Neutral */
  --color-gray-50: hsl(220, 20%, 98%);
  --color-gray-100: hsl(220, 15%, 94%);
  --color-gray-200: hsl(220, 13%, 87%);
  --color-gray-300: hsl(220, 10%, 74%);
  --color-gray-400: hsl(220, 9%, 58%);
  --color-gray-500: hsl(220, 9%, 44%);
  --color-gray-600: hsl(220, 10%, 32%);
  --color-gray-700: hsl(220, 12%, 22%);
  --color-gray-800: hsl(220, 15%, 15%);
  --color-gray-900: hsl(220, 20%, 9%);

  /* Surface */
  --color-bg: var(--color-gray-50);
  --color-surface: #ffffff;
  --color-border: var(--color-gray-200);
  --color-text: var(--color-gray-900);
  --color-text-muted: var(--color-gray-500);
}
```

**Color Rules:**

- Use a curated HSL palette — never plain `red`, `blue`, or `green`
- Never use color as the only way to communicate status — pair with icon or text
- Primary color: use for the main CTA button and active states only — not everywhere
- Background surfaces: use subtle grays, not pure white on white
- Test all text/background combinations for WCAG AA contrast (≥ 4.5:1 normal, ≥ 3:1 large)

### Dark Mode

```css
[data-theme="dark"] {
  --color-bg: hsl(220, 20%, 9%);
  --color-surface: hsl(220, 15%, 14%);
  --color-border: hsl(220, 12%, 22%);
  --color-text: hsl(220, 20%, 96%);
  --color-text-muted: hsl(220, 10%, 60%);
}
```

Toggle with `document.documentElement.dataset.theme = 'dark'`. Persist in `localStorage`.

### Typography Scale

```css
:root {
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-display: "Outfit", var(--font-sans);
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  --text-xs: 0.75rem; /* 12px — metadata, captions */
  --text-sm: 0.875rem; /* 14px — secondary text, labels */
  --text-base: 1rem; /* 16px — body text default */
  --text-lg: 1.125rem; /* 18px — lead paragraph */
  --text-xl: 1.25rem; /* 20px — card titles */
  --text-2xl: 1.5rem; /* 24px — section headings */
  --text-3xl: 1.875rem; /* 30px — page headings */
  --text-4xl: 2.25rem; /* 36px — hero sub-headings */
  --text-5xl: 3rem; /* 48px — hero headings */

  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

**Typography Rules:**

- Minimum body font size: 16px (1rem) — never smaller for paragraph text
- Never use negative letter spacing on body text
- Never use `vw` units alone for font size — always clamp: `clamp(1rem, 2vw + 0.5rem, 1.25rem)`
- Keep line length 45–75 characters for body text: `max-width: 65ch`
- Heading hierarchy: only one `<h1>` per page; h2, h3 in logical order

### Spacing System

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

- Use multiples of 4px — never arbitrary values like 13px or 27px
- Section vertical padding: `80px` desktop, `48px` tablet, `32px` mobile
- Card internal padding: `24px` desktop, `16px` mobile

### Component Tokens

```css
:root {
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px hsla(0, 0%, 0%, 0.08), 0 1px 2px hsla(0, 0%, 0%, 0.06);
  --shadow-md: 0 4px 6px hsla(0, 0%, 0%, 0.07), 0 2px 4px hsla(0, 0%, 0%, 0.06);
  --shadow-lg:
    0 10px 15px hsla(0, 0%, 0%, 0.1), 0 4px 6px hsla(0, 0%, 0%, 0.05);
  --shadow-xl:
    0 20px 25px hsla(0, 0%, 0%, 0.1), 0 10px 10px hsla(0, 0%, 0%, 0.04);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;

  /* Z-index scale */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

---

## Layout Rules

- Use CSS Grid for two-dimensional page layouts; Flexbox for component-level layout
- `max-width: 1280px` with auto margins for standard page content
- Avoid nested cards — cards inside cards create visual noise and hierarchy confusion
- Keep page sections unframed by default — cards are semantically meaningful, not decorative boxes around everything
- Give fixed-format elements (sidebars, toolbars) stable dimensions to prevent layout shifts
- Use `gap` for spacing between flex/grid items — not `margin` hacks

---

## Visual Hierarchy Rules

Every screen must have a clear visual hierarchy. Test by squinting — the most important element should stand out.

**Hierarchy tools:**

- **Size**: larger = more important
- **Weight**: bold = primary, regular = secondary, light = metadata
- **Color**: accent color for CTAs, muted gray for secondary info
- **Space**: more whitespace = more importance
- **Position**: top-left = highest attention (for LTR languages)

**Common hierarchy mistakes:**

- Equal-weight typography everywhere — nothing stands out
- Too many primary-colored buttons on one screen
- Dense content with no whitespace to guide the eye
- Important metadata displayed at the same size as key content

---

## Component Design Patterns

### Buttons

```css
/* Primary — one per major action per screen */
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}
.btn-primary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Ghost / secondary — for less important actions */
.btn-ghost {
  background: transparent;
  border: 1.5px solid var(--color-border);
  color: var(--color-text);
}
```

**Button rules:**

- One primary button per significant action group — never three primary buttons in a row
- Destructive actions: use a danger-colored button, require confirmation
- Loading state: replace text with spinner, disable the button, show "Saving..." or "Submitting..."
- Icon buttons: always include `aria-label`

### Cards

- Cards group related content — do not put unrelated content in one card
- Use consistent card padding: `24px` desktop, `16px` mobile
- Clickable cards: use a subtle hover transform (`translateY(-2px)`) and shadow increase
- Avoid nested cards (card inside card)

### Forms

- Label above field (not floating label or placeholder-only)
- Error message: red text + error icon directly below the field
- Helper text: gray text below the field (shows before error occurs)
- Required indicator: asterisk (\*) with a legend explaining it means required
- Submit button: primary button, disabled + loading state while submitting

### Tables (Dashboard)

- Use zebra striping (`--color-gray-50` alternate rows) or row hover for large tables
- Freeze the first column for wide horizontal tables
- Bulk selection: checkbox column on the left
- Row actions: icon buttons on the right, visible on hover or always for important actions
- Empty state: illustration or icon + message + primary action
- Loading state: skeleton rows matching the table structure

### Badges And Status

```css
.badge {
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}
.badge-success {
  background: hsl(145, 63%, 92%);
  color: hsl(145, 63%, 28%);
}
.badge-warning {
  background: hsl(38, 92%, 92%);
  color: hsl(38, 92%, 28%);
}
.badge-danger {
  background: hsl(0, 72%, 94%);
  color: hsl(0, 72%, 38%);
}
.badge-info {
  background: hsl(200, 85%, 92%);
  color: hsl(200, 85%, 30%);
}
.badge-neutral {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
}
```

---

## Interaction And Micro-Animation Design

Animations must serve the user — they should confirm actions, guide attention, or provide feedback.

**Recommended animations:**

- Button hover: `transform: translateY(-1px)` + shadow increase (`150ms ease`)
- Card hover: `transform: translateY(-2px)` + shadow increase (`200ms ease`)
- Modal open: `opacity: 0 → 1` + `transform: scale(0.95) → 1` (`250ms ease`)
- Toast enter: `translateX(100%) → 0` (`300ms ease-out`)
- Page transition: `opacity: 0 → 1` (`200ms ease`)
- Skeleton loading: shimmer gradient animation
- Accordion expand: `max-height` animation with `overflow: hidden`

**Never animate:**

- Layout reflows (changing `width`, `height`, `margin`) — use `transform` instead
- Content that blocks reading or interaction
- More than 2–3 elements simultaneously without a clear visual purpose

**Always respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dashboard Design Rules

Dashboards are tools — optimize for scanning, comparison, and repeated work.

- **Above the fold**: key metrics, status overview, and primary actions
- **Metrics**: large number + label + trend indicator (▲ +12% this week)
- **Charts**: labeled axes, clear titles, tooltip on hover, mobile-responsive
- **Tables**: sortable columns, row actions, bulk selection, status badges
- **Filters**: visible and close to the data they affect — not hidden in a modal
- **Bulk actions**: appear when rows are selected, clear when deselected
- **Empty states**: explain why it's empty + how to add the first item
- **Refresh**: auto-refresh critical metrics or show "Last updated X ago"

---

## Accessibility

- Semantic HTML: `<button>` for actions, `<a>` for navigation, `<main>`, `<nav>`, `<header>`
- Label every form field with `<label>` — not placeholder text
- Label icon-only buttons with `aria-label`
- Focus ring: never `outline: none` — always provide a visible custom focus style
- Contrast: text ≥ 4.5:1, large text ≥ 3:1, UI elements ≥ 3:1 (WCAG AA)
- Skip navigation: first focusable element should be "Skip to main content"
- Never communicate status with color alone — pair with icon or text

---

## Design Review Checklist

- [ ] First scan reveals what matters — visual hierarchy is clear
- [ ] Primary action is immediately obvious — one dominant CTA
- [ ] Related controls and information are grouped together
- [ ] Layout works on mobile (375px), tablet (768px), desktop (1280px), wide (1920px)
- [ ] Loading, empty, error, and success states all designed and visible
- [ ] Forms are easy to complete — labels above fields, errors inline
- [ ] All text/background combinations pass WCAG AA contrast
- [ ] All interactive elements have visible focus states
- [ ] No color-only status communication
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Dark mode works correctly (if supported)
- [ ] No nested cards or excessive visual noise
