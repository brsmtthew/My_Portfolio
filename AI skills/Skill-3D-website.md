---
name: three-d-web-experience-engineer
description: Use this skill when designing, building, reviewing, optimizing, or debugging immersive 3D websites, WebGL interfaces, Three.js projects, React Three Fiber scenes, animated landing pages, product visualizers, interactive portfolios, particle systems, shader effects, and GPU-sensitive web experiences. Use it for scene architecture, asset pipelines, progressive enhancement, responsive 3D interaction, performance budgets, accessibility fallbacks, and visual verification.
---

# 3D Web Experience Engineer

Use this skill to build purposeful 3D web experiences. 3D should support the product, story, interaction, or data — it should never make the interface harder to use or slower to load.

## Output Instructions

When this skill is activated:

- **Clarify the role of 3D** before writing any code — see the Role Classification below.
- **Inspect the existing stack** before recommending libraries or approaches.
- **Always provide a fallback path** — what non-3D users and reduced-motion users see.
- **Flag GPU/performance risk** explicitly for any scene with heavy geometry, post-processing, or real-time shadows.
- **Verify visually** — never assume the canvas renders correctly without a check.

---

## Role Classification

Define the role of 3D in this project before building anything:

| Role                         | Description                             | Common Use                      |
| ---------------------------- | --------------------------------------- | ------------------------------- |
| **Product visualizer**       | Users inspect or configure a 3D object  | E-commerce, hardware, furniture |
| **Brand / hero experience**  | Ambient 3D scene sets tone and emotion  | SaaS landing, agency portfolio  |
| **Interactive storytelling** | 3D environment narrates a journey       | Scroll-driven marketing, games  |
| **Data visualization**       | 3D space encodes multi-dimensional data | Analytics, scientific, finance  |
| **Spatial UI**               | 3D is the navigation interface itself   | VR/XR web, immersive dashboards |

Choose one. Mixed roles are valid but must be planned explicitly.

---

## Workflow

1. **Define the role of 3D** using the Role Classification above.
2. **Inspect the project:**
   - Three.js, React Three Fiber, Drei, Babylon.js, GSAP, Framer Motion, or custom WebGL
   - Asset pipeline: model formats (glTF/GLB preferred), texture atlases, HDR maps
   - Existing scene components, render loop ownership, and animation system
   - Target devices, GPU constraints, and mobile traffic share
3. **Plan progressive enhancement:**
   - Full 3D experience for capable devices
   - Simplified / reduced scene for low-power devices
   - Static image or CSS fallback for no-WebGL environments
   - CSS-only motion for `prefers-reduced-motion` users
4. **Architect the scene** (see Scene Architecture below).
5. **Implement and verify** (see Verification Checklist).

---

## Preferred Stack

Use only when the project has no existing choice:

- **React + Vite** — fast dev server, HMR, optimized builds
- **Three.js** — core WebGL abstraction
- **React Three Fiber (R3F)** — declarative Three.js in React
- **Drei** — R3F helpers: controls, loaders, shaders, post-processing
- **GSAP** — timeline animations, scroll triggers, complex sequencing
- **Framer Motion** — React-native animation, layout animations
- **Leva** — dev panel for scene tweaking (dev-only)

---

## Project Structure

```txt
src/
  components/
    three/          ← R3F canvas, scene root, lights, camera
    scenes/         ← specific scene compositions
    ui/             ← DOM overlay components (HUD, labels, nav)
  hooks/
    useScene.js     ← scene state, loaded/ready flags
    useScroll.js    ← scroll progress for scroll-driven scenes
  lib/
    drei-helpers/
    postprocessing/
  shaders/
    vertex/
    fragment/
  assets/
    models/         ← .glb files (compressed with Draco/Meshopt)
    textures/       ← .webp / .ktx2 compressed textures
    hdr/            ← .hdr environment maps
    lottie/
  utils/
    dispose.js      ← geometry/material cleanup helpers
    detect.js       ← device capability detection
```

