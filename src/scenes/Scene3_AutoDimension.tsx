import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlassCard } from "../components/GlassCard";
import { DimensionLine } from "../components/CADVisuals";

export const Scene3_AutoDimension: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dimension lines snapping in sequence
  const dim1Spring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, mass: 0.8, stiffness: 110 },
  });
  const dim2Spring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 15, mass: 0.8, stiffness: 110 },
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
      <GlassCard width={960} glowColor="rgba(56, 189, 248, 0.3)">
        <div style={{ textAlign: "center" }}>
          {/* Feature Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 20px",
              borderRadius: 9999,
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'FK Grotesk', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                color: "#38bdf8",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              FEATURE 01
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
            Auto Dimension
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
            Grid, Column, Pile ও Pile Cap layout এ মুহূর্তেই dimension তৈরি
          </p>

          {/* Interactive Structural CAD Blueprint Canvas */}
          <div
            style={{
              width: "100%",
              height: 380,
              borderRadius: 20,
              background: "rgba(3, 7, 18, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              position: "relative",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Top Dimension Line */}
            <div
              style={{
                opacity: interpolate(dim1Spring, [0, 1], [0, 1]),
                transform: `scaleX(${interpolate(dim1Spring, [0, 1], [0.4, 1])})`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DimensionLine length={680} label="24'-6&quot; (BAY A-B)" />
            </div>

            {/* Simulated Grid Column Nodes */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flex: 1,
              }}
            >
              {["C1 (15x20)", "C2 (15x24)", "C3 (15x20)"].map((col, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* Column Box with Reinforcing Rebars */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      border: "2px solid #38bdf8",
                      borderRadius: 8,
                      position: "relative",
                      boxShadow: "0 0 16px rgba(56, 189, 248, 0.3)",
                    }}
                  >
                    {/* Cross diagonal ties */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 4,
                        border: "1px dashed rgba(245, 158, 11, 0.6)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 6,
                        left: 6,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 6,
                        left: 6,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 6,
                        right: 6,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'FK Grotesk Mono', monospace",
                      fontSize: 13,
                      color: "#94a3b8",
                    }}
                  >
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Pile Cap Dimension */}
            <div
              style={{
                opacity: interpolate(dim2Spring, [0, 1], [0, 1]),
                transform: `scaleX(${interpolate(dim2Spring, [0, 1], [0.4, 1])})`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DimensionLine length={520} label="PILE CAP PC-1: 6'-0&quot; x 6'-0&quot;" />
            </div>
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  );
};
