"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { testimonials } from "../helpers/config";
import testimonialJesh from "../images/testimonial.jpg";

const imageMap: Record<string, StaticImageData> = {
  "testimonial-jesh": testimonialJesh,
};

export default function Testimonial() {
  const { quote, name, title, image } = testimonials[0];
  const avatarSrc = image ? imageMap[image] : undefined;

  return (
    <Box
      component="section"
      id="testimonial"
      sx={{
        py: { xs: 10, md: 14 },
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
            "radial-gradient(circle, rgba(247,215,116,0.06), transparent 65%)",
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
          + Recommendation
        </Typography>

        <Box className="reveal" style={{ transitionDelay: "0.1s" }}>
          <Box
            sx={{
              position: "relative",
              background: "rgba(18, 27, 51, 0.95)",
              backdropFilter: "blur(20px) saturate(110%)",
              WebkitBackdropFilter: "blur(20px) saturate(110%)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              p: { xs: 4, md: 6 },
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 40px rgba(247,215,116,0.06), 0 24px 48px rgba(0,0,0,0.45)",
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
                  "linear-gradient(90deg, transparent, rgba(247,215,116,0.22), transparent)",
              }}
            />

            <Typography
              sx={{
                color: "primary.light",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "6rem", md: "8rem" },
                lineHeight: 0.5,
                mb: 5,
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
                fontSize: { xs: "18px", md: "21px" },
                lineHeight: 1.85,
                fontStyle: "italic",
                mb: 1,
              }}
            >
              {quote}
            </Typography>

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
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(247,215,116,0.25)",
                    boxShadow: "0 0 12px rgba(247,215,116,0.12)",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={avatarSrc!}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100px"
                  />
                </Box>
              )}
              <Box>
                <Typography
                  sx={{
                    color: "common.white",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: 15, md: 16 },
                  }}
                >
                  {name}
                </Typography>
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
