import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import StyleOutlined from "@mui/icons-material/StyleOutlined";
import ImageOutlined from "@mui/icons-material/ImageOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import ViewQuiltOutlined from "@mui/icons-material/ViewQuiltOutlined";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";

const included = [
  {
    Icon: StyleOutlined,
    title: "Business Cards",
    description: "Professional cards that leave a memorable first impression and keep your contact information close at hand.",
  },
  {
    Icon: ImageOutlined,
    title: "Social Media Graphics",
    description: "Branded graphics and templates designed to keep your business looking consistent across every platform.",
  },
    {
    Icon: LocationOnOutlined,
    title: "Google Business Profiles",
    description: "Optimize your business listing so customers can find you, contact you, and learn more about your services.",
  },
  {
    Icon: ViewQuiltOutlined,
    title: "Website Support",
    description: "Content updates, maintenance, and ongoing improvements to keep your website looking its best.",
  },
  {
    Icon: CampaignOutlined,
    title: "Promotional Materials",
    description: "Flyers, brochures, posters, and other marketing materials designed to support your business offline.",
  },
  {
    Icon: EmailOutlined,
    title: "Email & Digital Assets",
    description: "Email signatures, templates, and digital assets that help your brand stay consistent everywhere it appears.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief",
    description:
      "We start by learning what you need, who it's for, and what you want people to feel or do when they see it. A clear brief sets the whole project up for success.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create initial design concepts that bring your brief to life — on-brand, polished, and built for the format it'll live in, whether that's print, digital, or both.",
  },
  {
    number: "03",
    title: "Revisions",
    description:
      "You review the designs and we refine together. We work through focused feedback rounds until every element is exactly where it needs to be.",
  },
  {
    number: "04",
    title: "Final Files",
    description:
      "We deliver print-ready and web-ready files in all the formats you need — whether that's going straight to a printer or uploading to a social platform.",
  },
];

export default function PromotionalMaterialsPage() {
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
            background:
              "radial-gradient(ellipse, rgba(247,215,116,0.06) 0%, transparent 70%)",
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
            + Business Essentials
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "36px", sm: "52px", md: "64px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Everything you need to show up {' '}
            <Box component="em" sx={{ fontStyle: "italic", color: "primary.main" }}>
              professionally
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
            From business cards and social graphics to website updates and launch support, we help you present your business with confidence.        </Typography>

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

      {/* What's included */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(255,255,255,0.06)",
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
              + What We Include
            </Typography>
            <Typography variant="h3">Everything you need to show up professionally</Typography>
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
                    backgroundColor: "rgba(247,215,116,0.10)",
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

      {/* Process */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 14 }, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
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
                    color: "rgba(247,215,116,0.15)",
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
            + Let&apos;s Design
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Ready to level up your materials?
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
