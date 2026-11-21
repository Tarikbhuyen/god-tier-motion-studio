import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Composition,
} from "remotion";

export interface MasterSceneProps {
  headlineText?: string;
  metricValue?: number;
  currencyPrefix?: string;
  badgeLabel?: string;
}

export const GodTierMotionScene: React.FC<MasterSceneProps> = ({
  headlineText = "FINTECH LIQUIDITY PROTOCOL",
  metricValue = 248920,
  currencyPrefix = "$",
  badgeLabel = "+28.4% APY",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- LAYER 1 & 2: DYNAMIC ATMOSPHERE & SPOTLIGHT ---
  const spotX = interpolate(frame, [0, 300], [45, 55], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
  const spotGlow = interpolate(
    Math.sin((frame / fps) * Math.PI * 1.2),
    [-1, 1],
    [0.94, 1.06]
  );

  // --- LAYER 3 & 4: 3D CARD KINEMATICS ---
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, mass: 1.0, stiffness: 95 },
  });

  const cardTranslateY = interpolate(enterSpring, [0, 1], [220, 0]);
  const cardScale = interpolate(enterSpring, [0, 1], [0.82, 1]);

  // Settling tilt angles with continuous subtle hover
  const rotateX =
    interpolate(frame, [0, 60], [22, 5], {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateRight: "clamp",
    }) +
    Math.sin((frame / fps) * 2.0) * 1.5;

  const rotateY =
    interpolate(frame, [0, 60], [-26, -10], {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateRight: "clamp",
    }) +
    Math.cos((frame / fps) * 1.6) * 2.0;

  // Specular light sheen tracking inversely across tilt angle (Frames 45 to 135)
  const sheenX = interpolate(frame, [45, 135], [-120, 240], {
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- LAYER 5: METRIC ACCUMULATOR ---
  const counterValue = interpolate(frame, [30, 180], [0, metricValue], {
    easing: Easing.bezier(0.12, 0.82, 0.18, 1), // Cubic ease-out
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const formattedMetric = useMemo(() => {
    return Math.floor(counterValue).toLocaleString("en-US");
  }, [counterValue]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060709",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1200,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. High-Tech Isometric Grid Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
          opacity: 0.5,
        }}
      />

      {/* 2. Volumetric Core Spotlight (Aceternity UI Style) */}
      <div
        style={{
          position: "absolute",
          left: `${spotX}%`,
          top: "40%",
          width: 900,
          height: 900,
          transform: `translate(-50%, -50%) scale(${spotGlow})`,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(99, 102, 241, 0.10) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Primary 3D Physical Stage */}
      <div
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
          transform: `
            translateY(${cardTranslateY}px)
            scale(${cardScale})
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
          `,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Physical Titanium Glass Card */}
        <div
          style={{
            width: 620,
            height: 380,
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(24, 27, 36, 0.90) 0%, rgba(12, 14, 20, 0.98) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: `
              0 32px 64px -16px rgba(0, 0, 0, 0.8),
              0 16px 32px -12px rgba(14, 165, 233, 0.3),
              inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)
            `,
            position: "relative",
            overflow: "hidden",
            padding: "36px 42px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Specular Traveling Sheen */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(
                115deg,
                transparent 0%,
                rgba(56, 189, 248, 0.18) 48%,
                rgba(255, 255, 255, 0.35) 50%,
                rgba(56, 189, 248, 0.18) 52%,
                transparent 100%
              )`,
              transform: `translateX(${sheenX}%)`,
              pointerEvents: "none",
            }}
          />

          {/* Top Card Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#38bdf8",
              }}
            >
              {headlineText}
            </span>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                color: "#34d399",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {badgeLabel}
            </div>
          </div>

          {/* Center Metric Display */}
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.5)",
                textTransform: "uppercase",
              }}
            >
              Total Verified Assets
            </div>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                color: "#ffffff",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.04em",
                display: "flex",
                alignItems: "baseline",
                gap: 4,
              }}
            >
              <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 44 }}>
                {currencyPrefix}
              </span>
              <span>{formattedMetric}</span>
            </div>
          </div>

          {/* Bottom Card Identity Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "rgba(255, 255, 255, 0.45)",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            <span>AUTONOMOUS LEDGER v4</span>
            <span style={{ fontFamily: "monospace" }}>0x8F41...1FF0</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Root = () => {
  return (
    <Composition
      id="GodTierMotionScene"
      component={GodTierMotionScene}
      durationInFrames={300}
      fps={60}
      width={1920}
      height={1080}
      defaultProps={{
        headlineText: "FINTECH LIQUIDITY PROTOCOL",
        metricValue: 248920,
        currencyPrefix: "$",
        badgeLabel: "+28.4% APY",
      }}
    />
  );
};