---

## Scene Architecture

**Separation of concerns:**

- Scene composition: geometry, lights, materials, camera rig
- Controls: OrbitControls, ScrollControls, drag events
- Post-processing: bloom, depth of field, SSAO — in a separate pass
- UI overlays: HTML labels, tooltips, loading states — in DOM, not canvas
- Data / state logic: outside the render loop

**Render loop discipline:**

- Use `useRef` for per-frame values — never `useState` for animation state
- Keep `useFrame` callbacks lean — no array allocations, no DOM queries
- Batch geometry updates — avoid triggering React re-renders in the loop
- Cancel unused effects and animation loops on unmount

**Memory management:**

- Dispose geometries, materials, and textures explicitly when not using R3F auto-disposal
- Use `useEffect` cleanup to call `.dispose()` on custom Three.js objects
- Audit with Three.js Inspector or `renderer.info` for leak detection

**Asset optimization:**

- Use **glTF/GLB** (not OBJ or FBX) for 3D models
- Compress with **Draco** (geometry) or **Meshopt** (better for animation)
- Use **KTX2** compressed textures (via Basis Universal) for GPU memory savings
- Environment maps: use pre-blurred RGBE / HDR — avoid real-time cube cameras
- Bake lighting into textures when static — avoid excessive shadow casting

**Lights:**

- Keep lights intentional: 1 directional + 1 ambient is usually sufficient
- Use environment maps (`<Environment>` in Drei) instead of point lights where possible
- Shadow casting: limit to 1–2 shadow-casting lights, use low shadow map resolution on mobile

**Instancing:**

- Use `InstancedMesh` for repeated geometry (particles, grids, crowds)
- Never create unique mesh objects per item when count > 50

---

## Shader Guidance

Use custom shaders when built-in Three.js materials cannot achieve the required look:

- Write shaders in **GLSL ES 3.0** (`#version 300 es` or Three.js default ES1 compat)
- Use `shaderMaterial` from Drei for React Three Fiber integration
- Pass uniforms for: time, mouse position, resolution, color
- Avoid texture lookups in vertex shaders on mobile (limited precision)
- Test on both desktop GPU and mobile (Safari WebGL2 has stricter limits)
- Keep fragment shader complexity low on mobile — avoid nested loops and expensive math

---

## Progressive Enhancement Plan

| Device Tier                    | Experience                                                    |
| ------------------------------ | ------------------------------------------------------------- |
| **High-end desktop**           | Full scene, post-processing, high-res textures, shadows       |
| **Mid-range desktop / laptop** | Scene without post-processing, medium textures                |
| **Mobile**                     | Simplified geometry, no shadows, smaller textures, LOD models |
| **No WebGL**                   | Static image fallback + CSS animation                         |
| **`prefers-reduced-motion`**   | Static pose of the 3D scene or pure CSS layout                |

Detect tier with:

```js
// Basic GPU tier detection
import { getGPUTier } from "detect-gpu";
const { tier } = await getGPUTier(); // 0 = low, 1 = mid, 2 = high, 3 = ultra
```

---

## Performance Rules & Budgets

**Frame rate targets:**

- Desktop: 60 fps stable
- Mobile: 30 fps acceptable minimum

**Draw call budget:**

- Landing page hero: ≤ 50 draw calls
- Product visualizer: ≤ 200 draw calls
- Complex scene: ≤ 500 draw calls (profile before exceeding)

**Texture budget:**

- Mobile: ≤ 50MB total GPU texture memory
- Desktop: ≤ 150MB

**Techniques:**

- LOD (Level of Detail): swap in simplified models at distance or on mobile
- Frustum culling: Three.js does this by default — do not disable it
- Occlusion: manually hide objects behind the camera for complex scenes
- Post-processing: limit to 1–2 passes on mobile; disable entirely on low-tier GPUs
- Bundle: lazy-load the 3D canvas and all scene assets — never block initial page paint

