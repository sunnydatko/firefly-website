"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    elevated: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#FFD878",  // Glow
      main: "#F2C15A",   // Gold
      dark: "#C9A840",
    },
    secondary: {
      light: "#FFE9A0",
      main: "#FFD878",   // Glow
      dark: "#C9A840",
    },
    error: {
      light: "#FFD29A",
      main: "#FFB454",
      dark: "#C97A17",
    },
    background: {
      default: "#0B1020",   // Midnight
      paper: "#151B33",     // Indigo
      elevated: "#2A3347",  // Slate
    },
    text: {
      primary: "#F8F5EE",
      secondary: "#9A9890",
    },
    grey: {
      100: "#F8F5EE",
      200: "#E8E4DA",
      300: "#C8C4B8",
      400: "#9A9890",
      500: "#6E6C66",
      600: "#4A4840",
      700: "#2E2C28",
      800: "#1A1916",
      900: "#0B0A08",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-fraunces), serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#F2C15A",
          transition: "color 0.3s",
          position: "relative",
          paddingBottom: "3px",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            borderRadius: "4px",
            backgroundColor: "#FFD878",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#FFD878",
            "&::before": {
              transformOrigin: "left",
              transform: "scaleX(1)",
            },
          },
        },
      },
    },
  },
});

export default theme;
