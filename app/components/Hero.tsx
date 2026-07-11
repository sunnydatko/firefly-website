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
      bgRef.current.style.transform = `translateX(50px) scale(${1.4 + progress * 0.08})`;
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
        minHeight: { xs: "72svh", md: "78vh" },
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
          backgroundPosition: { xs: "68% center", md: "68% 58%" },
          willChange: "transform, opacity",
          transformOrigin: "center center",
          transform: "translateX(50px) scale(1.4)",
          opacity: 0.9,
          filter: "brightness(0.62) contrast(1.15)",
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

      <Container sx={{ position: "relative", zIndex: 2, pt: { xs: 17, md: 16.5 }, pb: { xs: 9, md: 7 } }}>
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
            Boutique Web Design &amp; Development
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              ...anim("0.5s"),
              fontSize: { xs: "36px", sm: "49px", md: "65px" },
              lineHeight: 1.02,
              color: "#F2E8CF",
              mb: { xs: 2.5, md: 3 },
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
              mb: { xs: 3, md: 3.5 },
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
