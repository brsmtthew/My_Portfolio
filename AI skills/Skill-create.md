---
name: web-app-engineering-system
description: Use this skill when planning, building, reviewing, refactoring, optimizing, or deploying modern websites and web applications, especially React, Next.js, Vite, Firebase, Supabase, dashboard, SaaS, admin, CRUD, and full-stack frontend projects. Use it for production-grade architecture, reusable components, accessibility, performance, security-aware code, responsive UI, form handling, data fetching, state management, and verification-driven implementation.
---

# Web App Engineering System

Use this skill to build real applications — not tutorial pages. Prefer the existing codebase's stack and conventions over the defaults below. Always understand before changing.

## Output Instructions

When activated:
- **Read before writing** — inspect `package.json`, routing, components, and data layer first.
- **Scope the change** — name the exact user workflow being built or changed.
- **Implement in layers** — UI first, then state, then data, then permissions.
- **Verify before finishing** — run lint, typecheck, build, and manual UI check.
- **Never rewrite broadly** when a narrow change solves the problem.

---

## Operating Workflow

1. **Inspect the project before editing:**
   - `package.json`: framework, dependencies, scripts
   - Routing files and app entry points
   - Existing components, hooks, services, and utilities — search before creating new ones
   - Config files: Vite, Next.js, TypeScript, ESLint, Tailwind
   - Auth flow, state management, and data layer pattern

2. **Define the implementation shape:**
   - Name the user workflow being built or changed
   - List affected: routes, components, services, schemas, database calls
   - Keep the change scoped to the requested behavior
   - Identify what already exists that can be reused

3. **Implement in layers (in this order):**
   - UI components and layout
   - Form validation and client state
   - API or service calls
   - Routing and permissions
   - Loading, empty, error, and success states

4. **Verify before finishing:**
   - Run lint and typecheck
   - Run the build
   - Check UI behavior on desktop and mobile when practical
   - Fix all failures caused by the change

---

## Default Stack

Use only when the project has no existing choice:

| Layer | Default Choice | Alternative |
|---|---|---|
| Framework | Next.js (App Router) | React + Vite |
| Styling | Vanilla CSS or Tailwind CSS | CSS Modules |
| State (client) | Zustand or React Context | Jotai |
| State (server) | Tanstack Query | SWR |
| Forms | React Hook Form + Zod | Native form with custom validation |
| Auth | Supabase Auth or Firebase Auth | NextAuth.js |
| Database | Supabase (PostgreSQL) or Firebase Firestore | Neon + Drizzle |
| Icons | Lucide React | Heroicons / Tabler |
| Charts | Recharts | Chart.js / Nivo |
| Animations | Framer Motion | CSS transitions |
| Email | Resend | SendGrid / Nodemailer |

---

## Architecture Rules

- Group feature code by **user domain** when the project is large (not by technical layer).
- Keep shared UI primitives **generic** and feature components **specific**.
- Put data access behind **service functions or hooks** — never scatter API calls through components.
- Co-locate small helpers with their feature; move to shared utilities only after real reuse.
- Do not introduce a new library when existing code can solve the problem.
- Avoid broad rewrites unless the user asked for a redesign or the structure blocks the change.

**Recommended structure for new React/Next.js apps:**
```txt
src/
  app/                    ← Next.js App Router pages and layouts
  components/
    ui/                   ← Generic primitives: Button, Input, Card, Modal
    forms/                ← Form components tied to a schema
    layout/               ← Header, Footer, Sidebar, PageWrapper
    navigation/           ← Navbar, MobileMenu, Breadcrumb
    feedback/             ← Toast, Skeleton, ErrorState, EmptyState
  features/               ← Domain-specific: auth/, dashboard/, orders/
  hooks/                  ← Shared custom hooks
  lib/                    ← Third-party setup: firebase.ts, supabase.ts, stripe.ts
  routes/                 ← Route definitions (Vite) or page files (Next.js)
  schemas/                ← Zod schemas for forms and API validation
  services/               ← Data access functions: api calls, Firestore queries
  store/                  ← Zustand stores or Jotai atoms
  styles/                 ← Global CSS, design tokens, theme
  utils/                  ← Pure utility functions
  types/                  ← Shared TypeScript interfaces and types
  main.jsx / main.tsx     ← App entry point
```

---

## Component Standards

**Structure every component with:**
1. Props interface (TypeScript)
2. Data fetching or state (if needed)
3. Loading state
4. Error state
5. Empty state (for data-driven views)
6. Happy path render

**Rules:**
- Use semantic HTML — `<button>` for actions, `<a>` for navigation, `<form>` for forms
- All icon-only buttons must have `aria-label`
- All interactive elements need: default, hover, focus, disabled, and loading states
- Never put business logic inside JSX — extract to a hook or service
- Never nest `<form>` inside `<form>`
- Prevent text overflow, layout overlap, and horizontal scrolling

