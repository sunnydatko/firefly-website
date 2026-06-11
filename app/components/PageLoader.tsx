"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 600);
    const removeTimer = setTimeout(() => setVisible(false), 1100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        role="status"
        aria-label="Loading"
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060709",
          zIndex: 9999,
          opacity: fading ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: fading ? "none" : "auto",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(242,193,90,0.08) 0%, rgba(255,216,120,0.04) 30%, transparent 62%)",
            animation: "ffBreathe 5s ease-in-out infinite",
          }}
        />

        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
          style={{ position: "relative" }}
        >
          <defs>
            <filter id="ff-halo" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur stdDeviation="11" />
            </filter>
            <filter id="ff-glow" x="-400%" y="-400%" width="900%" height="900%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="18" cy="20" r="0.7" fill="white" className="ff-star-a" />
          <circle cx="200" cy="28" r="0.8" fill="white" className="ff-star-b" />
          <circle cx="12" cy="188" r="0.9" fill="white" className="ff-star-a" />
          <circle cx="205" cy="192" r="0.7" fill="white" className="ff-star-b" />
          <circle cx="110" cy="8" r="0.6" fill="white" className="ff-star-c" />
          <circle cx="38" cy="210" r="0.7" fill="white" className="ff-star-a" />
          <circle cx="182" cy="205" r="0.6" fill="white" className="ff-star-b" />
          <circle cx="8" cy="100" r="0.7" fill="white" className="ff-star-c" />
          <circle cx="212" cy="108" r="0.6" fill="white" className="ff-star-a" />

          <g style={{ animation: "ffDa 9s ease-in-out infinite alternate" }}>
            <g className="ff ff-1">
              <circle cx="110" cy="104" r="20" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.45" />
              <circle cx="110" cy="104" r="3.5" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDb 7s ease-in-out infinite alternate" }}>
            <g className="ff ff-2">
              <circle cx="162" cy="80" r="15" fill="#FFD878" filter="url(#ff-halo)" opacity="0.4" />
              <circle cx="162" cy="80" r="2.8" fill="#FFE8B0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDc 8.5s ease-in-out infinite alternate" }}>
            <g className="ff ff-3">
              <circle cx="66" cy="150" r="15" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.4" />
              <circle cx="66" cy="150" r="2.8" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDd 6.5s ease-in-out infinite alternate" }}>
            <g className="ff ff-4">
              <circle cx="174" cy="138" r="12" fill="#FFD878" filter="url(#ff-halo)" opacity="0.35" />
              <circle cx="174" cy="138" r="2.2" fill="#FFE8B0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDe 10s ease-in-out infinite alternate" }}>
            <g className="ff ff-5">
              <circle cx="62" cy="72" r="12" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.35" />
              <circle cx="62" cy="72" r="2.2" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDf 7.5s ease-in-out infinite alternate" }}>
            <g className="ff ff-6">
              <circle cx="46" cy="120" r="12" fill="#FFD878" filter="url(#ff-halo)" opacity="0.35" />
              <circle cx="46" cy="120" r="2.2" fill="#FFE8B0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDg 8s ease-in-out infinite alternate" }}>
            <g className="ff ff-7">
              <circle cx="138" cy="168" r="9" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.3" />
              <circle cx="138" cy="168" r="1.7" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDh 11s ease-in-out infinite alternate" }}>
            <g className="ff ff-8">
              <circle cx="118" cy="46" r="9" fill="#FFD878" filter="url(#ff-halo)" opacity="0.3" />
              <circle cx="118" cy="46" r="1.7" fill="#FFE8B0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDa 6s ease-in-out infinite alternate" }}>
            <g className="ff ff-9">
              <circle cx="188" cy="52" r="7" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.26" />
              <circle cx="188" cy="52" r="1.4" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDb 9.5s ease-in-out infinite alternate" }}>
            <g className="ff ff-10">
              <circle cx="24" cy="86" r="6" fill="#FFD878" filter="url(#ff-halo)" opacity="0.24" />
              <circle cx="24" cy="86" r="1.2" fill="#FFE8B0" filter="url(#ff-glow)" />
            </g>
          </g>

          <g style={{ animation: "ffDc 7s ease-in-out infinite alternate" }}>
            <g className="ff ff-11">
              <circle cx="194" cy="175" r="6" fill="#F2C15A" filter="url(#ff-halo)" opacity="0.24" />
              <circle cx="194" cy="175" r="1.2" fill="#FFFBE0" filter="url(#ff-glow)" />
            </g>
          </g>
        </svg>

        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Loading
        </span>
      </div>

      <style>{`
        .ff { opacity: 0.12; }
        .ff-1  { animation: ffPulse 3.2s ease-in-out infinite 0.0s; }
        .ff-2  { animation: ffPulse 2.7s ease-in-out infinite 0.7s; }
        .ff-3  { animation: ffPulse 3.8s ease-in-out infinite 1.4s; }
        .ff-4  { animation: ffPulse 2.5s ease-in-out infinite 2.1s; }
        .ff-5  { animation: ffPulse 3.5s ease-in-out infinite 0.3s; }
        .ff-6  { animation: ffPulse 2.9s ease-in-out infinite 1.8s; }
        .ff-7  { animation: ffPulse 2.4s ease-in-out infinite 1.1s; }
        .ff-8  { animation: ffPulse 3.6s ease-in-out infinite 2.5s; }
        .ff-9  { animation: ffPulse 2.8s ease-in-out infinite 0.5s; }
        .ff-10 { animation: ffPulse 3.1s ease-in-out infinite 1.9s; }
        .ff-11 { animation: ffPulse 2.6s ease-in-out infinite 0.9s; }
        .ff-star-a { opacity: 0.1; animation: ffStar 3.2s ease-in-out infinite; }
        .ff-star-b { opacity: 0.1; animation: ffStar 4.6s ease-in-out infinite 1.5s; }
        .ff-star-c { opacity: 0.1; animation: ffStar 3.9s ease-in-out infinite 0.8s; }
        @keyframes ffPulse {
          0%, 100% { opacity: 0.12; }
          35% { opacity: 0.2; }
          50% { opacity: 1; }
          65% { opacity: 0.82; }
        }
        @keyframes ffStar {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @keyframes ffBreathe {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.18); }
        }
        @keyframes ffDa { from { transform: translate(0, 0); }   to { transform: translate(3px, -2px); } }
        @keyframes ffDb { from { transform: translate(0, 0); }   to { transform: translate(-2px, 3px); } }
        @keyframes ffDc { from { transform: translate(0, 0); }   to { transform: translate(2.5px, 2px); } }
        @keyframes ffDd { from { transform: translate(0, 0); }   to { transform: translate(-3px, -1.5px); } }
        @keyframes ffDe { from { transform: translate(0, 0); }   to { transform: translate(1.5px, 3.5px); } }
        @keyframes ffDf { from { transform: translate(0, 0); }   to { transform: translate(-2px, -2.5px); } }
        @keyframes ffDg { from { transform: translate(0, 0); }   to { transform: translate(3.5px, 1px); } }
        @keyframes ffDh { from { transform: translate(0, 0); }   to { transform: translate(-1px, -3px); } }
        @media (prefers-reduced-motion: reduce) {
          .ff { animation: none; opacity: 0.85; }
          .ff-star-a, .ff-star-b, .ff-star-c { animation: none; opacity: 0.35; }
        }
      `}</style>
    </>
  );
}
