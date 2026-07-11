import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";
import ResponsiveMenu from "../components/ResponsiveMenu";
import SectionDivider from "../components/SectionDivider";
import { featuredProjects } from "../data/featuredProjects";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Small Business Website & Branding Portfolio",
  description:
    "See how Firefly Creative Co has helped small businesses launch beautiful, effective websites and brand identities.",
  path: "/work",
  imageAlt: "Firefly Creative Co Portfolio",
  keywords: ["small business website portfolio", "web design case studies", "small business branding examples"],
});

export default function WorkPage() {
  return (
    <>
      <ResponsiveMenu />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          backgroundColor: "background.default",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(216,179,106,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container sx={{ maxWidth: "900px !important", position: "relative", zIndex: 1 }}>
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
            + Our Work
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Projects we&apos;re{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              proud of
            </Box>
          </Typography>

          <Box sx={{ width: 52, height: 2, borderRadius: 1, bgcolor: "primary.main", mb: 3 }} />

          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: 1.75,
              maxWidth: 600,
            }}
          >
            Every project is a partnership. Here are a few of the businesses we&apos;ve helped bring to life online.
          </Typography>
        </Container>
      </Box>

      <SectionDivider />

      {/* Featured projects */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container sx={{ maxWidth: "1300px !important" }}>
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
                      backgroundColor: "rgba(13,11,20,0.52)",
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

      <SectionDivider />

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 12, md: 16 } }}>
        <Container sx={{ maxWidth: "700px !important", textAlign: "center" }}>
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
            + Your Project
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Want to be next?
          </Typography>
          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.7,
              mb: 5,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            We&apos;d love to hear about your business and what you&apos;re trying to build.
          </Typography>
          <Button
            href="/contact"
            variant="contained"
            sx={{
              fontSize: { xs: 12, md: 13 },
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              px: { xs: 3.5, md: 4 },
              py: 1.6,
              backgroundColor: "primary.main",
              color: "#0D0B14",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Start a Project
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
