---
name: system-debugging-engineer
description: Use this skill when debugging, analyzing, fixing, reviewing, refactoring, or stabilizing websites, React applications, Next.js projects, Vite projects, Firebase systems, APIs, frontend architecture, or full-stack web applications. Use it for root-cause analysis, import and dependency failures, runtime errors, state bugs, rendering problems, hydration issues, styling regressions, database/API issues, build failures, and production stability work.
---

# System Debugging Engineer

Use this skill to diagnose before changing code. Apply the smallest complete fix that resolves the root cause and preserves all existing behavior.

## Output Instructions

When activated:
- **Capture the full failure context** before suggesting any fix — see Step 1.
- **Reproduce or approximate the error** before touching code.
- **Never apply broad rewrites** to fix a narrow bug — patch narrowly.
- **State the root cause explicitly** in your response — not just "this is the fix."
- **Verify the fix** before closing — re-run the failing flow, build, or test.
- **Use the Response Format** at the end of every debug session.

---

## Debugging Workflow

1. **Capture the failure:**
   - Exact error message (copy verbatim — do not paraphrase)
   - Full stack trace
   - Affected route, component, API endpoint, or build step
   - What action triggered the error
   - Environment: browser / Node / CI, OS, Node version, framework version
   - Recent changes (last commit, dependency update, config change)

2. **Reproduce or approximate:**
   - Run the failing command or action if safe
   - Search for the referenced file, symbol, route, or dependency
   - Inspect recent changes around the failure — check git diff
   - Confirm whether the error is consistent or intermittent

3. **Trace the root cause:**
   - Follow imports and exports from the error source
   - Check data shape and state transitions leading to the error
   - Inspect configuration, environment variables, and build tooling
   - Determine: is the visible error the root cause, or a symptom of something upstream?

4. **Patch narrowly:**
   - Keep all unrelated code intact
   - Prefer a targeted fix over a broad rewrite
   - Add guards only when invalid input is a genuinely supported state
   - Document why the fix works in a comment if the cause is non-obvious

5. **Verify:**
   - Re-run the failing command, route, or workflow
   - Run the nearest applicable tests or build
   - For UI bugs: inspect the affected screen at relevant breakpoints
   - Confirm no regression in related functionality

---

## Common Failure Classes

### React

| Bug | Cause | Fix |
|---|---|---|
| Invalid hook call | Hook called outside component or in conditional | Move hook to top level of component |
| Stale closure in useEffect | Missing dependency in deps array | Add missing dep or use `useCallback` |
| Render loop | State update inside render, or effect updating its own dep | Remove state from render path; add condition in effect |
| `Cannot read property of undefined` | Async data not yet loaded | Add loading guard: `if (!data) return null` |
| Wrong provider error | Context used outside its Provider | Move Provider higher in the component tree |
| Duplicate state | Same value in two places, one lags | Remove one — derive from the single source |
| Route protection bypass | Auth check in client component only | Add server-side redirect for protected routes |
| Hydration mismatch | Server HTML differs from client render | Remove browser-only APIs from initial render; use `useEffect` for client-only code |

### Next.js

| Bug | Cause | Fix |
|---|---|---|
| Hydration error | Server/client render mismatch | Wrap client-only content in `useEffect` or dynamic import with `ssr: false` |
| `useRouter` not working | Called in Server Component | Convert to Client Component (`'use client'`) |
| Layout not applying | Wrong file name or location | Check `app/layout.tsx` exists at correct route segment |
| Static params missing | `generateStaticParams` not exported | Export `generateStaticParams` from dynamic page |
| Environment variable undefined | `NEXT_PUBLIC_` prefix missing for client | Prefix client env vars with `NEXT_PUBLIC_` |
| 404 on dynamic route | File not named with brackets correctly | Check `[param]` bracket syntax in filename |
| Slow page load | No streaming or Suspense | Add `<Suspense>` around async components |

### Imports And Modules

| Bug | Cause | Fix |
|---|---|---|
| `SyntaxError: default export` | Default vs. named export mismatch | Match import style to how the module exports |
| `MODULE_NOT_FOUND` | Wrong path, missing install, typo | Check path case sensitivity, run `npm install` |
| Circular import | A imports B, B imports A | Extract shared logic into a third module |
| ESM/CJS conflict | Mixed module systems | Set `"type": "module"` or use `.mjs`/`.cjs` extensions |
| Broken alias | `@/components` not resolving | Check `vite.config` or `tsconfig.json` `paths` |

### Vite

| Bug | Cause | Fix |
|---|---|---|
| Env variable undefined | Missing `VITE_` prefix | Rename to `VITE_MY_VAR` |
| Alias not resolving | Missing `resolve.alias` in `vite.config` | Add alias and matching `tsconfig.json` path |
| Blank page after deploy | Dynamic import path issue | Check base URL in `vite.config.js` |
| HMR not working | Import order or plugin conflict | Check plugin order, restart dev server |
| Build error only | Browser API used in SSR path | Guard with `typeof window !== 'undefined'` |

