---
name: god-tier-motion-studio
description: Use when architecting, authoring, polishing, or rendering production-grade motion graphics, programmatic video, kinetic typography, 3D visual effects, social media video reels (TikTok, Instagram Reels, YouTube Shorts), commercial product teasers, or stock footage (Adobe Stock, Shutterstock) using Remotion, WebGL shaders, and physics motion tokens.
---

# God-Tier Motion Studio

## Overview

**God-Tier Motion Studio** is the unified engineering and art-direction standard for building elite, broadcast-grade motion graphics and programmatic videos in code.

It bridges deterministic, frame-exact React timeline rendering (**Remotion**) with WebGL 3D shaders (**HorizonX**), cinematic visual components (**Aceternity UI**), organic physics-driven easing tokens (**transitions.dev**), tactile micro-interactions (**Bencho**), precision typography (**ObsidianUI**), and curated vector assets (**Liniqo** & **Icon Monks**).

### Core Principle
> **Never build generic "AI slop" motion.** Every millisecond of video must have intentional weight, anticipation, settle physics, optical balance, and frame-deterministic timing. Video is a mathematical function of frame ticks: $f(\text{frame}) \to \text{Visual State}$.

---

## When to Use

Use this skill whenever:
- Creating or editing Remotion compositions, animations, or video templates.
- Building high-converting social media video reels (9:16 vertical for TikTok, Reels, Shorts).
- Producing tech product demos, 3D device tilt showcases, or SaaS walkthroughs.
- Designing stock-grade motion graphics or ambient background loops for Adobe Stock / Shutterstock.
- Implementing kinetic typography, automated speech captions, or dynamic numeric metric counters.
- Audio-syncing sound effects (SFX whooshes, impact hits, risers) to visual cut transitions.

Do NOT use for:
- Static web page styling or standard CSS layout tasks that do not involve video or motion graphics.
- Browser-based DOM animations intended only for lightweight interactive web state toggles.

---

## The 6-Layer Visual & Motion Architecture

Every god-tier motion graphic is constructed across six synchronized layers, composited inside an `AbsoluteFill` stack:

```
┌────────────────────────────────────────────────────────┐
│ Layer 6: Audio & SFX Track (Whooshes, Risers, Hits)   │
├────────────────────────────────────────────────────────┤
│ Layer 5: Kinetic Typography, Badges & Optical HUD      │
├────────────────────────────────────────────────────────┤
│ Layer 4: Primary Subject (3D Device, UI Card, Vector)  │
├────────────────────────────────────────────────────────┤
│ Layer 3: Atmospheric VFX (Particles, Beams, Spotlight) │
├────────────────────────────────────────────────────────┤
│ Layer 2: WebGL Shader / Three.js 3D Volumetric Canvas  │
├────────────────────────────────────────────────────────┤
│ Layer 1: Ambient Backdrop, Studio Gradient & Vignette  │
└────────────────────────────────────────────────────────┘
```

1. **Layer 1: Ambient Base (`#050608` to `#0d1117`)**:
   - Deep studio background with radial gradient diffusion. Never pure `#000000` or flat gray.
   - Ultra-subtle geometric coordinate grid (1–2% opacity) or subtle film grain texture.
2. **Layer 2: WebGL / Volumetric Mesh (`HorizonX`)**:
   - Ambient WebGL fragment shaders, reactive fluid meshes, or Three.js particle vortexes.
   - Frame-driven uniform updates via `useCurrentFrame()`.
3. **Layer 3: Atmospheric Lighting (`Aceternity UI`)**:
   - Radial spotlight cones, glowing light beams, soft ambient flares, and sparkles.
   - Dynamic specular sweeps that pan across the scene during transitions.
4. **Layer 4: Primary Subject Simulation (`Remotion` + `Bencho` + `Liniqo`)**:
   - 3D perspective viewport (`perspective: 1200px`, `transformStyle: 'preserve-3d'`).
   - Physical objects (credit cards, phone frames, dashboards, isometric diagrams) with pitch, yaw, and roll.
   - Real-world specular light glare tracking: sheen gradients inversely mapped to the pitch/yaw angle.
5. **Layer 5: Typography, HUD & Data Tickers (`ObsidianUI` + `@number-flow/react`)**:
   - High-contrast, optically kerned headings using tabular numerals (`tabular-nums`) to prevent layout shifts.
   - Synchronized metric badges, delta pills, and animated captions (`remotion-captions`).
6. **Layer 6: Sound Design & Impact SFX (`add-sfx` + `remotion-multimedia`)**:
   - Sub-bass impact drops on scene entrances.
   - Subtle air whooshes on camera swings and 3D card flips.
   - High-frequency metallic clicks/ticks during data counter increments.

---

## Tool Orchestration Matrix

Select and combine installed capabilities based on target production:

