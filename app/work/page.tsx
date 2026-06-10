import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";
import ResponsiveMenu from "../components/ResponsiveMenu";

const projects = [
  {
    client: "Rosestone Jewelry",
    category: "Website + Branding",
    year: "2025",
    description:
      "Custom e-commerce site and full brand identity for a master goldsmith. Included logo design, color palette, and a product showcase built to highlight handcrafted pieces.",
    tags: ["Web Design", "Branding", "E-Commerce"],
    accent: "rgba(247,215,116,0.12)",
    accentBorder: "rgba(247,215,116,0.25)",
  },
  {
    client: "Harlow & Co.",
    category: "Website",
    year: "2024",
    description:
      "Redesigned website for a boutique interior design studio. Focused on editorial layout and high-impact imagery to attract luxury residential clients.",
    tags: ["Web Design", "CMS", "SEO"],
    accent: "rgba(180,150,220,0.10)",
    accentBorder: "rgba(180,150,220,0.22)",
  },
  {
    client: "Maple Street Bakery",
    category: "Full Package",
    year: "2024",
    description:
      "Logo, brand guidelines, printed menus, and a new website with an online ordering integration — everything from scratch for a neighborhood bakery opening.",
    tags: ["Branding", "Print", "Web Design"],
    accent: "rgba(247,180,96,0.10)",
    accentBorder: "rgba(247,180,96,0.22)",
  },
  {
    client: "Summit Coaching",
    category: "Website + Promotional",
    year: "2024",
    description:
      "Website and marketing materials for an executive coach launching a group program. Included landing page, email template, and social media graphics.",
    tags: ["Web Design", "Social Graphics", "Email"],
    accent: "rgba(100,200,180,0.10)",
    accentBorder: "rgba(100,200,180,0.22)",
  },
  {
    client: "Vela Creative Studio",
    category: "Branding",
    year: "2023",
    description:
      "Complete brand identity for a Brooklyn-based creative agency — wordmark, icon, brand board, and a style guide handed off for in-house use.",
    tags: ["Logo Design", "Brand Guidelines", "Typography"],
    accent: "rgba(220,130,130,0.10)",
    accentBorder: "rgba(220,130,130,0.22)",
  },
  {
    client: "Drift Coffee",
    category: "Website + Print",
    year: "2023",
    description:
      "Website refresh and printed materials for a specialty coffee shop — menus, loyalty cards, and a new site optimized for local search.",
    tags: ["Web Design", "SEO", "Print"],
    accent: "rgba(160,120,80,0.12)",
    accentBorder: "rgba(160,120,80,0.25)",
  },
];

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
            Every project is a partnership. Here are a few of the businesses we've helped bring to life online.
          </Typography>
        </Container>
      </Box>

      {/* Projects grid */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Container sx={{ maxWidth: "1100px !important" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {projects.map(({ client, category, year, description, tags, accent, accentBorder }) => (
              <Box
                key={client}
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, transform 0.3s",
                  "&:hover": {
                    borderColor: accentBorder,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Color band */}
                <Box
                  sx={{
                    height: 6,
                    backgroundColor: accentBorder,
                  }}
                />

                <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {/* Meta row */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "grey.500",
                      }}
                    >
                      {category}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 12,
                        color: "grey.600",
                      }}
                    >
                      {year}
                    </Typography>
                  </Box>

                  <Typography variant="h5" sx={{ fontSize: { xs: "18px", md: "20px" }, mb: 1.5 }}>
                    {client}
                  </Typography>

                  <Typography
                    sx={{ color: "grey.300", fontSize: "14px", lineHeight: 1.75, mb: 3, flexGrow: 1 }}
                  >
                    {description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: 11,
                          height: 24,
                          borderColor: accentBorder,
                          color: "grey.400",
                        }}
                      />
                    ))}
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
              color: "#0B1020",
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