### Firebase

| Bug | Cause | Fix |
|---|---|---|
| App initialized multiple times | `initializeApp` called on every render | Move to a singleton module, check with `getApps()` |
| `permission-denied` | Firestore rules blocking the request | Check rules in Firebase Console → Rules Simulator |
| Missing environment variable | `.env` not loaded or wrong key name | Check variable name matches exactly (case-sensitive) |
| `failed-precondition` | Missing composite index | Click the index link in the error; deploy the index |
| Auth state null on load | Auth not yet initialized | Use `onAuthStateChanged` instead of reading `currentUser` synchronously |
| Infinite read loop | Firestore listener in `useEffect` without cleanup | Return `unsubscribe` from `useEffect` |

### Styling And Layout

| Bug | Cause | Fix |
|---|---|---|
| Horizontal scroll | Element wider than viewport | Use DevTools to find overflow source; add `overflow-x: hidden` on body temporarily |
| Z-index bug | Stacking context not established | Add `position: relative` + explicit `z-index` on the parent |
| Tailwind class not applying | Class not in `content` path | Add the file pattern to `tailwind.config.js` `content` array |
| Layout shift on load | Image without `width`/`height` or font without `font-display: swap` | Set explicit dimensions on images; add `font-display: swap` |
| Focus state invisible | `outline: none` without replacement | Add `focus-visible` styles |
| Flex child overflows | `min-width: auto` default | Add `min-width: 0` to the flex child |

### TypeScript

| Bug | Cause | Fix |
|---|---|---|
| `Type 'X' is not assignable to 'Y'` | Wrong type passed or returned | Align types; use type guard if input is dynamic |
| `Property does not exist` | Optional property accessed without guard | Add `?.` optional chaining or explicit `if` guard |
| `any` creeping in | API response not typed | Define response interface; use Zod for runtime validation |
| `Cannot find module` (TS only) | Missing type declarations | Install `@types/package` or declare a module |
| Strict null errors | `strictNullChecks` enabled | Add null guards before access |

---

## Build & CI Failures

**Check in this order:**
1. Is the error from `npm install` or a missing dependency?
2. Is there a TypeScript error (`npm run typecheck`)?
3. Is there a lint error (`npm run lint`)?
4. Is there a test failure (`npm run test`)?
5. Is there an import path or asset path error specific to the build environment?

**Environment-only build failures (works locally, fails in CI):**
- Missing environment variables in CI — add them to CI secrets
- Case-sensitive file paths — Linux (CI) is case-sensitive, macOS/Windows are not
- Node version mismatch — pin Node version in `.nvmrc` or `engines` in `package.json`
- Missing `node_modules` — confirm CI runs `npm ci` before build

---

## Dependency Recovery

Use dependency reset only after confirming corruption or install mismatch. Always use the package manager already in the repo (check lockfile type: `package-lock.json` = npm, `yarn.lock` = yarn, `pnpm-lock.yaml` = pnpm).

**Standard reset:**
```bash
# npm
rm -rf node_modules
npm ci

# yarn
rm -rf node_modules
yarn install --frozen-lockfile

# pnpm
rm -rf node_modules
pnpm install --frozen-lockfile
```

- Do not delete the lockfile unless the user explicitly requests it or it was generated by the wrong package manager.
- Do not switch package managers mid-project without the user's explicit decision.

---

## Performance Debugging

| Symptom | Diagnostic | Fix |
|---|---|---|
| Slow initial page load | Lighthouse Performance tab | Code split, lazy load, compress images |
| Slow React re-renders | React DevTools Profiler | Memoize with `React.memo`, `useMemo`, `useCallback` |
| Large JS bundle | `vite-bundle-visualizer` | Remove unused deps, split routes, use dynamic imports |
| Layout shift (CLS) | Chrome DevTools → Performance → Layout Shifts | Set `width`/`height` on images; reserve space for dynamic content |
| Memory leak | Chrome DevTools → Memory → Heap Snapshot | Remove event listeners and subscriptions on unmount |
| Slow API response | Network tab → Waterfall | Add caching (Tanstack Query), paginate, index the database |

---

## Fix Quality Rules

- Do not remove features to make errors disappear.
- Do not silence errors with empty `catch {}` blocks without explaining why the condition is safe.
- Do not add broad `try/catch` around logic that should be corrected.
- Preserve all public APIs and exported interfaces unless the user explicitly requested breaking changes.
- Add or update focused tests for logic-heavy bugs that are likely to regress.
- If a workaround is necessary (library bug, platform limitation), document it with a `// WORKAROUND:` comment and a link to the issue.

---

## Response Format

Every debug response must include:

1. **Root cause** — the exact reason the failure occurred
2. **Files changed** — list every file modified with a brief reason
3. **Why the fix works** — explain the mechanism, not just what was done
4. **Verification performed** — what was run or checked to confirm the fix
5. **Remaining risk or follow-up** — anything that could regress or needs further attention
