import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";
import { AutoCADLogoBadge } from "../components/CADVisuals";

export const Scene2_BrandReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for logo
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 15, mass: 1.0, stiffness: 100 },
  });

  // Staggered pills entrance
  const pill1 = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });
  const pill2 = spring({
    frame: frame - 65,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });
  const pill3 = spring({
    frame: frame - 90,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
      }}
    >
      <GlassCard width={960} glowColor="rgba(14, 165, 233, 0.35)">
        <div style={{ textAlign: "center" }}>
          {/* AutoCAD Official Partner Badge */}
          <div style={{ marginBottom: 28 }}>
            <AutoCADLogoBadge size={54} />
          </div>

          {/* Master Brand Heading */}
          <div
            style={{
              transform: `scale(${interpolate(logoSpring, [0, 1], [0.85, 1])})`,
              opacity: interpolate(logoSpring, [0, 1], [0, 1]),
            }}
          >
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#38bdf8",
              }}
            >
              INTRODUCING
            </span>
            <h1
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 84,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: "8px 0 16px 0",
                background: "linear-gradient(135deg, #ffffff 40%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 6px 24px rgba(14, 165, 233, 0.4))",
              }}
            >
              NexDetail
            </h1>
            <p
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                fontSize: 34,
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.85)",
                margin: "0 0 36px 0",
              }}
            >
              স্মার্ট AutoCAD Plugin • RCC Detailing সলিউশন
            </p>
          </div>

          {/* 3 Staggered Value Proposition Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {/* Pill 1: Faster */}
            <div
              style={{
                padding: "14px 28px",
                borderRadius: 9999,
                background: "rgba(14, 165, 233, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                color: "#38bdf8",
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                transform: `scale(${interpolate(pill1, [0, 1], [0.6, 1])})`,
                opacity: interpolate(pill1, [0, 1], [0, 1]),
              }}
            >
              ⚡ আরও দ্রুত (Faster)
            </div>

            {/* Pill 2: Easier */}
            <div
              style={{
                padding: "14px 28px",
                borderRadius: 9999,
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                color: "#34d399",
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                transform: `scale(${interpolate(pill2, [0, 1], [0.6, 1])})`,
                opacity: interpolate(pill2, [0, 1], [0, 1]),
              }}
            >
              ✨ আরও সহজ (Easier)
            </div>

            {/* Pill 3: Professional */}
            <div
              style={{
                padding: "14px 28px",
                borderRadius: 9999,
                background: "rgba(168, 85, 247, 0.15)",
                border: "1px solid rgba(168, 85, 247, 0.4)",
                color: "#c084fc",
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                transform: `scale(${interpolate(pill3, [0, 1], [0.6, 1])})`,
                opacity: interpolate(pill3, [0, 1], [0, 1]),
              }}
            >
              📐 Professional
            </div>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
