---
name: web-responsiveness-engineer
description: Use this skill when designing, building, reviewing, debugging, optimizing, or scaling responsive websites, dashboards, admin panels, SaaS platforms, and web applications. Use it for mobile-first layouts, adaptive grids, responsive navigation, touch interactions, overflow fixes, responsive tables, charts, forms, images, and cross-device frontend verification.
---

# Web Responsiveness Engineer

Use this skill to make web interfaces stable, readable, and usable across mobile, tablet, desktop, and wide screens. Mobile-first always — add complexity at larger breakpoints, not the reverse.

## Output Instructions

When activated:

- **Inspect existing layout system** before proposing changes — see Step 1.
- **Identify risk areas first** — fixed widths, absolute positioning, dense tables, modals.
- **Always fix mobile first**, then verify tablet and desktop.
- **Test at a minimum**: 375px, 768px, 1280px, 1920px.
- **Run the Verification Checklist** before completing any responsiveness task.

---

## Breakpoint Reference

| Breakpoint | Width       | Target                                |
| ---------- | ----------- | ------------------------------------- |
| `xs`       | 320px       | Smallest supported phones (iPhone SE) |
| `sm`       | 375–480px   | Standard phones                       |
| `md`       | 768px       | Tablets, large phones landscape       |
| `lg`       | 1024px      | Small laptops, tablets landscape      |
| `xl`       | 1280px      | Standard desktop                      |
| `2xl`      | 1536–1920px | Wide desktop, external monitors       |

**CSS breakpoint pattern (mobile-first):**

```css
/* Mobile base styles */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  .container {
    padding: 48px;
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

---

## Responsiveness Workflow

1. **Inspect the existing layout system:**
   - Breakpoints defined (CSS variables, Tailwind config, or custom)
   - Container widths and max-width strategy
   - Grid and flex usage — CSS Grid, Flexbox, or framework grid
   - Navigation behavior at each breakpoint
   - Table, chart, and form patterns

2. **Identify risk areas before touching code:**
   - Fixed pixel widths/heights on containers, cards, or columns
   - `position: absolute` or `position: fixed` elements that may overflow
   - Long words or URLs that don't wrap
   - Dense comparison tables
   - Sticky headers or sidebars conflicting with content
   - Modals, drawers, or dropdowns that overflow the viewport
   - Images without `max-width: 100%`

3. **Implement mobile-first:**
   - Start with the smallest useful layout
   - Add layout complexity at larger breakpoints with `min-width` media queries
   - Use fluid containers and avoid fixed dimensions for content regions

4. **Verify** — run the Verification Checklist.

---

## Layout Standards

**Containers:**

```css
.page-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}
@media (min-width: 768px) {
  .page-container {
    padding: 0 32px;
  }
}
@media (min-width: 1280px) {
  .page-container {
    padding: 0 48px;
  }
}
```

**Grid:**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 col mobile */
  gap: 16px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  } /* 2 col tablet */
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  } /* 3 col desktop */
}
```

**Rules:**

- Prefer CSS Grid for two-dimensional layouts, Flexbox for one-dimensional
- Use `minmax()`, `clamp()`, and `auto-fill`/`auto-fit` for fluid grids
- Never use `overflow: hidden` on a container to hide layout problems — fix the root cause
- Keep readable line lengths: `max-width: 65ch` for article/prose content
- Use `gap` instead of margins for grid/flex spacing

---

## Navigation

**Desktop patterns:** Top navigation bar, sidebar, or split navigation
**Mobile patterns:** Collapsed hamburger menu, bottom navigation bar, or drawer

**Rules:**

- Hamburger menus: use `<button>` with `aria-expanded` and `aria-controls`
- Mobile menu must be dismissible via: close button, Escape key, backdrop click
- Active state must be visible at all breakpoints
- Primary navigation actions must not be hidden behind unclear icons
- Sticky nav: ensure it does not cover page anchors — use `scroll-margin-top`

**Responsive nav pattern:**

```css
.nav-links {
  display: none;
} /* hidden on mobile */
.nav-links.open {
  display: flex;
} /* shown when toggled */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  } /* always visible on tablet+ */
  .hamburger {
    display: none;
  } /* hide hamburger on tablet+ */
}
```

---

## Tables And Data Views

Never let a table overflow the page without a controlled strategy:

| Data Type        | Mobile Pattern                                                 |
| ---------------- | -------------------------------------------------------------- |
| Simple records   | Stacked card layout per row                                    |
| Dense comparison | Horizontal scroll inside a bounded `overflow-x: auto` wrapper  |
| Admin lists      | Priority column hiding — show only essential columns on mobile |
| Analytics        | Cards for key metrics + simplified responsive chart            |

**Horizontal scroll wrapper:**

