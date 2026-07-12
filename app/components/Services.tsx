"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import RocketLaunchOutlined from "@mui/icons-material/RocketLaunchOutlined";

const services = [
  {
    Icon: LanguageOutlined,
    title: "Websites",
    startingFrom: "Starting from $800",
    description:
      "Custom-designed websites that are fast, mobile-friendly, and built to convert visitors into customers.",
    href: "/services/websites",
  },
  {
    Icon: PaletteOutlined,
    title: "Logo & Branding",
    startingFrom: "Starting from $500",
    description:
      "A distinctive brand identity that sets you apart — from logo design to a cohesive visual language.",
    href: "/services/logo-branding",
  },
  {
    Icon: RocketLaunchOutlined,
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
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            gap: 3,
          }}
        >
          {services.map(({ Icon, title, startingFrom, description, href }, i) => (
            <Box
              key={title}
              component="a"
              href={href}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              sx={{
                backgroundColor: "background.paper",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 2,
                p: { xs: 3.5, md: 4 },
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.3s, transform 0.3s",
                "&:hover": {
                  borderColor: "rgba(216,179,106,0.3)",
                  transform: "translateY(-4px)",
                  "& .row-arrow": { transform: "translateX(4px)", opacity: 1 },
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 1.5,
                  backgroundColor: "rgba(216,179,106,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Icon sx={{ color: "primary.main", fontSize: 24 }} />
              </Box>

              <Typography variant="h5" sx={{ fontSize: { xs: "18px", md: "20px" }, mb: 0.75 }}>
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
                  mb: 2,
                }}
              >
                {startingFrom}
              </Typography>

              <Typography sx={{ color: "grey.300", fontSize: "14px", lineHeight: 1.7, mb: 3 }}>
                {description}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  pt: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "primary.main",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
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
