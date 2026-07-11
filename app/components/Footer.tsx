import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import BrandMark from "./BrandMark";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
];

const linkSx = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "rgba(242,232,207,0.45)",
  paddingBottom: 0,
  "&::before": { display: "none" },
  "&:hover": {
    color: "primary.light",
  },
  transition: "color 0.2s ease",
};

const Footer = () => (
  <Box
    className="footer"
    component="footer"
    sx={{ borderTop: "1px solid rgba(242,232,207,0.08)" }}
  >
    <Box sx={{ padding: "32px 0 24px" }}>
      <Container>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4.75 }}>
          <Link
            href="/"
            aria-label="Home"
            underline="none"
            sx={{
              display: "inline-flex",
              paddingBottom: 0,
              "&::before": { display: "none" },
              opacity: 0.7,
              transition: "opacity 0.2s ease",
              "&:hover": { opacity: 1 },
            }}
          >
            <BrandMark height={30} />
          </Link>
        </Box>

        {/* Nav links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: "16px 24px", sm: "16px 32px" },
            mb: 2,
          }}
        >
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} sx={linkSx}>
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            sx={{
              ...linkSx,
              color: "rgba(216,179,106,0.55)",
              "&:hover": { color: "primary.main" },
            }}
          >
            Let&apos;s Glow
          </Link>
        </Box>

        <Divider sx={{ borderColor: "rgba(242,232,207,0.06)", mb: 2 }} />

        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(242,232,207,0.45)",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 11,
            letterSpacing: "0.06em",
          }}
        >
          &copy; {new Date().getFullYear()} Firefly. All rights reserved.
        </Typography>
      </Container>
    </Box>
  </Box>
);

export default Footer;