```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
}
```

**Always preserve:** row identity, primary status, and primary action button at every breakpoint.

---

## Forms

- Stack all fields vertically on mobile — no side-by-side fields below 640px
- Keep labels above inputs (not inline-label or placeholder-only)
- Use full-width inputs on mobile: `width: 100%`
- Keep error messages directly below the field — not only at the top
- Submit buttons: full-width on mobile, auto-width on desktop
- Never place required form actions off-screen or under sticky overlays
- Test that the keyboard does not cover the active input on mobile browsers

---

## Images And Media

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

- Always specify `width` and `height` attributes on `<img>` to prevent CLS (layout shift)
- Use `loading="lazy"` for images below the fold
- Use `srcset` and `sizes` for responsive images:

```html
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero image description"
  width="800"
  height="500"
/>
```

- Convert all images to WebP (AVIF for next-gen browsers)
- Hero images: use `object-fit: cover` with a defined `aspect-ratio`

---

## Charts And Data Visualizations

- Give all chart containers an explicit responsive wrapper — never a fixed pixel width
- Use `width: 100%` on the chart component and let the library handle internal scaling
- On mobile, simplify: fewer data points, larger touch targets, hidden secondary labels
- Provide a tabular alternative for charts when data density makes the chart unreadable at small sizes
- Recharts: use `<ResponsiveContainer width="100%" height={300}>` always
- Chart.js: wrap in a `<div style="position: relative; height: 300px; width: 100%">`

---

## Modals And Overlays

- On mobile: modals should be full-screen or bottom-sheet style — not a centered card that may overflow
- Set `max-height: 90vh` and `overflow-y: auto` inside the modal for tall content
- Prevent body scroll when modal is open: `document.body.style.overflow = 'hidden'`
- Restore body scroll on close — including when closed by Escape or backdrop click
- Modal must close on: close button, Escape key, backdrop click
- Focus must be trapped inside the modal while open, and returned to trigger element on close
- Test on 375px — the modal must not overflow and must scroll internally if content is tall

---

## Typography Responsiveness

- Use fluid type with `clamp()`:

```css
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
}
p {
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.125rem);
}
```

- Never use `vw` units alone for font sizes — minimum size must be clamped
- Keep line length 45–75 characters for body text: `max-width: 65ch`
- Test that text does not overflow cards, buttons, or nav items at any breakpoint
- Long words or URLs: add `overflow-wrap: break-word` or `word-break: break-word`

---

## Sticky Elements

Sticky headers, footers, and sidebars cause the most layout bugs:

- Sticky nav: `position: sticky; top: 0; z-index: 100`
- Add `scroll-margin-top` to anchor targets equal to the sticky nav height
- Sticky elements must not cover focusable content or form fields
- On mobile, sticky sidebars should collapse or become a drawer
- Test scrolling with the sticky element present — confirm nothing is obscured

---

## Accessibility And Touch

- Maintain visible focus states — never `outline: none` without a replacement
- Use accessible names for icon-only buttons (`aria-label`)
- Touch targets: minimum 44×44px — add padding, not just icon size
- Space interactive elements: minimum 8px between tap targets on mobile
- Never depend on hover interactions for essential actions — touch devices have no hover
- Respect `prefers-reduced-motion` for all transitions and animations

---

## Common Overflow Fixes

| Symptom                           | Fix                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| Horizontal scroll on page         | Find element with `width > 100vw` — use `overflow-x: hidden` on `body` temporarily to diagnose |
| Text overflows its container      | Add `overflow-wrap: break-word` + `min-width: 0` on flex children                              |
| Image wider than container        | Add `max-width: 100%; height: auto`                                                            |
| Fixed-width element breaks layout | Replace fixed width with `max-width` or `width: 100%`                                          |
| Absolute element overflows        | Add `overflow: hidden` on the positioned parent                                                |
| Flex child ignores max-width      | Add `min-width: 0` to the flex child                                                           |

---

## Verification Checklist

- [ ] No unintended horizontal page scroll at any breakpoint (check all pages)
- [ ] No text overlap, clipped labels, or truncated buttons
- [ ] Navigation is usable with touch (no hover-only menus) and keyboard
- [ ] Tables and charts remain readable on mobile (scroll wrapper or stacked layout)
- [ ] Modals fit the viewport and scroll internally when content is tall
- [ ] Sticky elements do not cover important content or form fields
- [ ] Images have `max-width: 100%`, correct `alt` text, and no layout shift
- [ ] Forms stack correctly on mobile and submit button is visible with keyboard open
- [ ] Focus states are visible at all breakpoints
- [ ] Touch targets are ≥ 44px — verified by inspecting computed size in DevTools
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] Tested at: 375px / 768px / 1280px / 1920px minimum
