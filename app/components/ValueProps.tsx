"use client";

import Box from "@mui/material/Box";
import TipsAndUpdatesOutlined from "@mui/icons-material/TipsAndUpdatesOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";

const props = [
  { Icon: TipsAndUpdatesOutlined, title: "Strategy" },
  { Icon: PaletteOutlined, title: "Design" },
  { Icon: CodeOutlined, title: "Development" },
];

export default function ValueProps() {
  return (
    <Box
      component="section"
      aria-label="Strategy, design, and development"
      sx={{
        background: "linear-gradient(to bottom, #0D0B14 55%, rgba(13,11,20,0) 100%)",
        borderTop: "1px solid rgba(216,179,106,0.10)",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {props.map(({ Icon, title }, i) => (
        <Box
          key={title}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 4, md: 5 },
            borderRight: i < props.length - 1 ? "1px solid rgba(216,179,106,0.10)" : "none",
          }}
        >
          <Icon
            titleAccess={title}
            sx={{
              color: "#D8B36A",
              fontSize: 34,
              opacity: 0.9,
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
