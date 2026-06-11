"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const skills = [
  "Web Design",
  "Branding",
  "Google Business Profiles",
  "Ongoing Support"
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container
        sx={{
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
          Beautiful websites backed by strategy, design, and ongoing support
        </Typography>

        <Box
          className="reveal"
          style={{ transitionDelay: "0.2s" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
            mb: 4,
            justifyContent: "center",
          }}
        >
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Box>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.3s" }}
          sx={{
            color: "grey.300",
            fontSize: { xs: "17px", md: "21px" },
            lineHeight: 1.7,
            mb: 0,
          }}
        >
          We create beautiful, effective websites for small businesses. From branding and design to SEO and ongoing support, we build digital experiences that help you attract customers, build trust, and grow with confidence.
        </Typography>
      </Container>
    </Box>
  );
}
