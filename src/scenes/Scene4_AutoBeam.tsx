import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";
import { BeamCrossSectionGraphic } from "../components/CADVisuals";

export const Scene4_AutoBeam: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cross section rebar render progress
  const beamProgress = interpolate(frame, [15, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const badgeSpring = spring({
    frame: frame - 25,
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
      <GlassCard width={960} glowColor="rgba(245, 158, 11, 0.3)">
        <div style={{ textAlign: "center" }}>
          {/* Feature Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: "#fbbf24",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              FEATURE 02
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'FK Grotesk', sans-serif",
              fontSize: 54,
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 10px 0",
              letterSpacing: "-0.02em",
            }}
          >
            One-Click Auto Beam
          </h2>

          <p
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              fontSize: 26,
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.8)",
              margin: "0 0 32px 0",
            }}
          >
            সব Beam Drawing, Editing ও Cross Section পরিবর্তন Automatically
          </p>

          {/* Interactive Beam Section Display Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              padding: "24px 32px",
              background: "rgba(3, 7, 18, 0.85)",
              borderRadius: 24,
              border: "1px solid rgba(245, 158, 11, 0.3)",
              boxShadow: "inset 0 2px 12px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* The Beam Graphic */}
            <BeamCrossSectionGraphic progress={beamProgress} />

            {/* Spec List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                textAlign: "left",
                fontFamily: "'FK Grotesk Mono', monospace",
              }}
            >
              <div
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid rgba(245, 158, 11, 0.3)",
                }}
              >
                <div style={{ fontSize: 11, color: "#fbbf24" }}>BEAM PROFILE</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff" }}>
                  GB-1 (12&quot; x 24&quot;)
                </div>
              </div>

              <div
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <div style={{ fontSize: 11, color: "#34d399" }}>REBAR CALCULATION</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#ffffff" }}>
                  AUTO REBAR SPACING
                </div>
              </div>

              <div
                style={{
                  transform: `scale(${interpolate(badgeSpring, [0, 1], [0.8, 1])})`,
                  opacity: interpolate(badgeSpring, [0, 1], [0, 1]),
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  color: "#38bdf8",
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                ✓ REAL-TIME SECTION UPDATE
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
