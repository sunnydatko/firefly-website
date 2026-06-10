"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "1300px !important" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            + Recent Work
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 4 },
          }}
        >
          {featuredProjects.map((project, index) => (
            <Box
              key={project.name}
              component="a"
              href={project.href}
              className="reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
              sx={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                "&:hover .screenshot-wrap": {
                  borderColor: "rgba(255,255,255,0.18)",
                },
                "&:hover .screenshot-wrap img": {
                  transform: "scale(1.03)",
                },
                "&:hover .screenshot-overlay": {
                  opacity: 1,
                },
              }}
            >
              {/* Screenshot */}
              <Box
                className="screenshot-wrap"
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  mb: 3,
                  transition: "border-color 0.3s ease",
                  "& img": { transition: "transform 0.5s ease" },
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  priority={index === 0}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <Box
                  className="screenshot-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(11,16,32,0.52)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    View Project →
                  </Typography>
                </Box>
              </Box>

              {/* Info */}
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "19px", md: "22px" }, mb: 0.75 }}
              >
                {project.name}
              </Typography>
              <Typography
                sx={{
                  color: "grey.400",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: { xs: 13, md: 14 },
                  letterSpacing: "0.04em",
                  mb: 0.5,
                }}
              >
                {project.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{project.location}
              </Typography>
              <Typography
                sx={{
                  color: "grey.500",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: { xs: 12, md: 13 },
                  letterSpacing: "0.03em",
                }}
              >
                {project.whatWeDid}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