| Target Production | Primary Visual Stack | Motion Physics Stack | Asset & Typography Stack |
| :--- | :--- | :--- | :--- |
| **3D Tech Product Reel** | `remotion-create` + `HorizonX` (WebGL) + `Aceternity UI` (beams/spotlight) | `transitions.dev` (elastic overshoot) + `spring` | `Icon Monks` (bold vector icons) + `better-typography` |
| **SaaS / AI App Walkthrough** | `remotion-markup` + `BoardUI` (agent workspace) + `stitch-build` | `Bencho` (tactile toggles/magnetic) + `transitions-polish` | `@number-flow/react` + `Liniqo` (isometric art) |
| **Viral Social Reel (9:16)** | `remotion-captions` (kinetic word highlights) + `Aceternity UI` | `framer-motion` (staggered bounce) + `spring` | `remotion-multimedia` (SFX/audio sync) + `better-colors` |
| **Stock Video Loop (Adobe Stock)** | `HorizonX` (ambient 3D shader loop) + `remotion-render` (ProRes) | Pure periodic functions ($f(t) = \sin(t)$ for seamless looping) | `ObsidianUI` (zero noise, pristine optical contrast) |

---

## Platform & Delivery Specifications

| Platform / Format | Aspect Ratio | Dimensions | FPS | Preferred Codec / Container | Key Standards |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **TikTok / Reels / Shorts** | `9:16` | `1080 x 1920` | `60` | H.264 MP4 (`--crf=16`) | Keep key content within safe zone (top 15% and bottom 20% clear of UI buttons). |
| **YouTube / Commercial** | `16:9` | `1920 x 1080` / `3840 x 2160` | `60` | H.264 or ProRes 422 HQ | Full 4K mastery, optical alignment, 32-bit float audio mixing. |
| **Square Feed / Ad** | `1:1` | `1080 x 1080` | `60` | H.264 MP4 | High visual density, centered focal hierarchy, immediate hook in frames 0–45. |
| **Stock Video (Adobe/Shutter)**| `16:9` or `9:16` | `3840 x 2160` (4K UHD) | `60` / `30` | ProRes 422 HQ MOV or MP4 (≥ 50 Mbps) | Perfect frame 0 to frame $N$ seamless loop, no copyrighted brand logos, no color banding. |

---

## Motion Physics & Choreography Standards

### 1. The Physics Law (No CSS `@keyframes` in Video)
Standard browser CSS animations (`@keyframes`, CSS `transition`, `setTimeout`) are non-deterministic, jitter-prone, and drift during video encoding.
* **Rule**: ALL animations must be computed via `useCurrentFrame()`, `interpolate()`, and `spring()` from Remotion.

### 2. Physical Curves from `transitions.dev`
Incorporate natural mass and damping parameters instead of standard linear or raw ease-in-out:
* **Entrances (Snap with Settle)**:
  ```ts
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 100 }, // Snappy snap without oscillating jitter
  });
  ```
* **Overshoot & Elastic Return (`transitions-polish`)**:
  ```ts
  // Anticipation curve: subtle recoil backward before launching forward
  const launchProgress = interpolate(frame, [10, 40], [0, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1), // Overshoot spring bezier
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  ```

### 3. Anti-Jitter Tabular Number Transitions
When rendering numeric values ticking upward, never allow layout reflow:
```tsx
<span
  style={{
    fontVariantNumeric: "tabular-nums",
    fontFeatureSettings: '"tnum"',
    letterSpacing: "-0.02em",
  }}
>
  {formattedValue}
</span>
```

---

## Production Blueprint: 5-Second 60fps 4K Motion Scene

Here is the reference architecture combining Remotion, 3D dynamics, dynamic light sheen, and numeric ticker:

