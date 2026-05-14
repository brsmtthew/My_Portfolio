---
name: mobile-app-responsive-engineer
description: Use this skill when designing, building, reviewing, optimizing, or debugging responsive mobile applications including React Native, Expo, Flutter-style planning, mobile web apps, and app-like PWAs. Use it for adaptive layouts, safe areas, touch targets, navigation patterns, typography scaling, gestures, keyboard handling, accessibility, offline support, and cross-device mobile UI behavior.
---

# Mobile App Responsive Engineer

Use this skill to build mobile interfaces that remain usable, performant, and visually correct across small phones, large phones, tablets, foldables, and orientation changes.

## Output Instructions

When activated:

- **Inspect the app stack first** — React Native, Expo, Ionic, or mobile web each have different layout primitives.
- **Identify device targets** — list the devices and OS versions that must be supported.
- **Flag safe area issues** — the most common source of layout breakage on modern phones.
- **Verify at minimum**: 375px (iPhone SE), 390px (iPhone 14), 430px (iPhone 14 Pro Max), 768px (iPad), and landscape orientation.
- **Always address keyboard behavior** — forms that break under the keyboard are the most reported mobile bug.

---

## Breakpoint Reference

| Device              | Width       | Notes                         |
| ------------------- | ----------- | ----------------------------- |
| Small phone         | 320–375px   | iPhone SE, budget Android     |
| Standard phone      | 390–414px   | iPhone 14, Pixel 7            |
| Large phone         | 430–480px   | iPhone 14 Pro Max, Android XL |
| Tablet portrait     | 768–834px   | iPad, Android tablet          |
| Tablet landscape    | 1024–1180px | iPad Pro landscape            |
| Foldable (unfolded) | 720–900px   | Galaxy Fold, Surface Duo      |

---

## Mobile Workflow

1. **Inspect the app stack:**
   - React Native / Expo, Ionic, Capacitor, or mobile web (PWA)
   - Navigation library: React Navigation, Expo Router, or native tabs
   - Styling: StyleSheet, NativeWind, styled-components, or Tamagui
   - Safe-area handling: `react-native-safe-area-context` or platform defaults
   - Existing responsive utilities and dimension hooks

2. **Define device behavior:**
   - Small phone layout (320–375px)
   - Standard phone layout (390–430px)
   - Tablet or two-pane layout (768px+)
   - Portrait vs. landscape behavior for each

3. **Identify risk areas before building:**
   - Fixed pixel dimensions that break on non-standard sizes
   - Missing safe area insets (notch, Dynamic Island, home indicator)
   - Keyboard covering form inputs
   - Gestures conflicting with OS swipe navigation
   - Dense layouts that become unreadable at 320px

4. **Implement adaptive UI** (see rules below).

5. **Verify** — see Verification Checklist.

---

## Layout Rules

**Dimensions:**

- Use `flex` proportional layouts instead of fixed pixel widths
- Use `%` widths only within a defined parent container
- Use `Dimensions.get('window')` or `useWindowDimensions()` for dynamic sizing
- Avoid hardcoded heights — let content define height where possible
- Use `minHeight` and `maxWidth` to constrain content sensibly

**Safe Areas:**

- Wrap all screens in `<SafeAreaView>` or use `useSafeAreaInsets()`
- Apply insets to: top (status bar), bottom (home indicator / gesture bar), and sides (foldables)
- Never hardcode status bar height — it varies by device and OS version
- Test with the Dynamic Island (iPhone 14 Pro) and the home indicator (all modern iPhones)

**Scrolling:**

- Use `<ScrollView>` for short variable content
- Use `<FlatList>` or `<SectionList>` for long or dynamic lists — never `ScrollView` with `.map()`
- Add `keyboardShouldPersistTaps="handled"` to `ScrollView` wrapping forms
- Avoid nested scroll views (ScrollView inside ScrollView) — it breaks gesture handling

**Two-Pane / Tablet Layouts:**

- Use a master-detail layout on tablets (list on left, detail on right)
- Detect tablet with `useWindowDimensions()` — if width > 768, show two-pane
- Never stretch a phone layout to fill a tablet screen without redesigning the density

---

## Touch And Interaction

**Touch targets:**

- Minimum tap target: **44×44pt** (Apple HIG) / **48×48dp** (Material Design)
- Add padding to small icons instead of making the visible element larger
- Space destructive actions (Delete, Deactivate) away from frequent actions

**States:**

- Every interactive element needs: default, pressed, disabled, and loading states
- Use `Pressable` (React Native) over `TouchableOpacity` for more control
- Provide haptic feedback for important state changes (success, error, confirmation)

**Gestures:**

- Avoid custom gestures that conflict with OS navigation: left-edge swipe (back), bottom swipe (home)
- Use `react-native-gesture-handler` for complex gesture recognizers
- Always provide an alternative to swipe gestures (button, long-press menu)
- Document every custom gesture — users should be able to discover it

---

## Navigation Patterns

