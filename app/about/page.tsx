import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LightbulbOutlined from "@mui/icons-material/LightbulbOutlined";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import HandshakeOutlined from "@mui/icons-material/HandshakeOutlined";
import Footer from "../components/Footer";
import ResponsiveMenu from "../components/ResponsiveMenu";
import SectionDivider from "../components/SectionDivider";

const skills = [
  "Web Design",
  "Branding",
  "Website Support",
  "Google Business Profiles",
  "Mobile-Friendly",
  "Marketing Materials",
];

const values = [
  {
    Icon: LightbulbOutlined,
    title: "Creativity First",
    description:
      "We treat every project as a blank canvas. No templates, no shortcuts — just original design that reflects who you are.",
  },
  {
    Icon: FavoriteOutlined,
    title: "Small Business Heart",
    description:
      "We exist to serve small businesses. We understand your constraints, celebrate your wins, and invest in your growth like it's our own.",
  },
  {
    Icon: HandshakeOutlined,
    title: "Partnership Over Transactions",
    description:
      "We don't disappear after launch. We build lasting relationships so you always have someone in your corner as your business evolves.",
  },
];

export default function AboutPage() {
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
            background: "radial-gradient(ellipse, rgba(247,215,116,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container sx={{ maxWidth: "860px !important", position: "relative", zIndex: 1 }}>
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
            + About Us
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            A studio built for{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              small businesses
            </Box>
          </Typography>

          <Box sx={{ width: 52, height: 2, borderRadius: 1, bgcolor: "primary.main", mb: 3 }} />

          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: 1.75,
              maxWidth: 620,
              mb: 5,
            }}
          >
            We create websites, brands, and digital experiences that help small businesses compete with confidence. Every project gets the personal attention and thoughtful craftsmanship it deserves.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25, mb: 2 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Box>
        </Container>
      </Box>

      <SectionDivider />

      {/* Our Story */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 14 } }}
      >
        <Container sx={{ maxWidth: "860px !important" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 10 },
              alignItems: "center",
            }}
          >
            <Box>
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
                + Our Story
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Why we started Firefly
              </Typography>
              <Typography sx={{ color: "grey.300", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.8, mb: 3 }}>
                We started Firefly because we kept seeing the same problem: small businesses with incredible
                products and services being held back by outdated, generic, or nonexistent websites.
              </Typography>
              <Typography sx={{ color: "grey.300", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.8 }}>
                Every business deserves a digital presence that tells its story, earns trust, and drives
                real results — not just something that checks a box. So we built a studio where craft,
                strategy, and personal service come together.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "background.paper",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 2,
                p: { xs: 3.5, md: 4.5 },
              }}
            >
              {[
                { stat: "100%", label: "Custom designs — no templates" },
                { stat: "1 day", label: "Response time, guaranteed" },
                { stat: "Small", label: "Studio with personal attention" },
              ].map(({ stat, label }) => (
                <Box
                  key={stat}
                  sx={{
                    py: 2.5,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    "&:last-child": { borderBottom: "none", pb: 0 },
                    "&:first-of-type": { pt: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: { xs: "32px", md: "40px" },
                      fontWeight: 700,
                      color: "primary.main",
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {stat}
                  </Typography>
                  <Typography sx={{ color: "grey.400", fontSize: "14px" }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <SectionDivider />

      {/* Values */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 14 } }}
      >
        <Container sx={{ maxWidth: "1100px !important" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
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
              + What We Believe
            </Typography>
            <Typography variant="h3">Our values</Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {values.map(({ Icon, title, description }) => (
              <Box
                key={title}
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 2,
                  p: { xs: 3, md: 3.5 },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1.5,
                    backgroundColor: "rgba(247,215,116,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <Icon sx={{ color: "primary.main", fontSize: 22 }} />
                </Box>
                <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "17px" }, mb: 1 }}>
                  {title}
                </Typography>
                <Typography sx={{ color: "grey.300", fontSize: "14px", lineHeight: 1.7 }}>
                  {description}
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
            + Let&apos;s Work Together
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Ready to grow your business online?
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
            Tell us about your project and we&apos;ll get back to you within one business day.
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
