"use client";

import { useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import skyBg from "../images/hero.webp";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

const NEUTRAL =
  "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 0%, rgba(13,11,20,0.4) 100%)";

/* Signature ambient motion — subtle, slow, never continuous-feeling */
const breathe = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(0.94); }
  50%      { opacity: 0.65; transform: scale(1.06); }
`;

const screenGlow = keyframes`
  0%, 100% { opacity: 0.22; }
  50%      { opacity: 0.5; }
`;

const reducedMotionFreeze = {
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
};

/* Signature firefly — a rare, wandering crossing with a fading trail.
   Canvas-driven (not CSS keyframes) because a real trail needs particles
   that spawn and decay independently of the leader's curved path. */
type Trail = { x: number; y: number; t: number };
type Flight = {
  start: number;
  duration: number;
  p0: [number, number];
  p1: [number, number];
  p2: [number, number];
  p3: [number, number];
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);

const bezier = (t: number, f: Flight): [number, number] => {
  const mt = 1 - t;
  const x =
    mt ** 3 * f.p0[0] + 3 * mt ** 2 * t * f.p1[0] + 3 * mt * t ** 2 * f.p2[0] + t ** 3 * f.p3[0];
  const y =
    mt ** 3 * f.p0[1] + 3 * mt ** 2 * t * f.p1[1] + 3 * mt * t ** 2 * f.p2[1] + t ** 3 * f.p3[1];
  return [x, y];
};

type Agent = {
  flight: Flight | null;
  nextFlightAt: number;
  trail: Trail[];
  lastTrailEmit: number;
};

const AGENT_COUNT = 2;

function HeroFirefly() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const container = canvas?.parentElement;
    if (!canvas || !ctx || !container) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const now0 = performance.now();
    const agents: Agent[] = Array.from({ length: AGENT_COUNT }, (_, i) => ({
      flight: null,
      nextFlightAt: now0 + i * 2400 + rand(200, 2000),
      trail: [],
      lastTrailEmit: 0,
    }));
    let raf = 0;

    const beginFlight = (now: number): Flight => {
      // A real firefly hovers in a small patch of air rather than crossing the
      // whole scene — keep the whole flight inside a modest local radius, and
      // move slowly across it.
      const cx = rand(width * 0.42, width * 0.94);
      const cy = rand(height * 0.15, height * 0.7);
      const spread = rand(22, 50);
      const a0 = rand(0, Math.PI * 2);
      const a3 = a0 + rand(1.2, 3.4) * (Math.random() > 0.5 ? 1 : -1);
      return {
        start: now,
        duration: rand(500, 800),
        p0: [cx + Math.cos(a0) * spread * 0.3, cy + Math.sin(a0) * spread * 0.3],
        p1: [cx + rand(-spread, spread), cy + rand(-spread, spread)],
        p2: [cx + rand(-spread, spread), cy + rand(-spread, spread)],
        p3: [cx + Math.cos(a3) * spread * 0.4, cy + Math.sin(a3) * spread * 0.4],
      };
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const agent of agents) {
        if (!agent.flight && now >= agent.nextFlightAt) agent.flight = beginFlight(now);

        if (agent.flight) {
          const t = (now - agent.flight.start) / agent.flight.duration;
          if (t >= 1) {
            agent.flight = null;
            agent.nextFlightAt = now + rand(1200, 5200);
          } else {
            const [x, y] = bezier(t, agent.flight);
            const opacity = Math.max(0, Math.sin(Math.PI * t));

            if (now - agent.lastTrailEmit > 55) {
              agent.trail.push({ x, y, t: now });
              agent.lastTrailEmit = now;
            }

            const glowR = 9;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, glowR);
            grad.addColorStop(0, `rgba(255,232,176,${0.85 * opacity})`);
            grad.addColorStop(0.35, `rgba(216,179,106,${0.32 * opacity})`);
            grad.addColorStop(1, "rgba(216,179,106,0)");
            ctx.beginPath();
            ctx.arc(x, y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,232,176,${opacity})`;
            ctx.fill();
          }
        }

        agent.trail = agent.trail.filter((p) => now - p.t < 250);
        for (const p of agent.trail) {
          const age = now - p.t;
          const a = 1 - age / 350;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1 * a, 0.15), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(216,179,106,${0.25 * a})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseOverlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseOverlayRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseOverlayRef.current.style.background = `radial-gradient(ellipse 70% 80% at ${x}% ${y}%, transparent 0%, rgba(13,11,20,0.4) 100%)`;
  };

  const handleMouseLeave = () => {
    if (mouseOverlayRef.current) mouseOverlayRef.current.style.background = NEUTRAL;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const progress = Math.min(window.scrollY / sectionRef.current.offsetHeight, 1);
      bgRef.current.style.transform = `translateX(115px) scale(${1.22 + progress * 0.08})`;
      bgRef.current.style.opacity = String((1 - progress * 0.4) * 0.9);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "66svh", md: "72vh" },
        overflow: "hidden",
        backgroundColor: "#0D0B14",
      }}
    >
      {/* Background photo */}
      <Box
        ref={bgRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${skyBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "55% center", md: "56% 50%" },
          willChange: "transform, opacity",
          transformOrigin: "center center",
          transform: "translateX(115px) scale(1.22)",
          opacity: 0.9,
          filter: "brightness(0.62) contrast(1.15)",
        }}
      />

      {/* Breathing glow — slowly pulses behind the laptop */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "18%",
          right: { xs: "-10%", md: "6%" },
          width: { xs: 360, md: 480 },
          height: { xs: 360, md: 480 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(216,179,106,0.16) 0%, rgba(216,179,106,0.05) 55%, transparent 75%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
          animation: `${breathe} 9s ease-in-out infinite`,
          ...reducedMotionFreeze,
        }}
      />

      {/* Screen glow — mirrors the laptop display gently brightening */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: "22%", md: "20%" },
          right: { xs: "12%", md: "26%" },
          width: { xs: 140, md: 190 },
          height: { xs: 100, md: 135 },
          borderRadius: "8px",
          background:
            "radial-gradient(ellipse, rgba(232,206,148,0.5) 0%, rgba(147,112,219,0.14) 55%, transparent 80%)",
          filter: "blur(14px)",
          mixBlendMode: "screen",
          pointerEvents: "none",
          animation: `${screenGlow} 6s ease-in-out infinite`,
          ...reducedMotionFreeze,
        }}
      />

      {/* Left gradient — keeps text legible, lets the garden scene breathe on the right */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(180deg, rgba(13,11,20,0.70) 0%, rgba(13,11,20,0.50) 50%, rgba(13,11,20,0.70) 100%)",
            md: "linear-gradient(90deg, rgba(13,11,20,0.99) 0%, rgba(13,11,20,0.94) 32%, rgba(13,11,20,0.40) 58%, rgba(13,11,20,0.05) 100%)",
          },
        }}
      />

      {/* Right-side atmosphere — faint haze to keep the dark side alive */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "none",
            md: "radial-gradient(ellipse 55% 65% at 88% 30%, rgba(216,179,106,0.05) 0%, transparent 60%), radial-gradient(ellipse 45% 55% at 78% 85%, rgba(90,70,120,0.10) 0%, transparent 65%)",
          },
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Signature firefly — a rare, wandering crossing every 15–25s, trail included */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          "@media (prefers-reduced-motion: reduce)": { display: "none" },
        }}
      >
        <HeroFirefly />
      </Box>

      {/* Laptop dissolve — a pool of darkness under the laptop so its base fades into
          shadow rather than being cut off hard, as if it's emerging from the dark */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 42% 62% at 74% 88%, rgba(13,11,20,0.92) 0%, rgba(13,11,20,0.5) 45%, transparent 78%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade — dissolves the photo into the section below instead of a hard cut */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: { xs: "23%", md: "32%" },
          background: "linear-gradient(to bottom, transparent 0%, #0D0B14 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Cursor-tracked overlay — desktop only */}
      <Box
        ref={mouseOverlayRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: NEUTRAL,
          transition: "background 0.18s ease",
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2, pt: { xs: 17, md: 16.5 }, pb: { xs: 5, md: 3 } }}>
        <Box sx={{ maxWidth: { xs: "100%", md: 620 } }}>

          {/* Eyebrow */}
          <Typography
            sx={{
              ...anim("0.2s"),
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#D8B36A",
              mb: 2.5,
            }}
          >
            Thoughtfully Crafted Digital Experiences
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              ...anim("0.5s"),
              fontSize: { xs: "36px", sm: "49px", md: "65px" },
              lineHeight: 1.02,
              color: "#F2E8CF",
              mb: { xs: 3.5, md: 4 },
            }}
          >
            Websites
            <br />
            that help
            <br />
            your business
            <br />
            <Box
              component="em"
              sx={{
                display: "block",
                mt: { xs: 1, md: 1.5 },
                fontStyle: "italic",
                color: "#D8B36A",
                fontFamily: "var(--font-fraunces), serif",
              }}
            >
              shine.
            </Box>
          </Typography>

          {/* Gold rule */}
          <Box
            sx={{
              ...anim("0.75s"),
              width: 80,
              height: 2,
              borderRadius: 1,
              bgcolor: "#D8B36A",
              mb: { xs: 5, md: 5.5 },
            }}
          />

          {/* Subtext */}
          <Typography
            sx={{
              ...anim("0.95s"),
              color: "rgba(242,232,207,0.72)",
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.7,
              maxWidth: 440,
              mb: { xs: 4, md: 5 },
            }}
          >
            Thoughtful design. Built for growth. Crafted for small businesses.</Typography>

          {/* CTAs */}
          <Box
            sx={{
              ...anim("1.15s"),
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 2, md: 2.5 },
            }}
          >
            <Button
              variant="contained"
              href="/services"
              sx={{
                fontSize: { xs: 12, md: 13 },
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: { xs: 3, md: 3.5 },
                py: 1.5,
                backgroundColor: "#D8B36A",
                color: "#0D0B14",
                "&:hover": {
                  backgroundColor: "#E8CE94",
                },
              }}
            >
              Our Services
            </Button>

            <Button
              variant="outlined"
              href="/contact"
              sx={{
                fontSize: { xs: 12, md: 13 },
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: { xs: 3, md: 3.5 },
                py: 1.5,
                borderColor: "#D8B36A",
                color: "#D8B36A",
                "&:hover": {
                  borderColor: "#E8CE94",
                  color: "#E8CE94",
                  backgroundColor: "rgba(216,179,106,0.06)",
                },
              }}
            >
              Let&apos;s Glow&nbsp;&bull;
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
