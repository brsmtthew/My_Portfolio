---
name: website-frontend-engineer
description: Use this skill when implementing, structuring, styling, or optimizing the frontend of a website or web application. Use it for HTML semantics, CSS architecture, design tokens, JavaScript patterns, React components, animation code, form handling, web performance (Core Web Vitals), accessibility implementation, cross-browser compatibility, and frontend tooling. Covers vanilla HTML/CSS/JS, React, Next.js, and Vite projects.
---

# Website Frontend Engineer

Use this skill to implement production-quality frontend code. Write semantically correct, accessible, performant HTML, CSS, and JavaScript — matched to the project's existing stack.

## Output Instructions

When activated:

- **Read the existing codebase first** — check naming conventions, component patterns, and styling approach.
- **Match the existing stack** — do not introduce new frameworks or libraries without justification.
- **Implement all UI states** — every component needs loading, empty, error, and success states.
- **Test at multiple breakpoints** — 375px, 768px, 1280px, 1920px minimum.
- **Check accessibility** — keyboard navigation, focus states, ARIA labels, and contrast before finishing.

---

## Stack Detection Checklist

Before writing any code, identify:

| Layer             | What to Check                                                           |
| ----------------- | ----------------------------------------------------------------------- |
| Framework         | `package.json` — React, Next.js, Astro, or vanilla HTML                 |
| Styling           | Source files — Tailwind, CSS Modules, vanilla CSS, or styled-components |
| Component pattern | Existing components — hooks, composition, prop shapes                   |
| State management  | Existing stores — Zustand, Context, Tanstack Query                      |
| Routing           | Next.js App Router, Pages Router, React Router, or none                 |
| TypeScript        | `tsconfig.json` present — enforce types throughout                      |

---

## HTML Standards

**Page structure — always use:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="≤160 chars" />
    <title>Page — Site Name</title>
    <meta property="og:title" content="Page Title" />
    <meta property="og:description" content="Description" />
    <meta property="og:image" content="/og-image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </head>
  <body>
    <a href="#main" class="skip-link">Skip to main content</a>
    <header>...</header>
    <nav aria-label="Main navigation">...</nav>
    <main id="main">...</main>
    <footer>...</footer>
  </body>
</html>
```

**Element selection rules:**

- `<button>` — triggers an action (never for navigation)
- `<a href>` — navigates to a URL or anchor
- `<form>` — wraps all user input that submits data
- `<article>` — self-contained content (blog post, card)
- `<section>` — thematic grouping with a heading
- `<nav aria-label>` — navigation (use `aria-label` when multiple navs exist)
- Never use `<div>` when a semantic element fits

---

## CSS Architecture

### Design Token System

```css
/* tokens.css — single source of truth for all values */
:root {
  --color-primary: hsl(220, 90%, 56%);
  --color-primary-dark: hsl(220, 90%, 40%);
  --color-primary-light: hsl(220, 90%, 96%);
  --color-success: hsl(145, 63%, 42%);
  --color-warning: hsl(38, 92%, 50%);
  --color-danger: hsl(0, 72%, 51%);
  --color-bg: hsl(220, 20%, 98%);
  --color-surface: #ffffff;
  --color-border: hsl(220, 13%, 87%);
  --color-text: hsl(220, 20%, 9%);
  --color-text-muted: hsl(220, 9%, 44%);

  --font-sans: "Inter", system-ui, sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: clamp(2.25rem, 5vw + 1rem, 3.5rem);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  --max-width: 1280px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px hsla(0, 0%, 0%, 0.08);
  --shadow-md: 0 4px 6px hsla(0, 0%, 0%, 0.07), 0 2px 4px hsla(0, 0%, 0%, 0.06);
  --shadow-lg: 0 10px 15px hsla(0, 0%, 0%, 0.1);
  --transition: 250ms ease;
}

[data-theme="dark"] {
  --color-bg: hsl(220, 20%, 9%);
  --color-surface: hsl(220, 15%, 14%);
  --color-border: hsl(220, 12%, 22%);
  --color-text: hsl(220, 20%, 96%);
  --color-text-muted: hsl(220, 10%, 60%);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Layout Patterns

```css
.container {
  width: 100%;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
}
@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-8);
  }
}
@media (min-width: 1280px) {
  .container {
    padding-inline: var(--space-12);
  }
}

.section {
  padding-block: var(--space-20);
}
@media (max-width: 767px) {
  .section {
    padding-block: var(--space-12);
  }
}

/* Auto-responsive grid — no breakpoints needed */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

/* Fixed-column grids */
.grid-2,
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}
@media (min-width: 640px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 640px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Core Component Styles

```css
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition:
    background var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}
