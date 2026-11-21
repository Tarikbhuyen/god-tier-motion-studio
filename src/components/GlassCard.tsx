import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface GlassCardProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
  enterDelay?: number;
  tiltIntensity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  width = 920,
  height = "auto",
  style = {},
  glowColor = "rgba(14, 165, 233, 0.28)",
  enterDelay = 0,
  tiltIntensity = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy spring entrance with settle
  const enterSpring = spring({
    frame: frame - enterDelay,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 95 },
  });

  const translateY = interpolate(enterSpring, [0, 1], [80, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.92, 1]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1]);

  // Subtle hovering 3D physics
  const hoverY = Math.sin((frame / fps) * 2.2) * 4 * tiltIntensity;
  const rotateX = Math.sin((frame / fps) * 1.8) * 1.8 * tiltIntensity;
  const rotateY = Math.cos((frame / fps) * 1.5) * 2.2 * tiltIntensity;

  // Specular sheen sweep across the glass card
  const sheenProgress = interpolate(
    frame - enterDelay,
    [15, 75],
    [-120, 220],
    {
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        width,
        height,
        transform: `
          translateY(${translateY + hoverY}px)
          scale(${scale})
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `,
        opacity,
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        borderRadius: 32,
        background:
          "linear-gradient(135deg, rgba(22, 28, 42, 0.78) 0%, rgba(12, 16, 26, 0.88) 60%, rgba(8, 11, 18, 0.94) 100%)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        boxShadow: `
          0 32px 64px -16px rgba(0, 0, 0, 0.85),
          0 16px 36px -12px ${glowColor},
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)
        `,
        overflow: "hidden",
        padding: "40px 44px",
        ...style,
      }}
    >
      {/* Dynamic Specular Sheen Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            115deg,
            transparent 0%,
            rgba(255, 255, 255, 0.02) 42%,
            rgba(56, 189, 248, 0.16) 48%,
            rgba(255, 255, 255, 0.32) 50%,
            rgba(56, 189, 248, 0.16) 52%,
            transparent 62%
          )`,
          transform: `translateX(${sheenProgress}%)`,
          pointerEvents: "none",
        }}
      />

      {/* Internal Content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};
