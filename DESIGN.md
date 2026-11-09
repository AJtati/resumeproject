---
name: Ajith Surya Thati Portfolio
description: A light, expressive portfolio for exploring Ajith's platform engineering work.
colors:
  primary: "#0071e3"
  ink: "#1d1d1f"
  muted: "#6e6e73"
  paper: "#fbfbfd"
  panel: "#f5f5f7"
  sky: "#eaf3ff"
  peach: "#fff0e8"
  line: "#d2d2d7"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, sans-serif"
    fontSize: "clamp(3.8rem, 6.5vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.055em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
rounded:
  sm: "8px"
  md: "14px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 21px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 13px"
    height: "38px"
---

# Design System: Ajith Surya Thati Portfolio

## Overview

**Creative direction: “Clear, Human, Modern”**

Ajith's portfolio brings a welcoming, human presence to a detailed engineering resume. The page pairs generous white space and strong typography with a lively portrait and a small, purposeful blue accent. Navigation and labels use straightforward portfolio language.

The interface borrows the clarity and product storytelling of Apple.com and the reference's interest in motion, while retaining its own composition, content, and identity.

**Key Characteristics:**
- Personal, calm, bright.
- Crisp system typography and spacious page rhythm.
- An animated transparent portrait that reacts to cursor movement and scroll.
- A soft cursor-following light field that adds depth to the hero without obscuring the copy.
- Four discoverable resume sections, with contact one action away.

## Colors

Near-white and deep ink form the reading surface. Blue marks actions and active navigation; pale sky and peach provide a soft field behind the character.

### Don't:
- Don't spread the accent blue across large text surfaces.
- Don't add dark control panels or decorative technical instrumentation.
- Don't lower contrast on resume text.

## Typography

Use the native system sans-serif stack for familiar, crisp reading. Set display text in a heavy weight with tight, size-specific tracking. Keep body text relaxed and labels at readable sizes. Monospace is reserved for actual code and measured values.

## Layout

On desktop, the opening uses a roomy two-column portrait-and-introduction composition. On mobile, the portrait moves below the introduction and stays clear of controls. A restrained section navigation follows the opening; the work, career, toolkit, and profile views remain open and scannable. The translucent sticky header keeps navigation and contact available during long pages.

## Elevation & Depth

Prefer flat surfaces and thin separators. The header uses restrained translucency over scrolling content. Reserve soft shadows for objects that need separation; no colored glow or stacked glass layers.

## Shapes

Use round pills for compact actions and 14px corners for small floating labels. The portrait sits against organic, softly colored forms; controls retain clear hit areas and visible focus rings.

## Components

- Primary actions use a blue pill, white label, and immediate pressed feedback.
- Secondary actions use a quiet outline or pale blue fill.
- Navigation uses plain text labels and a small blue active marker.
- Project and career indexes use open rows with clear selected states.
- Sound starts on and can be turned off. Audio cues play only after a user gesture.

## Do's and Don'ts

- Do keep the complete factual resume content available without extra interaction.
- Do let the portrait gently lean toward the pointer and move with scroll.
- Do limit cursor ambience to fine-pointer devices and honor reduced-motion preferences.
- Do honor reduced-motion preferences and keyboard focus.
- Don't copy a reference site's layout, copy, or animation sequence.
- Don't autoplay or loop sound.