.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn-primary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
.btn-primary:active {
  transform: translateY(0);
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.btn-ghost {
  background: transparent;
  border: 1.5px solid var(--color-border);
  color: var(--color-text);
}
.btn-ghost:hover {
  background: var(--color-bg);
}

/* Cards */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}
.card-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Inputs */
.input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-surface);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}
.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}
.input--error {
  border-color: var(--color-danger);
}
.input--error:focus {
  box-shadow: 0 0 0 3px hsl(0, 72%, 94%);
}

/* Skip link + sr-only */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 9999;
  padding: 8px 16px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
}
.skip-link:focus {
  top: 16px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
```

---

## React Component Patterns

### Component Structure (TypeScript)

```tsx
interface CardProps {
  title: string;
  description?: string;
  href?: string;
}

export function Card({ title, description, href }: CardProps) {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} className={`card ${href ? "card-link" : ""}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </Tag>
  );
}
```

### Data Component (All States)

```tsx
export function PostList() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <PostListSkeleton />;
  if (isError) return <ErrorState onRetry={refetch} />;
  if (!data?.length) return <EmptyState title="No posts yet" />;

  return (
    <ul className="grid-3" role="list">
      {data.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
```

### Accessible Form with Validation

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "At least 10 characters"),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`input ${errors.email ? "input--error" : ""}`}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="field-error">
            {errors.email.message}
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
```

---

## Animation Patterns

```css
/* Fade in up — scroll reveal */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 500ms ease,
    transform 500ms ease;
}
[data-animate].visible {
  opacity: 1;
  transform: none;
}

/* Skeleton shimmer */
@keyframes shimmer {
  from {
    background-position: -200% 0;
  }
  to {
    background-position: 200% 0;
  }
}
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg) 25%,
    var(--color-border) 50%,
    var(--color-bg) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

```js
// Scroll-reveal with IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
document
  .querySelectorAll("[data-animate]")
  .forEach((el) => observer.observe(el));
```

---

## Performance Implementation

```html
<!-- Images: always width + height to prevent CLS -->
<img
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Descriptive text"
  width="800"
  height="500"
  loading="lazy"
  decoding="async"
/>

<!-- Above-fold hero: eager + priority -->
<img
  src="hero.webp"
  alt="..."
  width="1600"
  height="900"
  loading="eager"
  fetchpriority="high"
/>
```

```css
/* Font loading — self-hosted is fastest */
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-weight: 400 700;
  font-display: swap;
}
```

```tsx
// Code splitting — lazy load heavy components
const HeavyChart = dynamic(() => import("./HeavyChart"), {
  ssr: false,
  loading: () => <Skeleton h={300} />,
});
```

**Core Web Vitals targets:**

- LCP < 2.5s — optimize hero image, preload critical fonts
- CLS < 0.1 — set `width`/`height` on all images, reserve space for dynamic content
- INP < 200ms — avoid long tasks, defer non-critical JS

---

## Accessibility Quick Reference

```tsx
// Icon button — always needs aria-label
<button aria-label="Close dialog" onClick={close}><XIcon aria-hidden="true" /></button>

// Live region — screen reader announcements
<div aria-live="polite" className="sr-only">{statusMessage}</div>

// Modal
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Delete</h2>
</div>
```

**Contrast requirements (WCAG AA):**

- Normal text ≥ 4.5:1
- Large text (18px+) ≥ 3:1
- UI components ≥ 3:1

---

## Verification Checklist

- [ ] One `<h1>` per page — correct heading hierarchy
- [ ] Skip link is the first focusable element
- [ ] All images: `alt`, `width`, `height` — no layout shift
- [ ] All icon buttons have `aria-label`
- [ ] All form fields have `<label>` — errors linked via `aria-describedby`
- [ ] All states implemented: loading, empty, error, success
- [ ] Focus rings visible on all interactive elements
- [ ] No horizontal scroll at 375px / 768px / 1280px / 1920px
- [ ] `prefers-reduced-motion` respected
- [ ] Lighthouse Performance ≥ 90 (on deployed build)
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Tested in Chrome, Firefox, Safari, Edge
- [ ] `npm run lint` — zero warnings
- [ ] `npm run build` — zero errors
