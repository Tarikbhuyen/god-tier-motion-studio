import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SUBTITLE_CUES } from "../subtitles/subtitles";

export const KineticSubtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find the currently active cue (or cue within a grace window)
  const activeCue = SUBTITLE_CUES.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  if (!activeCue) {
    return null;
  }

  // Smooth entrance & exit spring for each cue
  const cueAge = frame - activeCue.startFrame;
  const cueRemaining = activeCue.endFrame - frame;

  const enterSpring = spring({
    frame: cueAge,
    fps,
    config: { damping: 16, mass: 0.8, stiffness: 120 },
  });

  const exitOpacity = interpolate(cueRemaining, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(enterSpring, [0, 1], [16, 0]);
  const opacity = Math.min(enterSpring, exitOpacity);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180, // Safe zone: above social action buttons
        left: 48,
        right: 48,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        transform: `translateY(${translateY}px)`,
        opacity,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          padding: "16px 28px",
          borderRadius: 20,
          background: "rgba(10, 14, 22, 0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 16px 36px -10px rgba(0, 0, 0, 0.7)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'Hind Siliguri', sans-serif",
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.45,
            color: "#ffffff",
            letterSpacing: "0.01em",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          {activeCue.text}
        </p>
      </div>
    </div>
  );
};
