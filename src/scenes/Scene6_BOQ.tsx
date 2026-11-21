import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";

export const Scene6_BOQ: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Ticking numeric values
  const rebarWeight = interpolate(frame, [15, 90], [0, 24.85], {
    easing: Easing.bezier(0.12, 0.82, 0.18, 1),
    extrapolateRight: "clamp",
  });
  const concreteVol = interpolate(frame, [15, 90], [0, 184.2], {
    easing: Easing.bezier(0.12, 0.82, 0.18, 1),
    extrapolateRight: "clamp",
  });
  const taggedCount = interpolate(frame, [15, 80], [0, 342], {
    easing: Easing.bezier(0.12, 0.82, 0.18, 1),
    extrapolateRight: "clamp",
  });

  const teaserSpring = spring({
    frame: frame - 110,
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
      <GlassCard width={960} glowColor="rgba(16, 185, 129, 0.3)">
        <div style={{ textAlign: "center" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: "#34d399",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              FEATURE 04
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'FK Grotesk', sans-serif",
              fontSize: 50,
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 10px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Auto Tagging & Instant BOQ
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
            Column, Beam ও Footing এর নির্ভুল হিসাব ও Material Quantity মুহূর্তে
          </p>

          {/* 3 Live Metric Counter Tiles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              fontFamily: "'FK Grotesk Mono', monospace",
            }}
          >
            {/* Tile 1: Tagged Elements */}
            <div
              style={{
                padding: "24px 16px",
                background: "rgba(3, 7, 18, 0.85)",
                borderRadius: 20,
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
                AUTO TAGGED ITEMS
              </div>
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#38bdf8",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {Math.floor(taggedCount)}
              </div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                CAD BLOCKS SYNCED
              </div>
            </div>

            {/* Tile 2: Steel Rebar */}
            <div
              style={{
                padding: "24px 16px",
                background: "rgba(3, 7, 18, 0.85)",
                borderRadius: 20,
                border: "1px solid rgba(16, 185, 129, 0.3)",
              }}
            >
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
                STEEL REBAR BOQ
              </div>
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#34d399",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {rebarWeight.toFixed(1)} <span style={{ fontSize: 20 }}>MT</span>
              </div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                500W DEFORMED BARS
              </div>
            </div>

            {/* Tile 3: Concrete Volume */}
            <div
              style={{
                padding: "24px 16px",
                background: "rgba(3, 7, 18, 0.85)",
                borderRadius: 20,
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
                TOTAL CONCRETE
              </div>
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#fbbf24",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {concreteVol.toFixed(1)} <span style={{ fontSize: 20 }}>m³</span>
              </div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                C25 / 30 CAST VOLUME
              </div>
            </div>
          </div>

          {/* Teaser Badge for Upcoming Features */}
          <div
            style={{
              marginTop: 32,
              transform: `scale(${interpolate(teaserSpring, [0, 1], [0.8, 1])})`,
              opacity: interpolate(teaserSpring, [0, 1], [0, 1]),
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 24px",
              borderRadius: 9999,
              background: "rgba(168, 85, 247, 0.18)",
              border: "1px solid rgba(168, 85, 247, 0.45)",
            }}
          >
            <span style={{ fontSize: 16 }}>🚀</span>
            <span
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#e9d5ff",
              }}
            >
              সামনে আসছে আরও অনেক Powerful Feature!
            </span>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
