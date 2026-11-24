---
name: T.Prasath — Portfolio
description: A freight-manifest portfolio where every project is a coded, stamped and shipped container
colors:
  container-orange: "#E8602F"
  harbor-navy: "#14213D"
  dock-concrete: "#ECEAE4"
  signal-yellow: "#F6C445"
  customs-green: "#2E7D4F"
  hull-steel: "#5A6878"
  manifest-paper: "#FFFFFF"
  quay-shadow: "#D8D4CB"
  ink-red: "#C2361C"
  night-hold: "#0E1626"
  night-panel: "#1C2A48"
typography:
  display:
    fontFamily: "Big Shoulders Stencil Display, Barlow Condensed, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Stencil Display, Barlow Condensed, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 900
    lineHeight: 0.86
  title:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
rounded:
  badge: "2px"
  box: "4px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "64px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.harbor-navy}"
    textColor: "{colors.dock-concrete}"
    typography: "{typography.title}"
    height: "56px"
    padding: "0 28px"
  button-cargo:
    backgroundColor: "{colors.container-orange}"
    textColor: "{colors.harbor-navy}"
    height: "40px"
    padding: "0 16px"
  button-cargo-hover:
    backgroundColor: "{colors.signal-yellow}"
  button-signal:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.harbor-navy}"
    height: "56px"
    padding: "0 28px"
  chip-cargo-label:
    backgroundColor: "{colors.harbor-navy}"
    textColor: "{colors.dock-concrete}"
    padding: "4px 8px"
  input-field:
    textColor: "{colors.harbor-navy}"
    padding: "8px 0"
  nav-bar:
    backgroundColor: "{colors.harbor-navy}"
    textColor: "{colors.dock-concrete}"
    height: "64px"
---

# Design System: T.Prasath — Portfolio

## Overview

**Creative North Star: "Manifeste de fret"**

The site is a shipping quay; every section is a freight document or port hardware (container wall, bill of lading, sea route, container yard, convoy on a gantry rail, perforated certificate, shipping label). The metaphor is literal: a surface with no plausible freight object behind it is not finished.

Industrial and confident: huge stencil type, thick form rules, flat saturated fields, sharp corners. Two themes, one world: **quai** (daylight concrete, default) and **nuit** (navy hold); orange and yellow stay constant.

**Key Characteristics:**
- Stencil display set enormous; condensed uppercase for everything that labels.
- Flat color fields of container paint, textured only by corrugation ribs.
- Thick 2px rules that turn content into forms, tables and manifests.
- Hazard stripes as section seams and progress rail.
- Motion as cargo handling: hoists, drops, swings, stamps slamming down.

## Colors

Container paint on concrete: loud orange, deep navy, signal yellow, customs green.

### Primary
- **Container Orange**: hero wall, brand tile, cargo CTA, route progress, mission bullets.

### Secondary
- **Harbor Navy**: the system's ink: quai text, nav, footer, Experience band, primary button. Nuit surfaces are its darker family (Night Hold, Night Panel).

### Tertiary
- **Signal Yellow**: active nav slab, focus ring, text selection, the Contact band, secondary CTA, hazard stripe partner.
- **Customs Green**: "available / current / delivered" only: status bars, current-job badge, delivered stamp.

### Neutral
- **Dock Concrete**: quai page ground; text on navy.
- **Manifest Paper**: raised documents (bill of lading, ID plate, label, project cards).
- **Quay Shadow**: base-300; recessed strips, Projects band tint, image wells.
- **Hull Steel**: container-yard fleet only. **Ink Red**: errors.

### Named Rules
**The Navy-On-Orange Rule.** Orange and yellow fields always carry Harbor Navy text; white text belongs only on Customs Green, Hull Steel and navy.

**The Fleet Rule.** Container-yard tiles rotate orange, navy, yellow, steel, green; each pairing keeps text contrast at or above 4.5:1. A new tile color must pass the same test.

## Typography

**Display Font:** Big Shoulders Stencil Display (fallback Barlow Condensed)
**Body Font:** Barlow
**Label Font:** Barlow Condensed
**Code Font:** JetBrains Mono

**Character:** Stencil for what you read across the dock, condensed caps for what is printed on the form, Barlow for reading up close. Numerals tabular everywhere.

### Hierarchy
- **Display**: section titles, uppercase; the hero name scales to min(25cqi, 13rem).
- **Headline** (1.9–5.5rem by context): company, container and project names, stamps.
- **Title** (1.25–2.25rem, uppercase): role lines, buttons, table designations.
- **Body** (1–1.25rem): prose capped near 68ch.
- **Label** (uppercase): field labels on documents (`field-label`).
- **Code** (11–14px): container codes, line numbers, tech tags.

