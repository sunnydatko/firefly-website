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
      light: "#E8CE94",  // Glow
      main: "#D8B36A",   // Gold
      dark: "#B8934F",
    },
    secondary: {
      light: "#F0DDAE",
      main: "#E8CE94",   // Glow
      dark: "#B8934F",
    },
    error: {
      light: "#FFD29A",
      main: "#FFB454",
      dark: "#C97A17",
    },
    background: {
      default: "#0D0B14",   // Midnight
      paper: "#1A1322",     // Plum
      elevated: "#2B1D3B",  // Aubergine
    },
    text: {
      primary: "#F2E8CF",
      secondary: "#9C8CA0",
    },
    grey: {
      100: "#F2E8CF",
      200: "#E3D6C8",
      300: "#C6B6BC",
      400: "#9C8CA0",
      500: "#756580",
      600: "#4F4358",
      700: "#362C3E",
      800: "#211A28",
      900: "#120E17",
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
        contained: {
          backgroundImage:
            "linear-gradient(180deg, #E2C48A 0%, #D8B36A 50%, #AC8848 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 2px 8px rgba(0,0,0,0.2)",
          transition:
            "background-image 0.35s ease, box-shadow 0.35s ease, transform 0.2s ease",
          "&:hover": {
            backgroundImage:
              "linear-gradient(180deg, #D9AE72 0%, #C99A4C 55%, #96702F 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -2px 6px rgba(150,105,40,0.35), 0 6px 16px rgba(0,0,0,0.3)",
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(242,232,207,0.03)",
          borderRadius: 4,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(242,232,207,0.18)",
            transition: "border-color 0.3s ease",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(216,179,106,0.5)",
          },
          "&:hover": {
            backgroundColor: "rgba(242,232,207,0.05)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(242,232,207,0.05)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D8B36A",
            borderWidth: "1px",
            boxShadow: "0 0 0 4px rgba(216,179,106,0.08)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(242,232,207,0.55)",
          "&.Mui-focused": {
            color: "#D8B36A",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 4,
          marginLeft: 2,
          fontSize: "0.8125rem",
          "&.Mui-error": {
            color: "rgba(196,138,86,0.82)",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#D8B36A",
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
            backgroundColor: "#E8CE94",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#E8CE94",
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
