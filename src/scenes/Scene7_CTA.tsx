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

export const Scene7_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // CTA button pulsating breathing effect
  const pulse = interpolate(
    Math.sin((frame / fps) * Math.PI * 2),
    [-1, 1],
    [0.98, 1.04]
  );

  const ctaSpring = spring({
    frame: frame - 20,
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
      <GlassCard width={960} glowColor="rgba(56, 189, 248, 0.4)">
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <AutoCADLogoBadge size={50} />
          </div>

          <h1
            style={{
              fontFamily: "'FK Grotesk', sans-serif",
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "0 0 8px 0",
              background: "linear-gradient(135deg, #ffffff 40%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NexDetail
          </h1>

          <div
            style={{
              fontFamily: "'FK Grotesk Mono', monospace",
              fontSize: 18,
              fontWeight: 700,
              color: "#38bdf8",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            DESIGN SMARTER, DETAIL FASTER
          </div>

          <p
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              fontSize: 32,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.4,
              margin: "0 0 36px 0",
            }}
          >
            আপনার Structural Detailing Workflow কে <br />
            আরও Smart ও Productive করতে যুক্ত হোন আজই!
          </p>

          {/* Large Animated Call To Action Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              transform: `scale(${interpolate(ctaSpring, [0, 1], [0.8, 1]) * pulse})`,
              opacity: interpolate(ctaSpring, [0, 1], [0, 1]),
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "20px 48px",
                borderRadius: 9999,
                background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                boxShadow: "0 12px 32px rgba(14, 165, 233, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Message Inbox Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span
                style={{
                  fontFamily: "'Hind Siliguri', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Software Demo পেতে এখনই Inbox করুন
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
