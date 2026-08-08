---
name: T.Prasath — Portfolio
description: A dark, glass-morphic ops console for a DevOps & Infrastructure engineer's portfolio
colors:
  signal-blue: "#3DA9FC"
  uptime-green: "#2EE6A8"
  void-black: "#0A0E14"
  panel-black: "#10151C"
  neutral-ink: "#1B232D"
  warning-amber: "#F0B429"
  error-red: "#F85149"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.15em"
    textTransform: "uppercase"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"JetBrains Mono\", ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "0.6rem"
  box: "1rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1.25rem"
  md: "1.5rem"
  lg: "5rem"
  xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.void-black}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.uptime-green}"
    textColor: "{colors.void-black}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "currentColor"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.void-black}"
    rounded: "{rounded.box}"
    padding: "24px"
  badge:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: T.Prasath — Portfolio

## Overview

**Creative North Star: "The Ops Console"**

This portfolio reads like a live infrastructure dashboard, not a résumé with a coat of paint. A network-topology particle field drifts behind every section; a terminal-styled window frames the hero photo, complete with traffic-light dots and a `~/t — zsh` label; a live clock ticks in the navbar; a status dot pulses "available." The visitor isn't reading about an engineer — they're looking at a console the engineer built and left running.

The personality is precise and quietly confident: technical credibility is shown through the fidelity of small details (a correctly-drawn radial gauge, a timeline spine that fills as you scroll, a cursor-tracked glass glow) rather than through loud claims or decoration. Nothing here is playful or cartoonish, and nothing is generic corporate-stock-photo either — the confidence comes from restraint and precision, not volume.

**Key Characteristics:**
- Dark-first glass morphism: translucent, blurred panels floating over a near-black canvas, never opaque flat cards.
- A single narrow accent pairing (Signal Blue + Uptime Green) used sparingly against a desaturated dark neutral field.
- JetBrains Mono marks anything "live" or technical — timestamps, badges, chapter numbers, terminal chrome — as a deliberate second voice alongside Inter's prose.
- Motion is diagnostic, not decorative: progress rings draw, timeline spines fill, elements reveal on scroll — always reading as data becoming visible, never as flourish.

## Colors

The palette is dark-first (`devopsdark`, the default theme) with a light counterpart (`devopslight`) toggled by the navbar's sun/moon control. Both stay strictly two-accent: one interactive blue, one status green, against a neutral dark or light field.

### Primary
- **Signal Blue** (`#3DA9FC`): the single interactive color — links, active nav states, primary buttons, icon accents, focus glow. Also serves as `info`. Light-theme counterpart: a deeper `#2563EB` for contrast against a white field.

### Secondary
- **Uptime Green** (`#2EE6A8`): status and confirmation — the "current role" badge, the live-status pulse dot, success states, the gradient partner to Signal Blue in the name/role text-gradient. Also serves as `success`. Light-theme counterpart: `#059669`.

### Neutral
- **Void Black** (`#0A0E14`): the base canvas (`base-100`) — the near-black field everything floats on.
- **Panel Black** (`#10151C`): secondary surface tone (`base-200`), marginally lighter than Void Black for subtle layering.
- **Neutral Ink** (`#1B232D`): borders, dividers, and the `base-300`/`neutral` role — always used at low opacity (`base-content/10`) rather than as a solid fill.

### Semantic
- **Warning Amber** (`#F0B429`) and **Error Red** (`#F85149`) exist for form/system states but are not part of the everyday visual vocabulary — they don't appear in the current implementation outside the theme definition.

### Named Rules
**The Restrained Accent Rule.** Signal Blue at full strength is reserved for interactive or active elements (buttons, active nav tab, live links). Everywhere else — glows, dividers, ambient blobs — it drops to 5–15% opacity (`accent/10`, `accent/40`). The console reads as calm specifically because full-saturation color is rare.

## Typography

**Display/Body Font:** Inter (with `ui-sans-serif, system-ui` fallback)
**Label/Mono Font:** JetBrains Mono (with `ui-monospace` fallback)

**Character:** Inter carries every human-readable sentence — the resume prose, section copy, mission bullets — at a confident but unfussy weight range (400–800). JetBrains Mono is the system's second voice: it marks a piece of content as "live data" rather than "written copy" — timestamps, chapter numbers, skill-tag badges, the terminal prompt logo, the `zsh` window label.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.1): the hero name only.
- **Headline** (800, 1.875rem/30px, uppercase, 0.15em tracking): section titles (`Title` component), always centered with the accent-to-secondary underline beneath.
- **Title** (700, 1rem): card-level headings — experience role, skill category name.
- **Body** (400, 0.9375rem–1rem, line-height 1.6): paragraph copy, mission bullets, form labels; commonly rendered at reduced opacity (65–80%) rather than a lighter color token, to keep hue consistent while stepping down emphasis.
- **Label** (600, 0.6875rem, JetBrains Mono, 0.05em tracking, frequently uppercase): badges, timestamps, chapter numbers (`00`–`06`), the `~/t` prompt logo, form field labels.

