"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesOutlined from "@mui/icons-material/TipsAndUpdatesOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import HandshakeOutlined from "@mui/icons-material/HandshakeOutlined";

const props = [
  {
    Icon: TipsAndUpdatesOutlined,
    title: "Strategy",
    description: "Purposeful websites built around your goals.",
  },
  {
    Icon: PaletteOutlined,
    title: "Design",
    description: "Custom visuals that reflect your brand.",
  },
  {
    Icon: CodeOutlined,
    title: "Development",
    description: "Fast, responsive, modern websites.",
  },
  {
    Icon: HandshakeOutlined,
    title: "Support",
    description: "Ongoing help after launch.",
  },
];

export default function ValueProps() {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(to bottom, #0B1020 55%, rgba(11,16,32,0) 100%)",
        borderTop: "1px solid rgba(242,193,90,0.10)",
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
      }}
    >
      {props.map(({ Icon, title, description }, i) => (
        <Box
          key={title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
            borderRight: {
              xs: i % 2 === 0 ? "1px solid rgba(242,193,90,0.10)" : "none",
              md: i < 3 ? "1px solid rgba(242,193,90,0.10)" : "none",
            },
            borderBottom: {
              xs: i < 2 ? "1px solid rgba(242,193,90,0.10)" : "none",
              md: "none",
            },
          }}
        >
          <Icon
            sx={{
              color: "#F2C15A",
              fontSize: 34,
              mb: 2,
              opacity: 0.9,
            }}
          />
          <Typography
            sx={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F8F5EE",
              mb: 1.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              lineHeight: 1.65,
              color: "rgba(248,245,238,0.55)",
              maxWidth: 180,
            }}
          >
            {description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
