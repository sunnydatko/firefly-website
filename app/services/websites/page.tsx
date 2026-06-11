import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import SpeedOutlined from "@mui/icons-material/SpeedOutlined";
import PhoneIphoneOutlined from "@mui/icons-material/PhoneIphoneOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SupportAgentOutlined from "@mui/icons-material/SupportAgentOutlined";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";
import SectionDivider from "../../components/SectionDivider";

const included = [
  {
    Icon: LanguageOutlined,
    title: "Custom Design",
    description: "Every page designed from scratch to reflect your brand — no templates, no shortcuts.",
  },
  {
    Icon: PhoneIphoneOutlined,
    title: "Mobile-Friendly",
    description: "Looks and works beautifully on every screen size, from desktop to phone.",
  },
  {
    Icon: SpeedOutlined,
    title: "Performance Optimized",
    description: "Fast load times and clean code built to score high on Core Web Vitals.",
  },
  {
    Icon: SearchOutlined,
    title: "SEO Foundations",
    description: "Proper structure, meta tags, and best practices so search engines can find you.",
  },
  {
    Icon: SupportAgentOutlined,
    title: "Launch & Support",
    description: "We walk you through your site at launch and make sure you feel confident owning it.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep conversation about your business, your customers, and your goals. This shapes every design and development decision we make.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "You'll see full page mockups before a single line of code is written. We refine together until the design feels exactly right.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Once the design is approved, we build your site with clean, performant code — setting you up for speed, reliability, and growth.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle the technical setup, domain, and hosting configuration. Then we hand the keys to you with a full walkthrough.",
  },
];

export default function WebsitesPage() {
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
            background:
              "radial-gradient(ellipse, rgba(242,193,90,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container sx={{ maxWidth: "900px !important", position: "relative", zIndex: 1 }}>
          <Link
            href="/#services"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "grey.500",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              fontWeight: 500,
              mb: 6,
              "& .arrow": { transition: "transform 0.3s" },
              "&:hover": {
                color: "grey.300",
                "& .arrow": { transform: "translateX(-4px)" },
              },
            }}
          >
            <Box component="span" className="arrow" aria-hidden>←</Box> Services
          </Link>

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
            + Websites
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            A digital home your{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              customers will love
            </Box>
          </Typography>

          <Box
            sx={{
              width: 52,
              height: 2,
              borderRadius: 1,
              bgcolor: "primary.main",
              mb: 3,
            }}
          />

          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: 1.75,
              maxWidth: 600,
              mb: 5,
            }}
          >
            We design and build custom websites from the ground up — beautiful, fast, and built to turn visitors into customers. No templates. No shortcuts.
          </Typography>

          <Button
            href="/contact"
            variant="contained"
            sx={{
              fontSize: { xs: 12, md: 13 },
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              px: { xs: 3, md: 3.5 },
              py: 1.5,
              backgroundColor: "primary.main",
              color: "#0B1020",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Start Your Project
          </Button>
        </Container>
      </Box>

      <SectionDivider />

      {/* What's included */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
        }}
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
              + What&apos;s Included
            </Typography>
            <Typography variant="h3">Everything your site needs to succeed</Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {included.map(({ Icon, title, description }) => (
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
                    backgroundColor: "rgba(242,193,90,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <Icon sx={{ color: "primary.main", fontSize: 22 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "16px", md: "17px" }, mb: 1 }}
                >
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

      {/* Process */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 14 } }}
      >
        <Container sx={{ maxWidth: "860px !important" }}>
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
              + Our Process
            </Typography>
            <Typography variant="h3">How it works</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map(({ number, title, description }, i) => (
              <Box
                key={number}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "160px 1fr" },
                  gap: { xs: 1.5, md: 4 },
                  py: { xs: 4, md: 5 },
                  borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: { xs: "36px", md: "52px" },
                    fontWeight: 700,
                    color: "rgba(242,193,90,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {number}
                </Typography>
                <Box sx={{ pt: { xs: 0, md: 1 } }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: "18px", md: "22px" }, mb: 1.5 }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: "grey.300", fontSize: { xs: "15px", md: "17px" }, lineHeight: 1.75 }}>
                    {description}
                  </Typography>
                </Box>
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
            + Let&apos;s Build
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Ready to build your website?
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
            Tell us about your business and we&apos;ll get back to you within one business day.
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