### Named Rules
**The Three Voices Rule.** Stencil shouts, condensed labels, Barlow explains. Never set body prose in condensed or stencil, and never set a section title in Barlow.

## Layout

Full-bleed color bands stacked like a quay (orange hero, navy Experience, yellow Contact, navy footer, concrete between). Content sits in a 72rem (`max-w-6xl`) column; the hero widens to 1600px. Section padding is 96px, 128px from md; side gutters step 20 / 32 / 64px. Two-column splits use asymmetric fractions (5/7, 5/6), never 50/50. Skills is a dense 4-column grid where 40-foot containers (4+ items) span two.

## Elevation & Depth

Flat by default; depth means a load is lifted. Documents and containers cast long, soft, navy-tinted drops with negative spread. No glass, backdrop blur or glow.

### Shadow Vocabulary
- **Suspended load** (`0 28px 50px -18px rgba(20,33,61,0.75)`): ID plate, shipping label.
- **Laid document** (`0 30px 60px -30px rgba(20,33,61,0.45)`): bill of lading, certificate (`0 20px 36px -22px` at 0.6).
- **Stacked container** (`0 14px 24px -16px rgba(20,33,61,0.8)`): skill tiles.
- **CTA lift** (`0 10px 24px -10px rgba(20,33,61,0.7)`): primary button only.

### Named Rules
**The Crane Rule.** A shadow exists only under something that could be hoisted. Inline UI (nav, chips, inputs, outline buttons) stays flat.

## Shapes

Sharp corners: 2px on buttons and badges, 4px on boxes, 0 on most hand-built slabs. Rules are thick: 2px default, 3–4px on stamps. Textures: vertical corrugation ribs (24px / 13px), 45deg yellow-navy hazard stripes (14px), perforated certificate edges, diamond port markers. Circles appear only as hardware: rivets, lock rods, the crane hook, status pips.

## Components

### Buttons
- **Shape:** sharp (2px or square), fixed heights 40 / 44 / 56px, condensed bold uppercase, tracking 0.1em, icon left.
- **Primary:** Harbor Navy on orange or paper; hover lifts 2px on the crane ease.
- **Cargo:** orange with navy text in the nav; hover turns Signal Yellow.
- **Signal:** yellow with navy text (download CV).
- **Outline:** 2px navy border; hover fills navy, text takes the band color.

### Chips (cargo labels)
- **Style:** rectangular manifest labels, condensed 600 at 14px, colors inverted from their container (navy on orange/yellow, paper on navy/steel/green).

### Cards / Containers
- **Documents:** Manifest Paper, 2px navy border, internal 2px grid rules, field labels above values.
- **Containers:** fleet color, fine corrugation, darkened top and bottom rails (black/20), mono code at the top-left.

### Inputs / Fields
- **Style:** transparent, bottom border only (2px, navy at 40%), large 18px medium text, field label above.
- **Focus:** bottom border turns orange; global focus ring is 3px Signal Yellow, 3px offset.

### Navigation
- **Style:** fixed navy bar, corrugated orange brand tile, condensed caps links; the active link rides a sliding yellow slab. A bottom hazard rail carries an orange trolley tracking scroll progress. Mobile: clip-revealed panel, stencil links at 2.25rem.

### Stamp (signature)
Stencil caps, double border (border + inset ring), SVG turbulence filter for uneven ink, rotated -8 to -11deg, springs in from scale 1.8. Tones: green delivered, orange original, navy in progress. `aria-hidden`; the fact must also exist as text.

### Section Head
Stencil title revealed letter by letter (rising clip, blur resolving), then a 64px hazard bar and optional intro.

## Do's and Don'ts

### Do:
- **Do** give every new section a freight object (form, label, container, route, certificate) before giving it a layout.
- **Do** seam color bands with a hazard stripe (8–16px).
- **Do** use the crane ease `cubic-bezier(0.22, 1, 0.36, 1)` and springs for drops; honor reduced motion and the static-render switch.

### Don't:
- **Don't** reintroduce glass panels, backdrop blur, glow, gradient text or dark-console styling from the previous design.
- **Don't** round corners past 4px or use pill buttons.
- **Don't** use Customs Green for anything but cleared / current / available status.
- **Don't** fall back to a centered name-plus-photo hero or a uniform card grid.