### Named Rules
**The Mono Signal Rule.** Anything that represents live, technical, or numeric state — a date, a chapter index, a skill tag, a terminal label — renders in JetBrains Mono. Anything that represents written thought renders in Inter. Mixing the two within the same content type breaks the "console vs. prose" read that the whole system depends on.

## Layout

Sections share a consistent horizontal rhythm — `px-5` on mobile widening to `8%`/`12%` of viewport width at `md`/`lg` — and a vertical rhythm of `py-20` (mobile) to `py-24` (`md+`) between sections. Content generally centers within a `max-w-3xl`–`max-w-5xl` column depending on section density (narrow for the Experience timeline, wider for the Skills grid).

Two persistent chrome elements dock outside this column: the pill-shaped `Navbar` fixed at the top, and `ChapterNav` — a right-edge-docked rail of numbered tabs that mimics a binder's tab index, mostly retracted off-screen and sliding fully into view on hover/active per tab. Desktop favors this always-present peripheral navigation; mobile compresses it to numbered dots.

Grids (Skills) use `auto-rows-fr` with dense packing so wider categories (4+ items) can span two columns without leaving gaps — a deliberately data-dashboard tiling behavior rather than a fixed editorial grid.

## Elevation & Depth

The system is glass-layered, not shadow-driven: every elevated panel is a translucent, blurred surface (`backdrop-blur-lg`–`xl`, `base-100` at 30–70% opacity) over the particle-network canvas, edged with a hairline border (`base-content/10`) rather than a hard outline. Shadows exist but stay ambient and shallow at rest (`shadow-lg shadow-black/5`); they intensify only in response to interaction.

The signature depth cue is the `GlassCard` cursor-tracked glow: a radial gradient centered on the mouse position sweeps across the card surface on hover, alongside a 4px lift and a shift to an accent-tinted border and shadow. Depth communicates "this is responsive" more than "this is stacked."

### Shadow Vocabulary
- **Ambient rest** (`shadow-lg shadow-black/5`): default state for every glass panel — barely-there separation from the background.
- **Interactive hover** (`shadow-2xl shadow-accent/10`): cards and the active `ChapterNav` tab, signaling "this responded to you," always paired with the cursor-tracked glow and a border shift to `accent/50`.

### Named Rules
**The Glass Surface Rule.** Every elevated surface is translucent + blurred + hairline-bordered — never an opaque fill. An opaque card would read as "generic UI kit," not "console."

## Shapes

Two radii cover the whole system, applied by role rather than mixed freely: **fully pill** (`rounded-full`, `9999px`) for anything interactive or badge-like — buttons, nav pills, chapter tabs, skill tags, avatar-style icon buttons — and **2xl** (`1rem`/16px) for panel-level containers — glass cards, the terminal-chrome photo frame, modals. Nothing in the implementation uses a small/sharp radius; corners are either fully round or generously soft.

The terminal-window motif (traffic-light dots, mono label bar) is the system's one piece of literal skeuomorphism, used exactly once (the hero photo frame) rather than repeated — it establishes the "console" premise without becoming a recurring decorative tic.

### Named Rules
**The Pill Rule.** If it's clickable or a status marker, it's fully round. If it's a content container, it's 2xl. A button or badge with anything less than `rounded-full` is off-system.

## Components

### Buttons
- **Shape:** fully pill (`rounded-full`).
- **Primary** (`btn-accent`): Signal Blue fill, used for the single most important action per section (hero contact CTA, form submit).
- **Secondary** (`btn-secondary`): Uptime Green fill, used for a strong-but-not-primary action (CV download).
- **Outline / Ghost:** transparent with a hairline border or no border, used for secondary links (LinkedIn, GitHub) and icon-only controls (lang toggle, theme toggle) in the navbar/footer.
- **Icon + label pattern:** every button pairs a 16px Lucide icon with short label text; icon-only buttons (navbar, footer) stay square-in-a-circle via `btn-square` + `rounded-full`.

