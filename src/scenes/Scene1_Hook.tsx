import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";

export const Scene1_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Counting hours ticking from 0 to 48
  const hoursCount = interpolate(frame, [15, 90], [0, 48], {
    extrapolateRight: "clamp",
  });

  // Cross-out strike effect appearing around frame 90
  const strikeProgress = interpolate(frame, [85, 120], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Instant solution badge popping in
  const solutionSpring = spring({
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
      <GlassCard width={960} glowColor="rgba(239, 68, 68, 0.25)">
        <div style={{ textAlign: "center" }}>
          {/* Eyebrow Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 9999,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                boxShadow: "0 0 10px #ef4444",
              }}
            />
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#f87171",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Structural Detailing Bottleneck
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#ffffff",
              margin: "0 0 24px 0",
            }}
          >
            Structural Drawing এ <br />
            <span style={{ color: "#f87171" }}>ঘণ্টার পর ঘণ্টা</span> অপচয়?
          </h1>

          {/* Time Counter Comparison Box */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 32,
              margin: "36px 0",
            }}
          >
            {/* The Old Painful Way */}
            <div
              style={{
                padding: "24px 36px",
                borderRadius: 20,
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  fontFamily: "'FK Grotesk Mono', monospace",
                  marginBottom: 8,
                }}
              >
                MANUAL DETAILING
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  fontFamily: "'FK Grotesk Mono', monospace",
                  color: "#e2e8f0",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {Math.floor(hoursCount)}h+
              </div>

              {/* Red Strike-through line */}
              <div
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "10%",
                  width: `${strikeProgress * 0.8}%`,
                  height: 4,
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 8px #ef4444",
                  transform: "rotate(-12deg)",
                }}
              />
            </div>

            {/* Arrow Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>

            {/* The New NexDetail Way */}
            <div
              style={{
                padding: "24px 36px",
                borderRadius: 20,
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                transform: `scale(${interpolate(solutionSpring, [0, 1], [0.7, 1])})`,
                opacity: interpolate(solutionSpring, [0, 1], [0, 1]),
                boxShadow: "0 8px 30px rgba(16, 185, 129, 0.25)",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "#34d399",
                  fontFamily: "'FK Grotesk Mono', monospace",
                  marginBottom: 8,
                }}
              >
                NEXDETAIL WORKFLOW
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  fontFamily: "'FK Grotesk Mono', monospace",
                  color: "#34d399",
                }}
              >
                1 CLICK
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
