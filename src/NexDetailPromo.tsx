import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { BackgroundLayer } from "./components/BackgroundLayer";
import { KineticSubtitle } from "./components/KineticSubtitle";
import { Scene1_Hook } from "./scenes/Scene1_Hook";
import { Scene2_BrandReveal } from "./scenes/Scene2_BrandReveal";
import { Scene3_AutoDimension } from "./scenes/Scene3_AutoDimension";
import { Scene4_AutoBeam } from "./scenes/Scene4_AutoBeam";
import { Scene5_Foundation } from "./scenes/Scene5_Foundation";
import { Scene6_BOQ } from "./scenes/Scene6_BOQ";
import { Scene7_CTA } from "./scenes/Scene7_CTA";

export const NexDetailPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#040608" }}>
      {/* 1. Synchronized Voiceover Audio */}
      <Audio src={staticFile("audio/voiceover.wav")} />

      {/* 2. Global Ambient Architectural Background */}
      <BackgroundLayer />

      {/* 3. Seven Sequential Story Scenes */}
      {/* Scene 1: Problem vs Solution Hook (0.0s - 7.12s) */}
      <Sequence from={0} durationInFrames={214}>
        <Scene1_Hook />
      </Sequence>

      {/* Scene 2: NexDetail Brand Reveal (7.12s - 17.08s) */}
      <Sequence from={214} durationInFrames={298}>
        <Scene2_BrandReveal />
      </Sequence>

      {/* Scene 3: Auto Dimension Feature (17.08s - 25.42s) */}
      <Sequence from={512} durationInFrames={250}>
        <Scene3_AutoDimension />
      </Sequence>

      {/* Scene 4: One-Click Auto Beam (25.42s - 32.60s) */}
      <Sequence from={762} durationInFrames={216}>
        <Scene4_AutoBeam />
      </Sequence>

      {/* Scene 5: Foundation & Schedules (32.60s - 40.80s) */}
      <Sequence from={978} durationInFrames={246}>
        <Scene5_Foundation />
      </Sequence>

      {/* Scene 6: Auto Tagging & Instant BOQ (40.80s - 50.30s) */}
      <Sequence from={1224} durationInFrames={285}>
        <Scene6_BOQ />
      </Sequence>

      {/* Scene 7: Outro & Call to Action (50.30s - 64.12s) */}
      <Sequence from={1509} durationInFrames={415}>
        <Scene7_CTA />
      </Sequence>

      {/* 4. Global Kinetic Subtitles Overlay */}
      <KineticSubtitle />
    </AbsoluteFill>
  );
};
