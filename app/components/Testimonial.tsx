"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { testimonials } from "../helpers/data";
import testimonialRosestone from "../images/testimonial-rosestone-jewelry.webp";
import testimonialTasha from "../images/testimonial-tasha-rae-jewelry.webp";
import testimonialBeInTouch from "../images/testimonial-be-in-touch.webp";
import testimonialBB from "../images/testimonial-bb.webp";

const imageMap: Record<string, StaticImageData> = {
  "testimonial-rosestone-jewelry": testimonialRosestone,
  "testimonial-tasha-rae-jewelry": testimonialTasha,
  "testimonial-be-in-touch": testimonialBeInTouch,
  "testimonial-bb": testimonialBB,
};

const INTERVAL_MS = 5500;
const FADE_MS = 350;

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const activeRef = useRef(0);

  function goTo(idx: number) {
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      activeRef.current = idx;
      setVisible(true);
    }, FADE_MS);
  }

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      goTo((activeRef.current + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  function formatDisplayName(name: string | undefined) {
    return name
      ? name
          .trim()
          .split(/\s+/)
          .map((part, i, arr) => (i === arr.length - 1 && arr.length > 1 ? `${part[0]}.` : part))
          .join(" ")
      : name;
  }

  return (
    <Box
      component="section"
      id="testimonial"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        py: { xs: 7, md: 10 },
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "140%", md: "1000px" },
          height: { xs: "140%", md: "700px" },
          background:
            "radial-gradient(circle, rgba(216,179,106,0.06), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ maxWidth: "620px !important", textAlign: "center", position: "relative" }}>
        <Typography
          component="span"
          className="reveal"
          sx={{
            display: "block",
            color: "primary.light",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: { xs: 12.5, md: 14 },
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          + Recommendations
        </Typography>

        <Box
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          <Box
            sx={{
              position: "relative",
              background: "rgba(26, 19, 34, 0.95)",
              backdropFilter: "blur(20px) saturate(110%)",
              WebkitBackdropFilter: "blur(20px) saturate(110%)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              px: { xs: 7, md: 9 },
              py: { xs: 3, md: 4.5 },
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 40px rgba(216,179,106,0.06), 0 24px 48px rgba(0,0,0,0.45)",
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(216,179,106,0.22), transparent)",
              }}
            />

            <Box sx={{ display: "grid" }}>
              {testimonials.map(({ quote, name, title, image }, i) => {
                const isActive = i === active;
                const avatarSrc = image ? imageMap[image] : undefined;
                const displayName = formatDisplayName(name);

                return (
                  <Box
                    key={i}
                    aria-hidden={!isActive}
                    sx={{
                      gridArea: "1 / 1",
                      opacity: isActive && visible ? 1 : 0,
                      transition: `opacity ${FADE_MS}ms ease`,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.light",
                        fontFamily: "Georgia, serif",
                        fontSize: { xs: "5rem", md: "6rem" },
                        lineHeight: 0.5,
                        mb: 3,
                        userSelect: "none",
                        opacity: 0.85,
                      }}
                      aria-hidden
                    >
                      &ldquo;
                    </Typography>

                    <Typography
                      sx={{
                        color: "common.white",
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: 1.75,
                        fontStyle: "italic",
                        mb: 1,
                      }}
                    >
                      {quote}
                    </Typography>

                    {(avatarSrc || name) && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1.5,
                          mt: 4,
                        }}
                      >
                        {avatarSrc && (
                          <Box
                            sx={{
                              width: 76,
                              height: 76,
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "2px solid rgba(216,179,106,0.25)",
                              boxShadow: "0 0 12px rgba(216,179,106,0.12)",
                              flexShrink: 0,
                              position: "relative",
                            }}
                          >
                            <Image
                              src={avatarSrc}
                              alt={displayName ?? ""}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="76px"
                            />
                          </Box>
                        )}
                        {name && (
                          <Box>
                            <Typography
                              sx={{
                                color: "common.white",
                                fontFamily: "var(--font-inter), sans-serif",
                                fontWeight: 600,
                                fontSize: { xs: 15, md: 16 },
                              }}
                            >
                              {displayName}
                            </Typography>
                            {title && (
                              <Typography
                                sx={{
                                  color: "rgba(255,255,255,0.65)",
                                  fontFamily: "var(--font-inter), sans-serif",
                                  fontSize: { xs: 12, md: 13 },
                                  letterSpacing: "0.04em",
                                  mt: 0.5,
                                }}
                              >
                                {title}
                              </Typography>
                            )}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
            {testimonials.length > 1 && (
              <>
                {([{ label: "Previous testimonial", delta: -1, side: "left" }, { label: "Next testimonial", delta: 1, side: "right" }] as const).map(({ label, delta, side }) => (
                  <Box
                    key={side}
                    role="button"
                    aria-label={label}
                    onClick={() => goTo((active + delta + testimonials.length) % testimonials.length)}
                    sx={{
                      position: "absolute",
                      [side]: { xs: 10, md: 14 },
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "1px solid rgba(216,179,106,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(216,179,106,0.65)",
                      fontSize: 20,
                      lineHeight: 1,
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: "rgba(216,179,106,0.1)",
                        border: "1px solid rgba(216,179,106,0.55)",
                        color: "rgba(216,179,106,1)",
                      },
                    }}
                  >
                    {side === "left" ? "‹" : "›"}
                  </Box>
                ))}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
