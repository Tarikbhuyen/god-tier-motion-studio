# NexDetail Software Promotional Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a broadcast-grade 64-second 9:16 vertical promotional video for **NexDetail** (AutoCAD RCC Detailing plugin) using Remotion, featuring frosted glassmorphism cards, kinetic Bengali subtitles, 3D AutoCAD branding, and dynamic engineering CAD visuals.

**Architecture:** Layered Remotion composition driven by the 64.12s voiceover. Master audio track synchronized with 7 modular scenes timed to SRT cue points. Custom Bengali typography (`Hind Siliguri`) and Swiss typography (`FK Grotesk`) loaded locally and via web fonts. Reusable glassmorphic cards with frosted backdrop blur, specular lighting, and physics springs.

**Tech Stack:** Remotion 4.x, React 19 / React 18, TypeScript, Google Fonts (`Hind Siliguri`), FK Grotesk, SVG engineering graphics.

**Spec:** Promotional video for NexDetail, 9:16 vertical ratio (1080x1920), 30 fps (1,924 frames total duration), using user-provided voiceover WAV, SRT transcript, architectural background image, and AutoCAD logo.

## Global Constraints

- Frame Rate: 30 fps strictly (`fps: 30`).
- Total Duration: 1,924 frames (64.12s * 30 fps).
- Dimensions: 1080 x 1920 (9:16 vertical aspect ratio).
- Safe Zones: Key text and controls must remain within the vertical safe zone (top 160px and bottom 220px clear of social UI overlays).
- Typography: Hind Siliguri for Bengali text; FK Grotesk for English branding and technical badges.
- Assets: Audio and background images must be staged in `public/` and loaded via Remotion's `staticFile()`.

## Review Focus

- Bengali font rendering: Verify Bengali ligature shaping renders crisply without broken glyphs.
- Audio synchronization: Subtitle and scene cuts must match the spoken words within ±2 frames.
- Tabular numerals: Any live metric or BOQ counter must not trigger layout jitter.
- Glassmorphic contrast: Text inside frosted glass cards must maintain high contrast over the busy architectural background.
- Frame 0 to 1923 stability: No undefined variables, missing static files, or runtime re-renders.

---

### Task 1: Environment Setup & Asset Staging

**Files:**
- Create: `e:\remotion-dev\package.json`
- Create: `e:\remotion-dev\tsconfig.json`
- Create: `e:\remotion-dev\remotion.config.ts`
- Create: `e:\remotion-dev\public\audio\voiceover.wav`
- Create: `e:\remotion-dev\public\images\background.png`
- Create: `e:\remotion-dev\public\images\autocad.svg`
- Create: `e:\remotion-dev\public\fonts\` (FK Grotesk font files)

**Steps:**
- [ ] Initialize `package.json` with `remotion`, `@remotion/cli`, `react`, `react-dom`, `@types/react`, `typescript`.
- [ ] Run `npm install` to install dependencies.
- [ ] Stage `voiceover.wav`, `background.png`, `autocad.svg`, and `fk-grotesk` font files into `public/`.
- [ ] Verify Remotion CLI executes `npx remotion --version`.

---

### Task 2: Subtitle Data & Typography Foundation

**Files:**
- Create: `e:\remotion-dev\src\subtitles\subtitles.ts`
- Create: `e:\remotion-dev\src\components\KineticSubtitle.tsx`
- Create: `e:\remotion-dev\src\styles\fonts.css`

**Steps:**
- [ ] Parse the 14 SRT cues into structured frame-indexed intervals for 30 fps.
- [ ] Define `@font-face` rules for FK Grotesk and `@import` for Google Font Hind Siliguri.
- [ ] Implement `KineticSubtitle` component displaying Bengali text with active cue highlights and frosted pill backdrop.
- [ ] Test: Verify subtitle timestamps map accurately across frames 0 to 1923.

---

### Task 3: Glassmorphism Card System & Visual Primitives

**Files:**
- Create: `e:\remotion-dev\src\components\GlassCard.tsx`
- Create: `e:\remotion-dev\src\components\BackgroundLayer.tsx`
- Create: `e:\remotion-dev\src\components\CADVisuals.tsx`

**Steps:**
- [ ] Build `GlassCard` with `backdrop-filter: blur(28px)`, 1px border gradient, specular traveling sheen, and spring entry physics.
- [ ] Build `BackgroundLayer` with smooth camera drift, subtle vignette, and dark tint over `background.png`.
- [ ] Build vector CAD graphic elements (grid coordinate lines, dimension callouts, column cross-sections, beam rebars).
- [ ] Test: Verify visual rendering of glass cards against the background at 1080x1920.

---

### Task 4: Scene Components (Scenes 1 through 7)

**Files:**
- Create: `e:\remotion-dev\src\scenes\Scene1_Hook.tsx` (0s - 7.12s / Frames 0 - 213)
- Create: `e:\remotion-dev\src\scenes\Scene2_BrandReveal.tsx` (7.12s - 16.24s / Frames 214 - 487)
- Create: `e:\remotion-dev\src\scenes\Scene3_AutoDimension.tsx` (17.08s - 24.60s / Frames 512 - 738)
- Create: `e:\remotion-dev\src\scenes\Scene4_AutoBeam.tsx` (25.42s - 31.80s / Frames 762 - 954)
- Create: `e:\remotion-dev\src\scenes\Scene5_Foundation.tsx` (32.60s - 40.04s / Frames 978 - 1201)
- Create: `e:\remotion-dev\src\scenes\Scene6_BOQ.tsx` (40.80s - 49.40s / Frames 1224 - 1482)
- Create: `e:\remotion-dev\src\scenes\Scene7_CTA.tsx` (50.30s - 64.12s / Frames 1509 - 1924)

**Steps:**
- [ ] Implement Scene 1: Problem hook (hours of CAD drawing) vs 1-click solution.
- [ ] Implement Scene 2: NexDetail brand reveal with 3D AutoCAD logo and glowing badge.
- [ ] Implement Scene 3: Auto Dimension feature with snapping dimension lines.
- [ ] Implement Scene 4: One-Click Auto Beam with cross-section transformation.
- [ ] Implement Scene 5: Footing, pile & pile cap schedules table with checkmarks.
- [ ] Implement Scene 6: Professional Auto Tagging & instant BOQ calculation counter.
- [ ] Implement Scene 7: CTA outro with pulsing inbox demo button and branding lockup.
- [ ] Test: Verify each scene component mounts cleanly and stays within its allocated frame range.

---

### Task 5: Master Assembly & Video Verification

**Files:**
- Create: `e:\remotion-dev\src\Root.tsx`
- Create: `e:\remotion-dev\src\index.ts`
- Create: `e:\remotion-dev\src\NexDetailPromo.tsx`

**Steps:**
- [ ] Assemble all scenes with `<Sequence>` intervals and wire `<Audio src={staticFile("audio/voiceover.wav")} />`.
- [ ] Register `<Composition id="NexDetailPromo" width={1080} height={1920} fps={30} durationInFrames={1924} />`.
- [ ] Run `npx remotion still NexDetailPromo out/test-still.png --frame=300` to verify headless rendering.
- [ ] Launch `npx remotion studio` for user preview.