| Pattern              | Use When                                                    |
| -------------------- | ----------------------------------------------------------- |
| **Bottom tabs**      | 3–5 peer destinations with equal frequency                  |
| **Stack navigation** | Drill-down flows with a clear back path                     |
| **Drawer**           | Lower-frequency sections, settings, admin                   |
| **Top tabs**         | Peer views within a single context (Messages: All / Unread) |
| **Modal / Sheet**    | Focused task that doesn't replace the current context       |

**Rules:**

- Keep back behavior predictable — never break the hardware back button (Android)
- Deep screens must preserve context: show which parent they're in, provide a clear exit
- Show a bottom sheet instead of navigating away for quick actions
- Never hide the navigation bar mid-task unless it's a full-screen immersive experience

---

## Keyboard Handling

Keyboard-related layout breaks are the most common mobile form bug.

**Rules:**

- Wrap forms in `KeyboardAvoidingView` with `behavior="padding"` (iOS) or `behavior="height"` (Android)
- Use `ScrollView` inside `KeyboardAvoidingView` so content scrolls above the keyboard
- Auto-scroll the active input into view: use `scrollToField` or `TextInput` ref + `measureInWindow`
- Set the correct `keyboardType` for each input:
  - `email-address`, `phone-pad`, `numeric`, `decimal-pad`, `url`
- Set `returnKeyType` to guide users through the form (`next`, `done`, `search`)
- Dismiss keyboard on form submission and on background tap (`Keyboard.dismiss()`)
- Test: submit button must be **visible and tappable** with the keyboard open

---

## Typography And Density

- **Minimum readable body font size**: 14pt (prefer 16pt)
- **Line height**: 1.4–1.6× font size for body text
- Use `allowFontScaling` appropriately — never disable it unless layout truly cannot adapt
- Test at the largest system font scale setting (Accessibility → Display & Text Size → Larger Text)
- Keep labels short on mobile — truncate with `numberOfLines={1}` and `ellipsizeMode="tail"` where needed
- Avoid long text blocks in constrained panels — use expandable sections

---

## Forms

- Stack all form fields vertically on mobile — never side-by-side unless screen is very wide
- Keep field labels above inputs (not floating or placeholder-only)
- Show inline validation errors directly below the field — not only at the top
- Make submit button full-width on mobile for easy tapping
- Preserve form state when navigating between related steps (wizard flows)
- Use `autoComplete` and `textContentType` for autofill support (email, password, name)

---

## Performance

- **Virtualize all long lists**: `FlatList` / `SectionList` with `initialNumToRender` tuned
- Avoid expensive renders in scroll views — memoize list items with `React.memo`
- Optimize images: use WebP, specify dimensions, use `resizeMode="cover"` or `"contain"`
- Defer non-critical work: use `InteractionManager.runAfterInteractions`
- Keep animations at 60fps — use `useNativeDriver: true` for all Animated transforms
- Profile with Flipper or React Native Debugger before assuming performance is acceptable

---

## Offline & Network

- Show a clear offline banner when network is unavailable
- Cache critical data locally: `AsyncStorage`, `MMKV`, or `SQLite` via `expo-sqlite`
- Queue failed mutations and retry when connection is restored
- Show stale data with a "Last updated" timestamp rather than blocking on network
- Handle slow network gracefully — loading states for every async operation

---

## Accessibility

- All interactive elements: `accessible={true}` with `accessibilityLabel`
- Icon-only buttons: explicit `accessibilityLabel` describing the action
- Maintain screen-reader traversal order matching visual layout
- Support dynamic font scaling — test at maximum scale setting
- Adequate contrast: ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- Never communicate status with color alone — add text or icon

---

## Platform-Specific Notes

**iOS:**

- Respect Dynamic Island and notch with safe area insets
- Status bar style (`light` / `dark`) must contrast with content behind it
- Use `Haptics` from `expo-haptics` for feedback
- Test on both simulator and a real device — simulator does not replicate GPU performance

**Android:**

- Handle back button explicitly with `BackHandler` for custom navigation
- Status bar can be transparent — use `StatusBar` component to configure
- Test on Android 10+ (gesture navigation) and Android 9 (back button navigation)
- Edge-to-edge mode requires explicit safe area handling on Android 15+

---

## Verification Checklist

- [ ] Small phone (375px) layout does not clip, overlap, or produce horizontal scroll
- [ ] Large phone (430px) and tablet (768px) layouts scale naturally
- [ ] Keyboard does not cover active form fields or the submit button
- [ ] Safe areas respected on: notch, Dynamic Island, home indicator, side insets
- [ ] Long lists scroll smoothly — no jank on `FlatList` with 100+ items
- [ ] All touch targets are ≥ 44×44pt — test with finger, not mouse cursor
- [ ] Offline state handled — app does not crash or freeze without network
- [ ] Back button behavior correct on Android
- [ ] Landscape orientation tested — layout does not break
- [ ] Screen reader reads all interactive elements with correct labels
- [ ] Dynamic text scaling does not break layouts at large font size
- [ ] All animations run at 60fps with `useNativeDriver: true`
