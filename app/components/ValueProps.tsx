"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesOutlined from "@mui/icons-material/TipsAndUpdatesOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";

const props = [
  {
    Icon: TipsAndUpdatesOutlined,
    title: "Strategy",
  },
  {
    Icon: PaletteOutlined,
    title: "Design",
  },
  {
    Icon: CodeOutlined,
    title: "Development",
  },
];

export default function ValueProps() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        mt: "-14px",
        background: "linear-gradient(to bottom, #0D0B14 55%, rgba(13,11,20,0) 100%)",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {props.map(({ Icon, title }) => (
        <Box
          key={title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 5.5 },
          }}
        >
          <Icon
            sx={{
              color: "#D8B36A",
              fontSize: 34,
              mt: "-14px",
              mb: 2.5,
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
              color: "#F2E8CF",
            }}
          >
            {title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
