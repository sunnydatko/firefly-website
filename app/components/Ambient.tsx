"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Decorative sprig SVG --------------------------------------------------- */
const BotanicalSprig = ({
  style,
  className,
}: {
  style?: CSSProperties;
  className?: string;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 60 220"
    fill="none"
    stroke="rgba(170,184,160,0.35)"
    strokeWidth={1.1}
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M30 220 C 30 150, 30 110, 30 40" />
    <path d="M30 168 C 14 158, 8 168, 6 180" />
    <path d="M30 150 C 46 140, 52 150, 54 162" />
    <path d="M30 128 C 16 120, 10 128, 8 140" />
    {[40, 52, 64, 76, 88, 100].map((y, i) => (
      <g key={y} transform={`translate(0 ${y})`}>
        <circle cx={30} cy={0} r={i < 2 ? 2.6 : 2.2} fill="rgba(170,184,160,0.20)" />
        <line x1={30} y1={-3} x2={24} y2={-7} />
        <line x1={30} y1={-3} x2={36} y2={-7} />
      </g>
    ))}
  </svg>
);

/* Forest edge silhouette ------------------------------------------------- */
const ForestEdge = () => (
  <svg
    aria-hidden
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "45vh",
      pointerEvents: "none",
    }}
    viewBox="0 0 1440 360"
    preserveAspectRatio="xMidYMax slice"
  >
    <g fill="rgba(170,184,160,0.055)">
      {/* Left cluster — pines and deciduous */}
      <path d="M0 360 L0 185 L32 118 L64 185 L64 360 Z" />
      <path d="M46 360 L46 222 L72 160 L98 222 L98 360 Z" />
      <ellipse cx="130" cy="285" rx="40" ry="56" />
      <rect x="124" y="330" width="12" height="30" />
      <path d="M162 360 L162 215 L188 150 L214 215 L214 360 Z" />
      <ellipse cx="242" cy="308" rx="33" ry="45" />
      <rect x="236" y="346" width="12" height="14" />
      <path d="M265 360 L265 238 L285 184 L305 238 L305 360 Z" />
      {/* Extra sprig foliage suggestion */}
      <ellipse cx="320" cy="332" rx="22" ry="28" />
    </g>
    {/* Right cluster — mirrored */}
    <g fill="rgba(170,184,160,0.055)" transform="translate(1440 0) scale(-1 1)">
      <path d="M0 360 L0 185 L32 118 L64 185 L64 360 Z" />
      <path d="M46 360 L46 222 L72 160 L98 222 L98 360 Z" />
      <ellipse cx="130" cy="285" rx="40" ry="56" />
      <rect x="124" y="330" width="12" height="30" />
      <path d="M162 360 L162 215 L188 150 L214 215 L214 360 Z" />
      <ellipse cx="242" cy="308" rx="33" ry="45" />
      <rect x="236" y="346" width="12" height="14" />
      <path d="M265 360 L265 238 L285 184 L305 238 L305 360 Z" />
      <ellipse cx="320" cy="332" rx="22" ry="28" />
    </g>
  </svg>
);

/* Gradient auras + parallax scroll --------------------------------------- */
const GradientAura = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.06}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ambient-layer" aria-hidden>
      <div ref={ref} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <div className="ambient-aura gold" />
        <div className="ambient-aura amber-muted" />
        <div className="ambient-aura navy-deep" />
        <div className="ambient-aura midnight-deep" />
        <BotanicalSprig
          className="sway"
          style={{ position: "absolute", bottom: -10, left: "3vw", width: 90, height: 240, opacity: 0.12 }}
        />
        <BotanicalSprig
          className="sway sway-slow"
          style={{
            position: "absolute",
            bottom: -10,
            right: "4vw",
            width: 80,
            height: 220,
            opacity: 0.10,
            transform: "scaleX(-1)",
          }}
        />
        <ForestEdge />
      </div>
    </div>
  );
};

/* Firefly field (canvas) ------------------------------------------------- */
type Firefly = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  blinkPhase: number;
  blinkSpeed: number;
  maxOpacity: number;
  isAmber: boolean;
};

const FireflyField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let flies: Firefly[] = [];
    let raf = 0;
    const startTime = Date.now();

    const count = () => {
      const base = Math.round((window.innerWidth * window.innerHeight) / 28000);
      return Math.max(18, Math.min(42, base));
    };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flies = Array.from({ length: count() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 0.9 + 0.4,
        blinkPhase: Math.random() * Math.PI * 2,
        blinkSpeed: Math.random() * 0.8 + 0.35,
        maxOpacity: Math.random() * 0.28 + 0.22,
        isAmber: Math.random() > 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const t = (Date.now() - startTime) / 1000;

      for (const ff of flies) {
        if (!reduced) {
          ff.x += ff.vx;
          ff.y += ff.vy;
          if (ff.x < -20) ff.x = width + 20;
          if (ff.x > width + 20) ff.x = -20;
          if (ff.y < -20) ff.y = height + 20;
          if (ff.y > height + 20) ff.y = -20;
        }

        // Power of 3 creates sharp blink rather than smooth oscillation
        const rawBlink = (Math.sin(t * ff.blinkSpeed * Math.PI + ff.blinkPhase) + 1) / 2;
        const opacity = Math.pow(rawBlink, 3) * ff.maxOpacity;
        if (opacity < 0.02) continue;

        const rgb = ff.isAmber ? "216,179,106" : "232,206,148";
        const glowR = ff.r * 9;

        // Soft outer halo
        const grad = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, glowR);
        grad.addColorStop(0, `rgba(${rgb},${opacity * 0.22})`);
        grad.addColorStop(0.4, `rgba(${rgb},${opacity * 0.07})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath();
        ctx.arc(ff.x, ff.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(ff.x, ff.y, ff.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${Math.min(opacity * 1.4, 1)})`;
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    init();
    if (reduced) draw();
    else loop();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-particles" aria-hidden />;
};

/* Cursor glow ------------------------------------------------------------ */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
    };
    const loop = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={ref} className="ambient-cursor-glow" style={{ opacity: 0 }} aria-hidden />;
};

/* Reveal-on-scroll ------------------------------------------------------- */
const ScrollReveal = () => {
  useEffect(() => {
    const reduced = prefersReducedMotion() || !("IntersectionObserver" in window);
    const seen = new WeakSet<Element>();

    const io = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (io) io.observe(el);
        else el.classList.add("is-visible");
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

/* Root ------------------------------------------------------------------- */
export default function Ambient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <GradientAura />
      <FireflyField />
      <CursorGlow />
      <div className="ambient-noise" aria-hidden />
      <ScrollReveal />
    </>
  );
}