**Monitoring:**

- Use `renderer.info` for draw call, triangle, and memory stats in dev
- Use Chrome DevTools Performance tab for frame analysis
- Use Spector.js for WebGL call inspection

---

## Interaction Rules

- Make interactive objects **discoverable** — cursor change, pulse, or hint text
- Do not trap scroll or pointer input without explicit user intent
- Support keyboard-accessible alternatives for critical 3D interactions
- Keep camera movement **comfortable** — limit rotation speed, add damping, prevent flipping
- Clamp orbit angles to prevent disorienting camera positions
- Support touch with `touch-action: none` on the canvas only when needed
- Keep important copy in the **DOM** — not baked into textures or geometry

---

## Responsive Rules

- **Reframe camera** per breakpoint: adjust `fov`, `position.z`, and object scale
- **Rescale objects** for portrait vs landscape — what fills a desktop may be invisible on mobile
- Primary content must be **visible above the fold** — 3D should not push it below
- Overlay DOM UI must **not collide** with the canvas subject at any breakpoint
- Test **portrait and landscape** when mobile usage is expected
- Reduce canvas resolution on high-DPI mobile: `dpr={[1, 1.5]}` (not `window.devicePixelRatio`)

---

## Loading States

The 3D canvas must never show a blank screen without feedback:

- Show a styled loading screen or skeleton while assets load
- Use `<Suspense fallback={<LoadingUI />}>` for R3F asset loading
- Display load progress with `useProgress` from Drei
- If loading takes > 3s, show a message and a skip-to-static option
- On load error, show a friendly error state and a static fallback

---

## Accessibility Fallbacks

- `prefers-reduced-motion: reduce` → pause all animations, show static scene pose
- No WebGL support → swap canvas for a high-quality static image or CSS-animated alternative
- Screen reader users → provide a descriptive `aria-label` on the canvas element
- All critical text and CTAs must be in the DOM — never rely on 3D objects for critical information
- Keyboard users → ensure all interactive 3D elements have a DOM-accessible equivalent

---

## Debugging 3D Issues

| Symptom               | Likely Cause                                         | Fix                                            |
| --------------------- | ---------------------------------------------------- | ---------------------------------------------- |
| Blank canvas          | Camera clipping, wrong position, WebGL init fail     | Check `near`/`far` planes, log `renderer.info` |
| Objects invisible     | Scale = 0, behind camera, culled, wrong layer        | Log object `.position` and `.visible`          |
| Textures not loading  | Wrong path, CORS, wrong format                       | Check network tab, verify file format          |
| Low frame rate        | Too many draw calls, large textures, post-processing | Use `renderer.info`, reduce complexity         |
| Broken on mobile      | WebGL2 not supported, texture format issue, memory   | Test with `detect-gpu`, use fallback path      |
| Artifacts / glitching | Z-fighting, depth buffer precision                   | Add `polygonOffset`, increase near plane       |
| Memory leak           | Missing `.dispose()`                                 | Check `renderer.info.memory` over time         |

---

## Verification Checklist

Before completing any 3D task, verify:

- [ ] Canvas renders non-blank on first paint
- [ ] Scene is correctly framed on desktop (1280px) and mobile (375px)
- [ ] Animation starts, loops, pauses, or degrades as intended
- [ ] `prefers-reduced-motion` path is acceptable (static or minimal motion)
- [ ] Loading state shows correctly — no blank flash
- [ ] Page remains readable and navigable while canvas is active
- [ ] Draw calls within budget (check `renderer.info`)
- [ ] No memory leaks — `renderer.info.memory` stable after scene loads
- [ ] Mobile frame rate acceptable — test on real device or throttled DevTools
- [ ] Fallback works for no-WebGL environments
- [ ] All interactive 3D elements are keyboard/screen-reader accessible via DOM equivalent
