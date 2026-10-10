"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { testimonials } from "../helpers/data";
import testimonialRosestone from "../images/testimonial/rosestone-jewelry.webp";
import testimonialTasha from "../images/testimonial/tasha-rae-jewelry.webp";
import testimonialBeInTouch from "../images/testimonial/be-in-touch.webp";
import testimonialBB from "../images/testimonial/bb.webp";
import testimonialMichelleBaker from "../images/testimonial/michelle-baker.webp";
import testimonialPerez from "../images/testimonial/perez.webp";
import testimonialShure from "../images/testimonial/shure.webp";

const imageMap: Record<string, StaticImageData> = {
  "rosestone-jewelry": testimonialRosestone,
  "tasha-rae-jewelry": testimonialTasha,
  "be-in-touch": testimonialBeInTouch,
  bb: testimonialBB,
  "michelle-baker": testimonialMichelleBaker,
  perez: testimonialPerez,
  shure: testimonialShure,
};

function formatDisplayName(name: string | undefined) {
  return name
    ? name
        .trim()
        .split(/\s+/)
        .map((part, i, arr) => (i === arr.length - 1 && arr.length > 1 ? `${part[0]}.` : part))
        .join(" ")
    : name;
}

export default function Testimonial() {
  return (
    <Box
      component="section"
      id="testimonial"
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
          width: { xs: "140%", md: "1200px" },
          height: { xs: "140%", md: "800px" },
          background:
            "radial-gradient(circle, rgba(216,179,106,0.06), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ maxWidth: "980px !important", position: "relative" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
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
              mb: 2.5,
            }}
          >
            + Recommendations
          </Typography>
          <Typography
            className="reveal"
            style={{ transitionDelay: "0.1s" }}
            variant="h3"
            sx={{ textWrap: "balance" }}
          >
            Kind words from people we&rsquo;ve worked with
          </Typography>
        </Box>

        <Box
          component="ul"
          className="reveal"
          style={{ transitionDelay: "0.15s" }}
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            columns: { xs: "1", sm: "2" },
            columnGap: { xs: 0, sm: 3.5 },
          }}
        >
          {testimonials.map(({ quote, name, title, image }, i) => {
            const avatarSrc = image ? imageMap[image] : undefined;
            const displayName = formatDisplayName(name);

            return (
              <Box
                component="li"
                key={i}
                sx={{
                  breakInside: "avoid",
                  mb: 3.5,
                  position: "relative",
                  background: "rgba(26, 19, 34, 0.95)",
                  backdropFilter: "blur(16px) saturate(110%)",
                  WebkitBackdropFilter: "blur(16px) saturate(110%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: { xs: 3.5, md: 4.5 },
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 32px rgba(216,179,106,0.05), 0 16px 32px rgba(0,0,0,0.35)",
                }}
              >
                <Typography
                  aria-hidden
                  sx={{
                    color: "primary.light",
                    fontFamily: "Georgia, serif",
                    fontSize: "2.75rem",
                    lineHeight: 0.5,
                    mb: 2,
                    userSelect: "none",
                    opacity: 0.5,
                  }}
                >
                  &ldquo;
                </Typography>

                <Typography
                  component="blockquote"
                  sx={{
                    m: 0,
                    color: "common.white",
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  {quote}
                </Typography>

                {(avatarSrc || name) && (
                  <Box
                    component="figcaption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: 3.5,
                    }}
                  >
                    {avatarSrc && (
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "2px solid rgba(216,179,106,0.25)",
                          flexShrink: 0,
                          position: "relative",
                        }}
                      >
                        <Image
                          src={avatarSrc}
                          alt=""
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="48px"
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
                            fontSize: 14.5,
                          }}
                        >
                          {displayName}
                        </Typography>
                        {title && (
                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.65)",
                              fontFamily: "var(--font-inter), sans-serif",
                              fontSize: 12,
                              letterSpacing: "0.02em",
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
      </Container>
    </Box>
  );
}
