import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const BackgroundLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Slow, cinematic camera zoom across the full 64 seconds
  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.14], {
    extrapolateRight: "clamp",
  });
  const bgTranslateY = interpolate(frame, [0, durationInFrames], [0, -35], {
    extrapolateRight: "clamp",
  });

  // Ambient lighting drift
  const lightPulse = interpolate(
    Math.sin((frame / 30) * Math.PI * 0.4),
    [-1, 1],
    [0.88, 1.08]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#040608", overflow: "hidden" }}>
      {/* 1. Architectural Blueprint Photo with Cinematic Drift */}
      <Img
        src={staticFile("images/background.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${bgScale}) translateY(${bgTranslateY}px)`,
          filter: "contrast(1.1) brightness(0.68) saturate(1.1)",
        }}
      />

      {/* 2. Studio Dark Tint Overlay */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 7, 12, 0.82) 0%, rgba(6, 10, 18, 0.72) 40%, rgba(3, 5, 9, 0.90) 100%)",
        }}
      />

      {/* 3. Subtle CAD Isometric Coordinate Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
          pointerEvents: "none",
        }}
      />

      {/* 4. Ambient Cyan/Teal Volumetric Core Light */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          width: 850,
          height: 850,
          transform: `translate(-50%, -50%) scale(${lightPulse})`,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 5. Edge Vignette for Contrast */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.85) 95%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