### Badges
- **Style:** `badge-outline`, transparent background, hairline border, JetBrains Mono at 11px — used for skill tags.
- **Status variant:** `badge-secondary` (solid Uptime Green) for the "current role" marker — the one badge that's filled rather than outlined, correctly drawing the eye to "this is active now."

### Cards (GlassCard — signature component)
- **Corner style:** 2xl (16px).
- **Background:** Void Black at ~50% opacity, `backdrop-blur-xl`.
- **Border:** 1px, `base-content/10` at rest, brightening to `accent/50` on hover.
- **Shadow strategy:** ambient at rest, accent-tinted and elevated on hover (see Elevation & Depth).
- **Signature behavior:** cursor-position CSS variables (`--mx`/`--my`) drive a radial-gradient glow that follows the pointer across the card on hover — this is the system's most distinctive interaction and should be preserved on any new card-based component rather than reinvented per-component.
- **Internal padding:** 20–24px (`p-5`/`p-6`) depending on content density.

### Inputs / Fields
- **Style:** `input-bordered`/`textarea-bordered` with a translucent Void Black background (`bg-base-100/50`), matching the glass language rather than a separate solid-fill form style.
- **Label:** uppercase, 60% opacity, JetBrains Mono-adjacent tracking (`text-xs uppercase tracking-wide`), positioned above the field.
- **Focus:** daisyUI default focus ring (not overridden) — no custom glow treatment observed on inputs, unlike cards.

### Navigation
- **Navbar:** a floating pill capsule, fixed top-center, transitioning from a faint (`base-100/30`) to a more opaque, shadowed (`base-100/70`) glass state on scroll. Contains: mono prompt-style logo with a blinking-cursor block, a live clock, lang/theme icon toggles, and a filled-accent contact button — the whole thing reads as a persistent status bar.
- **ChapterNav (signature component):** a right-edge-docked rail of numbered glass tabs (`00`–`06`), mostly translated off-screen and sliding into full view on hover or when active; the active tab fills solid Signal Blue with an accent shadow. Mobile collapses this to a column of small numbered dots. This "binder tab" retraction behavior is a defining, non-generic interaction — don't flatten it into a standard always-visible sidebar.

### Timeline (Experience — signature component)
A vertical spine (`base-content/10`) with a Signal-Blue-to-Uptime-Green gradient fill that draws top-to-bottom on scroll (`scaleY` reveal), paired with circular node markers at each entry and a pulsing dot on the current role. Reinforces the "live system" premise applied to a career history rather than server metrics.

### Radial Gauge (signature component)
An SVG ring that draws its arc on scroll-into-view (`RadialGauge`), used for language proficiency in Contact. Stroke in Signal Blue, track in `base-content/10`, centered mono percentage/level label. Reusable anywhere a single proportional metric needs a compact, dashboard-native visualization — this is the system's answer to "how do we show a number" that isn't a stat card.

### Network Background (signature component)
A canvas particle field (`NetworkBackground`) of drifting nodes connected by proximity-based lines, mouse-reactive, recoloring per active theme, respecting `prefers-reduced-motion`. Establishes the "infrastructure topology" premise ambiently behind hero content; not used as a repeated section divider, reserved for high-impact placement.

## Do's and Don'ts

### Do:
- **Do** render every elevated surface as glass: translucent Void Black, `backdrop-blur`, hairline `base-content/10` border (**The Glass Surface Rule**).
- **Do** keep interactive/status elements fully pill-shaped and containers at 2xl radius, never mixed (**The Pill Rule**).
- **Do** render technical/live content — timestamps, counters, badges, chapter numbers — in JetBrains Mono (**The Mono Signal Rule**).
- **Do** reserve full-strength Signal Blue for interactive/active state; use low-opacity tints for ambient glow and dividers (**The Restrained Accent Rule**).
- **Do** animate reveals with the site's signature ease (`[0.22, 1, 0.36, 1]`, ~24px rise, once per viewport) so motion feels like one consistent system, not per-component defaults.
- **Do** maintain the `devopslight` counterpart in parity whenever a new color or component ships — same role, deeper/lighter tone swap, never a hardcoded dark-only value.

### Don't:
- **Don't** use opaque, flat card backgrounds — the glass treatment is load-bearing identity, not a stylistic option per component.
- **Don't** introduce saturated colors outside Signal Blue / Uptime Green plus the semantic amber/red pair; the palette is intentionally two-accent.
- **Don't** repeat the terminal-chrome (traffic-light dots) motif elsewhere — it's a single deliberate accent, not a reusable component pattern.
- **Don't** give inputs the same cursor-glow treatment as cards; that interaction is `GlassCard`'s signature, not a generic hover effect to apply everywhere.
