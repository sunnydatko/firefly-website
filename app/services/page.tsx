import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import Footer from "../components/Footer";
import ResponsiveMenu from "../components/ResponsiveMenu";

const services = [
  {
    Icon: LanguageOutlined,
    title: "Websites",
    description:
      "Custom-designed websites that are fast, mobile-friendly, and built to convert visitors into customers.",
    features: ["Custom design", "Mobile friendly", "Performance optimized"],
    href: "/services/websites",
  },
  {
    Icon: PaletteOutlined,
    title: "Logo & Branding",
    description:
      "A distinctive brand identity that sets you apart — from logo design to a cohesive visual language.",
    features: ["Logo design", "Brand colors", "Visual style guide", "Brand guidelines"],
    href: "/services/logo-branding",
  },
  {
    Icon: CampaignOutlined,
    title: "Business Essentials",
    description:
      "Everything you need to launch with confidence — from business cards and social graphics to basic SEO setup and ongoing website support.",
    features: ["Business cards", "Social media graphics", "Google Business Profiles", "Basic SEO setup"],
    href: "/services/business-essentials",
  },
];

export default function ServicesPage() {
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
          borderBottom: "1px solid rgba(255,255,255,0.06)",
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
            background: "radial-gradient(ellipse, rgba(247,215,116,0.06) 0%, transparent 70%)",
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
            + Services
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Everything you need to{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              grow online
            </Box>
          </Typography>

          <Box sx={{ width: 52, height: 2, borderRadius: 1, bgcolor: "primary.main", mb: 3 }} />

          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: 1.75,
              maxWidth: 620,
            }}
          >
            From your first logo to a fully launched website, we handle every piece of your digital
            presence so you can focus on running your business.
          </Typography>
        </Container>
      </Box>

      {/* Services grid */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Container sx={{ maxWidth: "1100px !important" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {services.map(({ Icon, title, description, features, href }) => (
              <Box
                key={title}
                component="a"
                href={href}
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
                    borderColor: "rgba(247,215,116,0.3)",
                    transform: "translateY(-4px)",
                    "& .card-arrow": { transform: "translateX(4px)", opacity: 1 },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 1.5,
                    backgroundColor: "rgba(247,215,116,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Icon sx={{ color: "primary.main", fontSize: 24 }} />
                </Box>

                <Typography variant="h5" sx={{ fontSize: { xs: "18px", md: "20px" }, mb: 1.5 }}>
                  {title}
                </Typography>

                <Typography sx={{ color: "grey.300", fontSize: "14px", lineHeight: 1.7, mb: 3 }}>
                  {description}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    p: 0,
                    m: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {features.map((feature) => (
                    <Box
                      component="li"
                      key={feature}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                        fontSize: "13px",
                        color: "grey.400",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      {feature}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 3,
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
                  Learn more
                  <Box
                    component="span"
                    className="card-arrow"
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
            + Not Sure Where to Start?
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Let&apos;s figure it out together
          </Typography>
          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.7,
              mb: 5,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            Tell us about your business and goals, and we&apos;ll recommend the right services for where you are right now.
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
              color: "#0B1020",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