**Component size rule:** If a component exceeds ~200 lines or does more than one thing, split it.

---

## State Management

| State Type | Where It Lives | Tool |
|---|---|---|
| Server / remote | Tanstack Query cache | `useQuery`, `useMutation` |
| Client UI state | Component or Zustand | `useState`, Zustand store |
| Form state | React Hook Form | `useForm`, `Controller` |
| URL / filter state | URL params | `useSearchParams`, router |
| Auth state | Context or Zustand | Auth provider |
| Persisted state | localStorage / cookie | Zustand `persist` middleware |

**Rules:**
- Never put remote/server data in a global Zustand store — use Tanstack Query.
- Never lift state higher than necessary.
- Never store derived data — compute from source state.
- Auth tokens: httpOnly cookies for SSR, never `localStorage` for sensitive tokens.

---

## Form Standards

- Use Zod schemas for all form validation:
```typescript
import { z } from 'zod';
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type ContactFormData = z.infer<typeof contactSchema>;
```

- Use React Hook Form with Zod resolver:
```typescript
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

**Rules:**
- Validate at both UI (React Hook Form + Zod) and server (API route + Zod) layers
- Show inline errors directly below each field
- Disable the submit button while submitting — show a loading indicator
- Show a clear success message or redirect after successful submission
- Confirm destructive actions (delete, deactivate) with a modal before executing
- Handle permission errors separately from generic server errors

---

## Data And API Standards

**Client-side data fetching with Tanstack Query:**
```typescript
const { data, isLoading, isError, error } = useQuery({
  queryKey: ['orders', userId],
  queryFn: () => fetchUserOrders(userId),
  staleTime: 60_000, // 1 minute
});
```

**Mutation with optimistic update:**
```typescript
const mutation = useMutation({
  mutationFn: createOrder,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['orders'] });
    toast.success('Order created!');
  },
  onError: (error) => toast.error(error.message),
});
```

**Rules:**
- All API calls must be typed — use Zod for runtime validation of responses
- Implement pagination, filtering, and sorting for all list endpoints
- Never make API calls in render loops — use `useEffect` or Tanstack Query
- Cache expensive reads — set appropriate `staleTime`
- Never expose secrets in frontend code — all secret-using logic on the server

---

## Authentication Patterns

**Next.js App Router with Supabase:**
```typescript
// middleware.ts — protect routes server-side
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return res
}
```

**Rules:**
- Protect routes server-side (middleware or server component) — never client-side only
- Redirect unauthenticated users before the page renders — no flash of protected content
- Separate auth error from generic errors in form responses
- Implement: sign up, login, logout, email verify, password reset, and session persistence

---

## Performance Standards

- **Code splitting**: lazy-load routes and large components with `React.lazy` or Next.js dynamic imports
- **Images**: use `next/image` (Next.js) or `loading="lazy"` + `srcset` (Vite)
- **Fonts**: `font-display: swap`, preload critical fonts, subset if self-hosting
- **Avoid**: unnecessary state lifting, derived data in state, unstable keys in lists
- **Memoize**: `useMemo` and `useCallback` only when profiling confirms unnecessary re-renders
- **Bundle budget**: flag any dependency adding > 20KB gzipped

**Core Web Vitals targets:**
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- Lighthouse Performance ≥ 90

---

## Security Standards

- Never trust client-provided data — validate server-side with Zod
- Never expose API keys in frontend code — use environment variables with `NEXT_PUBLIC_` only for truly public keys
- Use CSRF protection for state-changing API routes
- Sanitize user-generated content before rendering to prevent XSS
- Use `Content-Security-Policy` headers in production
- Rate-limit form submission endpoints to prevent abuse
- Implement proper CORS for API routes

---

## UI Implementation Standards

- Build the actual usable screen first — not a placeholder
- Use semantic HTML and accessible markup throughout
- Include all states: loading, empty, error, disabled, success
- Keep dashboards dense enough for scanning without overcrowding
- Use tables for comparison-heavy data, cards for repeated summaries
- Prevent text overflow, layout overlap, and horizontal scrolling at all breakpoints
- Responsive: test at 375px (mobile), 768px (tablet), 1280px (desktop)

---

## Verification Checklist

Run before every response. Check what is available in the project:

```bash
npm run lint         # zero errors
npm run typecheck    # zero type errors
npm run test         # all tests pass
npm run build        # production build succeeds
```

- Manual browser check for changed UI
- Mobile viewport check (375px) for responsive changes
- Confirm loading, error, and empty states are visible
- Confirm form validation errors appear correctly
- Confirm auth-protected routes redirect unauthenticated users

If a command is unavailable, state that clearly and describe what was verified manually instead.
