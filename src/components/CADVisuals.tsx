import React from "react";
import { Img, staticFile } from "remotion";

export const AutoCADLogoBadge: React.FC<{ size?: number }> = ({ size = 48 }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 18px",
        borderRadius: 9999,
        background: "rgba(235, 30, 60, 0.12)",
        border: "1px solid rgba(235, 30, 60, 0.35)",
        boxShadow: "0 4px 16px rgba(235, 30, 60, 0.2)",
      }}
    >
      <Img
        src={staticFile("images/autocad.svg")}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "'FK Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          AutoCAD Plugin
        </span>
        <span
          style={{
            fontFamily: "'FK Grotesk Mono', monospace",
            fontSize: 10,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          AUTODESK CERTIFIED WORKFLOW
        </span>
      </div>
    </div>
  );
};

export const DimensionLine: React.FC<{
  length: number;
  label: string;
  horizontal?: boolean;
}> = ({ length, label, horizontal = true }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: horizontal ? length : "auto",
        height: horizontal ? "auto" : length,
        flexDirection: horizontal ? "row" : "column",
        color: "#38bdf8",
        fontFamily: "'FK Grotesk Mono', monospace",
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      <div
        style={{
          flex: 1,
          height: horizontal ? 1 : length / 2 - 20,
          width: horizontal ? length / 2 - 20 : 1,
          backgroundColor: "#38bdf8",
          position: "relative",
        }}
      />
      <span
        style={{
          padding: "2px 8px",
          background: "rgba(14, 165, 233, 0.15)",
          borderRadius: 4,
          border: "1px solid rgba(56, 189, 248, 0.4)",
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: horizontal ? 1 : length / 2 - 20,
          width: horizontal ? length / 2 - 20 : 1,
          backgroundColor: "#38bdf8",
        }}
      />
    </div>
  );
};

export const BeamCrossSectionGraphic: React.FC<{ progress?: number }> = ({
  progress = 1,
}) => {
  return (
    <svg width="340" height="240" viewBox="0 0 340 240" fill="none">
      {/* Outer Concrete Cross Section (12" x 24") */}
      <rect
        x="20"
        y="15"
        width="300"
        height="210"
        rx="6"
        fill="rgba(15, 23, 42, 0.7)"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />

      {/* Internal Stirrup Tie (Closed Link) */}
      <rect
        x="42"
        y="35"
        width="256"
        height="170"
        rx="8"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeOpacity={progress}
      />

      {/* Top 3 Main Rebars */}
      <circle cx="62" cy="55" r="9" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="170" cy="55" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="278" cy="55" r="9" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />

      {/* Bottom 4 Heavy Tension Rebars */}
      <circle cx="62" cy="185" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="134" cy="185" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="206" cy="185" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="278" cy="185" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

      {/* Dimension & Rebar Specs Annotations */}
      <text x="75" y="80" fill="#94a3b8" fontSize="12" fontFamily="'FK Grotesk Mono', monospace">
        3 - #20 Top
      </text>
      <text x="75" y="165" fill="#34d399" fontSize="12" fontFamily="'FK Grotesk Mono', monospace">
        4 - #25 Bottom
      </text>
      <text x="120" y="115" fill="#fbbf24" fontSize="11" fontFamily="'FK Grotesk Mono', monospace">
        10mm @ 150mm c/c
      </text>
    </svg>
  );
};
