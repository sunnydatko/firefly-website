import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import AutoFixHighOutlined from "@mui/icons-material/AutoFixHighOutlined";
import FormatColorTextOutlined from "@mui/icons-material/FormatColorTextOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LayersOutlined from "@mui/icons-material/LayersOutlined";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";
import SectionDivider from "../../components/SectionDivider";

const included = [
  {
    Icon: AutoFixHighOutlined,
    title: "Logo Design",
    description: "Multiple original concepts developed from scratch, refined based on your feedback until it's exactly right.",
  },
  {
    Icon: PaletteOutlined,
    title: "Color Palette",
    description: "A curated set of brand colors with hex, RGB, and CMYK values ready for print and digital use.",
  },
  {
    Icon: FormatColorTextOutlined,
    title: "Typography System",
    description: "Font pairings that complement your brand and work beautifully across all touchpoints.",
  },
  {
    Icon: MenuBookOutlined,
    title: "Brand Guidelines",
    description: "A clear reference document showing how to use your brand correctly across every context.",
  },
  {
    Icon: LayersOutlined,
    title: "Logo Variations",
    description: "Primary, secondary, and icon-only versions so your logo looks great at any size and on any background.",
  },
  {
    Icon: DownloadOutlined,
    title: "All File Formats",
    description: "Full-resolution files delivered in SVG, PNG, PDF, and EPS — ready for web, print, and everything in between.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brand Discovery",
    description:
      "Before we sketch a single mark, we dig into your business — your values, your audience, and the feeling you want your brand to evoke. This is the foundation everything else is built on.",
  },
  {
    number: "02",
    title: "Concepts",
    description:
      "We develop a range of distinct logo directions and present them with context — explaining the thinking behind each so you can make an informed choice.",
  },
  {
    number: "03",
    title: "Refinement",
    description:
      "You choose a direction and we refine together through focused revision rounds until every detail — shape, weight, spacing — is exactly right.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We hand over your complete brand package: all logo files, the color palette, typography system, and brand guidelines — everything you need to hit the ground running.",
  },
];

export default function LogoBrandingPage() {
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
            + Logo &amp; Branding
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            A brand that speaks{" "}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              before you do
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
            Your brand is your first impression. We create identities that are distinctive, consistent, and built to grow with you — from a logo that stops the scroll to a visual system your whole business can stand behind.
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
            <Typography variant="h3">Your complete brand identity</Typography>
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
            + Let&apos;s Create
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Ready to build your brand?
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
