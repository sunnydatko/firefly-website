"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#FBE9A8",
      main: "#F7D774",
      dark: "#C9A840",
    },
    secondary: {
      light: "#F8D090",
      main: "#F4B860",
      dark: "#C08830",
    },
    error: {
      light: "#FFD29A",
      main: "#FFB454",
      dark: "#C97A17",
    },
    background: {
      default: "#0B1020",
      paper: "#121B33",
    },
    text: {
      primary: "#F8F5EE",
      secondary: "#AAB8A0",
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
          color: "#F7D774",
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
            backgroundColor: "#F4B860",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#F4B860",
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