```tsx
import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Composition,
} from "remotion";

export interface MasterSceneProps {
  headlineText: string;
  metricValue: number;
  currencyPrefix: string;
  badgeLabel: string;
}

export const GodTierMotionScene: React.FC<MasterSceneProps> = ({
  headlineText = "FINTECH LIQUIDITY PROTOCOL",
  metricValue = 248920,
  currencyPrefix = "$",
  badgeLabel = "+28.4% APY",
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // --- LAYER 1 & 2: DYNAMIC ATMOSPHERE & SPOTLIGHT ---
  const spotX = interpolate(frame, [0, 300], [45, 55], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
  const spotGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.2),
    [-1, 1],
    [0.94, 1.06]
  );

  // --- LAYER 3 & 4: 3D CARD KINEMATICS ---
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, mass: 1.0, stiffness: 95 },
  });

  const cardTranslateY = interpolate(enterSpring, [0, 1], [220, 0]);
  const cardScale = interpolate(enterSpring, [0, 1], [0.82, 1]);

  // Settling tilt angles with continuous subtle hover
  const rotateX = interpolate(frame, [0, 60], [22, 5], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: "clamp",
  }) + Math.sin((frame / fps) * 2.0) * 1.5;

  const rotateY = interpolate(frame, [0, 60], [-26, -10], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: "clamp",
  }) + Math.cos((frame / fps) * 1.6) * 2.0;

  // Specular light sheen tracking inversely across tilt angle (Frames 45 to 135)
  const sheenX = interpolate(frame, [45, 135], [-120, 240], {
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- LAYER 5: METRIC ACCUMULATOR ---
  const counterValue = interpolate(frame, [30, 180], [0, metricValue], {
    easing: Easing.bezier(0.12, 0.82, 0.18, 1), // Cubic ease-out
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const formattedMetric = useMemo(() => {
    return Math.floor(counterValue).toLocaleString("en-US");
  }, [counterValue]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060709",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1200,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. High-Tech Isometric Grid Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
          opacity: 0.5,
        }}
      />

      {/* 2. Volumetric Core Spotlight (Aceternity UI Style) */}
      <div
        style={{
          position: "absolute",
          left: `${spotX}%`,
          top: "40%",
          width: 900,
          height: 900,
          transform: `translate(-50%, -50%) scale(${spotGlow})`,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.10) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Primary 3D Physical Stage */}
      <div
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
          transform: `
            translateY(${cardTranslateY}px)
            scale(${cardScale})
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Physical Titanium Glass Card */}
        <div
          style={{
            width: 620,
            height: 380,
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(24, 27, 36, 0.90) 0%, rgba(12, 14, 20, 0.98) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: `
              0 32px 64px -16px rgba(0, 0, 0, 0.8),
              0 16px 32px -12px rgba(14, 165, 233, 0.3),
              inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)
            `,
            position: "relative",
            overflow: "hidden",
            padding: "36px 42px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Specular Traveling Sheen */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(
                115deg,
                transparent 0%,
                rgba(56, 189, 248, 0.18) 48%,
                rgba(255, 255, 255, 0.35) 50%,
                rgba(56, 189, 248, 0.18) 52%,
                transparent 100%
              )`,
              transform: `translateX(${sheenX}%)`,
              pointerEvents: "none",
            }}
          />

          {/* Top Card Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#38bdf8" }}>
              {headlineText}
            </span>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                color: "#34d399",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {badgeLabel}
            </div>
          </div>

          {/* Center Metric Display */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase" }}>
              Total Verified Assets
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                color: "#ffffff",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.04em",
                display: "flex",
                alignItems: "baseline",
                gap: 4,
              }}
            >
              <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 44 }}>{currencyPrefix}</span>
              <span>{formattedMetric}</span>
            </div>
          </div>

          {/* Bottom Card Identity Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.45)", fontSize: 12, fontWeight: 500 }}>
            <span>AUTONOMOUS LEDGER v4</span>
            <span style={{ fontFamily: "monospace" }}>0x8F41...1FF0</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

---

## Production CLI Commands (Stock & Broadcast Exports)

Use these exact CLI arguments to ensure high-fidelity encoding without color banding or audio drift:

### 1. High-Quality Web & Social Video (H.264 / CRF 16)
```bash
npx remotion render src/index.ts GodTierMotionScene out/fintech-intro.mp4 \
  --gl=angle \
  --pixel-format=yuv420p \
  --crf=16 \
  --audio-bitrate=320k
```

### 2. Broadcast & Adobe Stock Master (Apple ProRes 422 HQ)
```bash
npx remotion render src/index.ts GodTierMotionScene out/master-stock.mov \
  --codec=prores \
  --prores-profile=hq \
  --gl=angle
```

### 3. Transparent Alpha Channel Loop (WebM for Chrome/Edge overlays)
```bash
npx remotion render src/index.ts GodTierMotionScene out/overlay.webm \
  --codec=vp9 \
  --pixel-format=yuva420p
```

---

## The 7 Deadly Sins of Motion Graphics

| Violation | Why It Fails | God-Tier Fix |
| :--- | :--- | :--- |
| **Linear Interpolation** | Motion feels robotic, lifeless, and amateur. | Always apply spring damping (`spring`) or asymmetric cubic beziers (`Easing.bezier`). |
| **Numeric Glyph Jitter** | Changing digits cause width jumps, making text wobble. | Use `tabular-nums` / `fontVariantNumeric: "tabular-nums"` on every counter. |
| **CSS `transition` in Video** | Headless renders skip frames or render blank states. | Eliminate CSS transitions; drive every frame with `useCurrentFrame()`. |
| **Flat `#000000` Canvas** | Crushes dynamic range and creates harsh contrasts. | Use deep obsidian bases (`#060709`) with radial ambient lights and coordinate grids. |
| **Disembodied Cuts** | Transitions happen without audio motivation. | Synchronize a whoosh, riser, or impact hit (`add-sfx`) on the exact cut frame. |
| **Ignoring Platform Safe Zones** | Social UI buttons (like, share, captions) obscure visual content. | In 9:16 vertical reels, pad key elements 240px from the bottom and 180px from top. |
| **Color Banding in Gradients** | 8-bit gradients show stepped stripes in dark areas. | Add a subtle 1–2% opacity noise/grain overlay or multi-stop exponential gradients. |
