"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        pt: { xs: 8, md: 11 },
        pb: { xs: 10, md: 14 },
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Top fade — the Hero section above ends fully opaque, so without this the
          fixed ambient aura layer (which Hero paints over) suddenly reveals itself
          right at the section boundary, reading as a hard line. This tapers that
          reveal in gradually instead of an on/off cut. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 120, md: 200 },
          background: "linear-gradient(to bottom, #0D0B14 0%, rgba(13,11,20,0) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "860px !important",
        }}
      >
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
            mb: 2,
          }}
        >
          + About Us
        </Typography>

        <Typography className="reveal" style={{ transitionDelay: "0.1s" }} variant="h3" sx={{ mb: 4 }}>
          Beautiful websites backed by strategy and support
        </Typography>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.2s" }}
          sx={{
            color: "grey.300",
            fontSize: { xs: "17px", md: "21px" },
            lineHeight: 1.7,
            mb: 0,
            maxWidth: "620px",
            mx: "auto",
          }}
        >
          From branding and design to SEO and ongoing support, we help small businesses attract customers, build trust, and grow with confidence.
        </Typography>
      </Container>
    </Box>
  );
}
