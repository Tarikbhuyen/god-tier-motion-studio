import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";

export const Scene5_Foundation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const row1 = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const row2 = spring({ frame: frame - 25, fps, config: { damping: 14 } });
  const row3 = spring({ frame: frame - 40, fps, config: { damping: 14 } });
  const row4 = spring({ frame: frame - 55, fps, config: { damping: 14 } });

  const rows = [
    { type: "Footing F-1", size: "7'-6\" x 8'-0\"", rebar: "#16 @ 125mm c/c B.W.", spring: row1 },
    { type: "Pile Cap PC-2", size: "6'-0\" x 10'-0\"", rebar: "#20 @ 100mm c/c Top/Btm", spring: row2 },
    { type: "Column C-1", size: "15\" x 24\"", rebar: "8 - #20 + #10 ties @ 150", spring: row3 },
    { type: "Grade Beam GB-2", size: "12\" x 20\"", rebar: "3-#20 Top + 4-#20 Btm", spring: row4 },
  ];

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
      <GlassCard width={960} glowColor="rgba(168, 85, 247, 0.3)">
        <div style={{ textAlign: "center" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: "#c084fc",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              FEATURE 03
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
            Foundation & Schedules
          </h2>

          <p
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              fontSize: 26,
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.8)",
              margin: "0 0 28px 0",
            }}
          >
            Footing, Pile, Pile Cap ও Column Schedule এখন One Click এ Ready
          </p>

          {/* Automated Schedule Table */}
          <div
            style={{
              background: "rgba(3, 7, 18, 0.85)",
              borderRadius: 20,
              border: "1px solid rgba(168, 85, 247, 0.3)",
              overflow: "hidden",
              padding: "16px 24px",
              fontFamily: "'FK Grotesk Mono', monospace",
              textAlign: "left",
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.8fr 1.8fr 2.4fr 0.8fr",
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: 12,
                fontWeight: 700,
                color: "#c084fc",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span>Structural Mark</span>
              <span>Dimensions</span>
              <span>Reinforcement Spec</span>
              <span style={{ textAlign: "right" }}>Status</span>
            </div>

            {/* Table Rows */}
            {rows.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.8fr 1.8fr 2.4fr 0.8fr",
                  padding: "16px",
                  borderBottom:
                    i === rows.length - 1
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: 15,
                  color: "#ffffff",
                  alignItems: "center",
                  opacity: interpolate(r.spring, [0, 1], [0, 1]),
                  transform: `translateX(${interpolate(r.spring, [0, 1], [30, 0])}px)`,
                }}
              >
                <span style={{ fontWeight: 600, color: "#38bdf8" }}>{r.type}</span>
                <span style={{ color: "#cbd5e1" }}>{r.size}</span>
                <span style={{ color: "#94a3b8", fontSize: 13 }}>{r.rebar}</span>
                <span style={{ textAlign: "right", color: "#34d399", fontWeight: 700 }}>
                  ✓ READY
                </span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
