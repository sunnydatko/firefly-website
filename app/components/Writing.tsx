"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import balancedBodyworks from "../images/projects/balanced-bodyworks.png";
import genivere from "../images/projects/genivere.png";

const projects = [
  {
    name: "Balanced Bodyworks",
    tagline: "Therapeutic Bodywork",
    location: "Oceanside, CA",
    image: balancedBodyworks,
    href: "/work",
  },
  {
    name: "Genivere",
    tagline: "Personal Portfolio",
    location: "San Diego, CA",
    image: genivere,
    href: "/work",
  },
];

export default function Writing() {
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
      <Container sx={{ maxWidth: "1100px !important" }}>
        <Box className="reveal" sx={{ textAlign: "center", mb: 8 }}>
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
              mb: 2,
            }}
          >
            + Recent Work
          </Typography>
          <Typography variant="h3">Featured Work</Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 8, md: 6 },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={project.name}
              className="reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {/* Screenshot */}
              <Box
                component="a"
                href={project.href}
                sx={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  mb: 3,
                  textDecoration: "none",
                  "&:hover img": { transform: "scale(1.03)" },
                  "&:hover": { borderColor: "rgba(255,255,255,0.16)" },
                  transition: "border-color 0.3s ease",
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
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Box>

              {/* Info */}
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "22px", md: "26px" }, mb: 0.75 }}
              >
                {project.name}
              </Typography>
              <Typography
                sx={{
                  color: "grey.400",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: { xs: 13, md: 14 },
                  letterSpacing: "0.04em",
                  mb: 2.5,
                }}
              >
                {project.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{project.location}
              </Typography>
              <Box>
                <Button
                  href={project.href}
                  variant="outlined"
                  size="small"
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    px: 2.5,
                    py: 1,
                    borderColor: "rgba(255,255,255,0.18)",
                    color: "grey.300",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
