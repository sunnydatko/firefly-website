"use client";

import Box from "@mui/material/Box";

export default function SectionDivider() {
  return (
    <Box
      aria-hidden
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 0.5, md: 1 },
        px: { xs: 4, md: 8 },
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left line */}
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to right, transparent 0%, rgba(216,179,106,0.18) 50%, rgba(216,179,106,0.32) 100%)",
          maxWidth: 380,
        }}
      />

      {/* Ornament cluster */}
      <Box
        sx={{
          mx: 2.5,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Small outer dot */}
        <Box
          sx={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            bgcolor: "rgba(216,179,106,0.35)",
            flexShrink: 0,
          }}
        />

        {/* Central sparkle */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 0 5px rgba(216,179,106,0.55))",
            flexShrink: 0,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0 Q6.3 4.5 5.5 5.5 Q4.5 6.3 0 7 Q4.5 7.7 5.5 8.5 Q6.3 9.5 7 14 Q7.7 9.5 8.5 8.5 Q9.5 7.7 14 7 Q9.5 6.3 8.5 5.5 Q7.7 4.5 7 0 Z"
              fill="#D8B36A"
            />
          </svg>
        </Box>

        {/* Small outer dot */}
        <Box
          sx={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            bgcolor: "rgba(216,179,106,0.35)",
            flexShrink: 0,
          }}
        />
      </Box>

      {/* Right line */}
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to left, transparent 0%, rgba(216,179,106,0.18) 50%, rgba(216,179,106,0.32) 100%)",
          maxWidth: 380,
        }}
      />
    </Box>
  );
}
