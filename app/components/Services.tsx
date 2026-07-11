"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const services = [
  {
    title: "Websites",
    startingFrom: "Starting from $800",
    description:
      "Custom-designed websites that are fast, mobile-friendly, and built to convert visitors into customers.",
    href: "/services/websites",
  },
  {
    title: "Logo & Branding",
    startingFrom: "Starting from $500",
    description:
      "A distinctive brand identity that sets you apart — from logo design to a cohesive visual language.",
    href: "/services/logo-branding",
  },
  {
    title: "Business Essentials",
    startingFrom: "Starting from $299",
    description:
      "Everything you need to launch with confidence — from business cards and social graphics to basic SEO setup and ongoing website support.",
    href: "/services/business-essentials",
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "1100px !important" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
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
            + Services
          </Typography>
          <Typography
            className="reveal"
            style={{ transitionDelay: "0.1s" }}
            variant="h3"
            sx={{ mb: 3 }}
          >
            Everything you need to grow online
          </Typography>
          <Typography
            className="reveal"
            style={{ transitionDelay: "0.2s" }}
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.7,
              maxWidth: 620,
              mx: "auto",
            }}
          >
            From your first logo to your fully launched website, we take care of the details so you can focus on growing your business.
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {services.map(({ title, startingFrom, description, href }, i) => (
            <Box
              key={title}
              component="a"
              href={href}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 1.5, sm: 4 },
                py: { xs: 4, md: 5 },
                borderBottom: "1px solid rgba(255,255,255,0.09)",
                textDecoration: "none",
                color: "inherit",
                transition: "padding-left 0.3s ease",
                "&:hover": {
                  pl: { xs: 0, sm: 1.5 },
                  "& .row-arrow": { transform: "translateX(4px)", opacity: 1 },
                  "& .row-title": { color: "primary.main" },
                },
              }}
            >
              <Box sx={{ flex: { sm: "0 0 260px" } }}>
                <Typography
                  className="row-title"
                  variant="h4"
                  sx={{
                    fontSize: { xs: "24px", md: "28px" },
                    transition: "color 0.3s ease",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(216,179,106,0.65)",
                    mt: 0.75,
                  }}
                >
                  {startingFrom}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "grey.300",
                  fontSize: { xs: "15px", md: "17px" },
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "primary.main",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Learn More
                <Box
                  component="span"
                  className="row-arrow"
                  sx={{ transition: "transform 0.25s, opacity 0.25s", opacity: 0.7 }}
                >
                  →
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
