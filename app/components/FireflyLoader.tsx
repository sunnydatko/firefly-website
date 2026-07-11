import type { CSSProperties } from "react";

type Orbit = {
  r: number;
  dur: number;
  dir: "normal" | "reverse";
  core: string;
  coreGlow: string;
  haloGlow: string;
};

const ORBITS: Orbit[] = [
  { r: 40, dur: 4.5, dir: "normal", core: "#FFFBE0", coreGlow: "rgba(255,251,224,0.9)", haloGlow: "rgba(216,179,106,0.5)" },
  { r: 62, dur: 7, dir: "reverse", core: "#FFE8B0", coreGlow: "rgba(255,232,176,0.85)", haloGlow: "rgba(232,206,148,0.45)" },
  { r: 82, dur: 9.5, dir: "normal", core: "#FFFBE0", coreGlow: "rgba(255,251,224,0.8)", haloGlow: "rgba(216,179,106,0.4)" },
  { r: 98, dur: 12.5, dir: "reverse", core: "#FFE8B0", coreGlow: "rgba(255,232,176,0.75)", haloGlow: "rgba(232,206,148,0.35)" },
];

const ECHO_SIZE = [7, 5, 3.5, 2.5];
const ECHO_OPACITY = [0.95, 0.5, 0.28, 0.14];

export default function FireflyLoader() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(216,179,106,0.08) 0%, rgba(232,206,148,0.04) 30%, transparent 62%)",
          animation: "ffBreathe 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", width: 220, height: 220 }}>
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0 }}
        >
          <circle cx="18" cy="20" r="0.7" fill="white" className="ff-star-a" />
          <circle cx="200" cy="28" r="0.8" fill="white" className="ff-star-b" />
          <circle cx="12" cy="188" r="0.9" fill="white" className="ff-star-a" />
          <circle cx="205" cy="192" r="0.7" fill="white" className="ff-star-b" />
          <circle cx="110" cy="8" r="0.6" fill="white" className="ff-star-c" />
          <circle cx="38" cy="210" r="0.7" fill="white" className="ff-star-a" />
          <circle cx="182" cy="205" r="0.6" fill="white" className="ff-star-b" />
          <circle cx="8" cy="100" r="0.7" fill="white" className="ff-star-c" />
          <circle cx="212" cy="108" r="0.6" fill="white" className="ff-star-a" />
        </svg>

        <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          {ORBITS.map((o, oi) => (
            <div key={oi}>
              {ECHO_SIZE.map((size, ei) => (
                <span
                  key={ei}
                  className={`ff-dot${ei === 0 ? " ff-dot-main" : ""}`}
                  style={
                    {
                      width: size,
                      height: size,
                      background: o.core,
                      opacity: ECHO_OPACITY[ei],
                      boxShadow:
                        ei === 0
                          ? `0 0 4px 1.5px ${o.coreGlow}, 0 0 16px 7px ${o.haloGlow}`
                          : `0 0 6px 2px ${o.haloGlow}`,
                      "--r": `${o.r}px`,
                      animationDuration: `${o.dur}s`,
                      animationDirection: o.dir,
                      animationDelay: `${-(ei * 0.07 * o.dur)}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>

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

      <style>{`
        .ff-dot {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          offset-path: circle(var(--r) at 110px 110px);
          offset-anchor: center;
          offset-rotate: 0deg;
          offset-distance: 0%;
          animation-name: ffOrbit;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes ffOrbit {
          to { offset-distance: 100%; }
        }
        .ff-star-a { opacity: 0.1; animation: ffStar 3.2s ease-in-out infinite; }
        .ff-star-b { opacity: 0.1; animation: ffStar 4.6s ease-in-out infinite 1.5s; }
        .ff-star-c { opacity: 0.1; animation: ffStar 3.9s ease-in-out infinite 0.8s; }
        @keyframes ffStar {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @keyframes ffBreathe {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.18); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ff-dot { animation: none; }
          .ff-dot:not(.ff-dot-main) { display: none; }
          .ff-star-a, .ff-star-b, .ff-star-c { animation: none; opacity: 0.35; }
        }
      `}</style>
    </>
  );
}
