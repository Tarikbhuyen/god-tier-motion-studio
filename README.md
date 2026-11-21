# God-Tier Motion Studio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Remotion](https://img.shields.io/badge/Remotion-v4.0+-blueviolet.svg)](https://www.remotion.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![60 FPS](https://img.shields.io/badge/Render-60FPS_4K-brightgreen.svg)]()

> **The unified engineering & art-direction standard for building elite, broadcast-grade motion graphics and programmatic videos in code.**

**God-Tier Motion Studio** bridges deterministic React timeline rendering (**Remotion**) with WebGL 3D shaders (**HorizonX**), cinematic visual components (**Aceternity UI**), organic physics easing tokens (**transitions.dev**), tactile micro-interactions (**Bencho**), precision typography (**ObsidianUI**), and curated vector systems (**Liniqo** & **Icon Monks**).

---

## ⚡ The Core Philosophy

> **No generic "AI slop" motion.** Every millisecond of video must have intentional weight, anticipation, settle physics, optical balance, and frame-deterministic timing. Video is a mathematical function of frame ticks: 
> 
> $$f(\text{frame}) \longrightarrow \text{Visual State}$$

Standard CSS `@keyframes`, `transition: all`, and `setTimeout` are non-deterministic, jitter-prone, and drift during headless encoding. **God-Tier Motion Studio** enforces deterministic frame mathematics and real-world physical inertia.

---

## 🏛️ The 6-Layer Motion Architecture

Every scene is composited across six synchronized layers inside an `AbsoluteFill` stack:

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

1. **Layer 1: Ambient Base (`#060709` to `#0d1117`)** — Deep obsidian canvas with radial color diffusion and ultra-fine geometric coordinate grids (never flat `#000` or washed-out gray).
2. **Layer 2: WebGL 3D Shaders (`HorizonX`)** — Volumetric light meshes, particle vortexes, and Three.js scenes running in lockstep with the frame clock.
3. **Layer 3: Atmospheric Lighting (`Aceternity UI`)** — Dynamic spotlight cones, background beams, and traveling specular light sheens.
4. **Layer 4: 3D Physical Dynamics (`Remotion` + `Bencho` + `transitions.dev`)** — Real-world inertia, overshoot settling, 3D perspective tilts (`perspective: 1200px`), and magnetic micro-feedback.
5. **Layer 5: Kinetic Typography & Tabular Numerics (`ObsidianUI` + `@number-flow/react`)** — Optical kerning, high-contrast title cards, zero-jitter `tabular-nums` for rapid financial/KPI counters, and synchronized caption highlights (`remotion-captions`).
6. **Layer 6: Audio & SFX Design (`add-sfx` + `remotion-multimedia`)** — Sub-bass drops on scene entrances, air whooshes on 3D flips, and precision SFX hits on visual transitions.

---

## 🛠️ Tool Orchestration Matrix

| Target Production | Primary Visual Stack | Motion Physics Stack | Asset & Typography Stack |
| :--- | :--- | :--- | :--- |
| **3D Tech Product Reel** | `Remotion` + `HorizonX` (WebGL) + `Aceternity UI` (beams/spotlight) | `transitions.dev` (elastic overshoot) + `spring` | `Icon Monks` (bold vector icons) + `better-typography` |
| **SaaS / AI App Walkthrough** | `Remotion` + `BoardUI` (agent workspace) + `stitch-build` | `Bencho` (tactile toggles/magnetic) + `transitions-polish` | `@number-flow/react` + `Liniqo` (isometric art) |
| **Viral Social Reel (9:16)** | `remotion-captions` (kinetic word highlights) + `Aceternity UI` | `framer-motion` (staggered bounce) + `spring` | `remotion-multimedia` (SFX/audio sync) + `better-colors` |
| **Stock Video Loop (Adobe Stock)** | `HorizonX` (ambient 3D shader loop) + `remotion-render` (ProRes) | Pure periodic functions ($f(t) = \sin(t)$ for seamless looping) | `ObsidianUI` (zero noise, pristine optical contrast) |

---

## 📦 Installation & Usage as an Agent Skill

Install this skill into your AI agent environment (Antigravity, Claude Code, Cursor, Codex):

### 1. Antigravity / Gemini CLI
```bash
mkdir -p ~/.gemini/config/skills/god-tier-motion-studio
cp SKILL.md ~/.gemini/config/skills/god-tier-motion-studio/
```

### 2. Claude Code
```bash
mkdir -p ~/.claude/skills/god-tier-motion-studio
cp SKILL.md ~/.claude/skills/god-tier-motion-studio/
```

### 3. Cross-Runtime Agent Alias
```bash
mkdir -p ~/.agents/skills/god-tier-motion-studio
cp SKILL.md ~/.agents/skills/god-tier-motion-studio/
```

---

## 🚀 Production CLI Render Commands

Export with exact bitrates, color spaces, and profiles to ensure pristine 4K video:

### 1. High-Fidelity Social / Web (H.264 / CRF 16)
```bash
npx remotion render src/index.ts GodTierMotionScene out/social-reel.mp4 \
  --gl=angle \
  --pixel-format=yuv420p \
  --crf=16 \
  --audio-bitrate=320k
```

### 2. Broadcast Master & Adobe Stock / Shutterstock (Apple ProRes 422 HQ)
```bash
npx remotion render src/index.ts GodTierMotionScene out/master-stock.mov \
  --codec=prores \
  --prores-profile=hq \
  --gl=angle
```

### 3. Transparent Alpha Channel (WebM for Website Overlays)
```bash
npx remotion render src/index.ts GodTierMotionScene out/overlay.webm \
  --codec=vp9 \
  --pixel-format=yuva420p
```

---

## 🚫 The 7 Deadly Sins of Motion Graphics

| Violation | Why It Fails | God-Tier Fix |
| :--- | :--- | :--- |
| **Linear Interpolation** | Motion feels robotic, lifeless, and amateur. | Always apply spring damping (`spring`) or asymmetric cubic beziers (`Easing.bezier`). |
| **Numeric Glyph Jitter** | Changing digits cause width jumps, making text wobble. | Use `tabular-nums` / `fontVariantNumeric: "tabular-nums"` on every counter. |
| **CSS `transition` in Video** | Headless renders skip frames or render blank states. | Eliminate CSS transitions; drive every frame with `useCurrentFrame()`. |
| **Flat `#000000` Canvas** | Crushes dynamic range and creates harsh contrasts. | Use deep obsidian bases (`#060709`) with radial ambient lights and coordinate grids. |
| **Disembodied Cuts** | Transitions happen without audio motivation. | Synchronize a whoosh, riser, or impact hit (`add-sfx`) on the exact cut frame. |
| **Ignoring Platform Safe Zones** | Social UI buttons (like, share, captions) obscure visual content. | In 9:16 vertical reels, pad key elements 240px from the bottom and 180px from top. |
| **Color Banding in Gradients** | 8-bit gradients show stepped stripes in dark areas. | Add a subtle 1–2% opacity noise/grain overlay or multi-stop exponential gradients. |

---

## 📄 License

MIT © [Tarik Bhuyen](https://github.com/Tarikbhuyen)
