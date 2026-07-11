"use client";

import { useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import notFoundBg from "./images/not-found-bg.png";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Footer from "./components/Footer";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

function FireflyIcon({ size = 28 }: { size?: number }) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      sx={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden
    >
      <defs>
        <radialGradient id="nf-bodyGrad" cx="45%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFDE8" />
          <stop offset="45%" stopColor="#D8B36A" />
          <stop offset="100%" stopColor="#9C7A3E" />
        </radialGradient>
        <radialGradient id="nf-ambientGlow" cx="16" cy="19" r="11" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D8B36A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D8B36A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="16" cy="19" rx="12" ry="9" fill="url(#nf-ambientGlow)" />
      <path d="M15 20 Q8 17 7 22 Q10 25.5 15 22Z" fill="#D8B36A" opacity="0.4" />
      <path d="M17 20 Q24 17 25 22 Q22 25.5 17 22Z" fill="#D8B36A" opacity="0.4" />
      <path d="M15 17.5 Q9 12.5 8 16 Q11 19 15 18.5Z" fill="#E8CE94" opacity="0.3" />
      <path d="M17 17.5 Q23 12.5 24 16 Q21 19 17 18.5Z" fill="#E8CE94" opacity="0.3" />
      <ellipse cx="16" cy="21" rx="2.5" ry="3.5" fill="url(#nf-bodyGrad)" />
      <circle cx="16" cy="15.5" r="2" fill="#B8934F" />
      <path d="M15 13.7 Q13.5 11 12.5 9" stroke="#8F6F3A" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      <path d="M17 13.7 Q18.5 11 19.5 9" stroke="#8F6F3A" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      <circle cx="12.5" cy="9" r="0.9" fill="#8F6F3A" />
      <circle cx="19.5" cy="9" r="0.9" fill="#8F6F3A" />
    </Box>
  );
}

export default function NotFound() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const currentRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  };

  const handleMouseLeave = () => { mouseRef.current = null; };

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      if (!bgRef.current) { rafRef.current = requestAnimationFrame(tick); return; }
      const target = mouseRef.current
        ? { x: (mouseRef.current.x - 0.5) * 18, y: (mouseRef.current.y - 0.5) * 12 }
        : { x: 0, y: 0 };
      currentRef.current.x = lerp(currentRef.current.x, target.x, 0.04);
      currentRef.current.y = lerp(currentRef.current.y, target.y, 0.04);
      bgRef.current.style.transform =
        `scale(1.07) translate(${currentRef.current.x.toFixed(2)}px, ${currentRef.current.y.toFixed(2)}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0A0813", display: "flex", flexDirection: "column" }}>
      <ResponsiveMenu />

      <Box
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          flex: 1,
          minHeight: { xs: "100svh", md: "auto" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          ref={bgRef}
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${notFoundBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            opacity: 0.9,
            transform: "scale(1.07)",
            willChange: "transform",
          }}
        />

        {/* Dark overlay */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(8,17,31,0.72) 0%, rgba(8,17,31,0.45) 50%, rgba(8,17,31,0.70) 100%)",
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 14, md: 16 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* 404 */}
          <Typography
            component="div"
            sx={{
              ...anim("0.1s"),
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 700,
              fontSize: { xs: "28vw", sm: "180px", md: "240px" },
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#F2E8CF",
              userSelect: "none",
            }}
          >
            404
          </Typography>

          {/* Divider with firefly icon */}
          <Box
            sx={{
              ...anim("0.3s"),
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: { xs: 3, md: 4 },
              mb: { xs: 3, md: 4 },
              width: "100%",
              maxWidth: 480,
            }}
          >
            <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(216,179,106,0.35)" }} />
            <FireflyIcon size={28} />
            <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(216,179,106,0.35)" }} />
          </Box>

          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              ...anim("0.45s"),
              fontSize: { xs: "24px", sm: "28px", md: "36px" },
              color: "common.white",
              lineHeight: 1.25,
              mb: { xs: 2, md: 2.5 },
              maxWidth: 520,
            }}
          >
            Looks like you&apos;ve wandered
            <br />
            off the path.
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              ...anim("0.6s"),
              color: "rgba(242,232,207,0.65)",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.7,
              mb: { xs: 4, md: 5 },
              maxWidth: 400,
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist
            or has been moved. Let&apos;s get you back
            to something useful.
          </Typography>

          {/* CTA */}
          <Box sx={{ ...anim("0.75s") }}>
            <Button
              href="/"
              variant="outlined"
              sx={{
                fontSize: { xs: 11, md: 12 },
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                px: 4,
                py: 1.5,
                borderColor: "rgba(216,179,106,0.60)",
                color: "#F2E8CF",
                borderRadius: "4px",
                "&:hover": {
                  borderColor: "#D8B36A",
                  backgroundColor: "rgba(216,179,106,0.07)",
                  color: "#D8B36A",
                },
                "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                "&:hover .arrow": { transform: "translateX(4px)" },
              }}
            >
              Back to Home
              <Box component="span" className="arrow" aria-hidden>
                {" "}→
              </Box>
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
