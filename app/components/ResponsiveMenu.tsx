"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import BrandMark from "./BrandMark";

const drawerWidth = 320;

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Work", href: "/work" }, // hidden until projects approved
];

export default function ResponsiveMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.05);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <BrandMark height={30} />
      </Box>
      <Divider sx={{ borderColor: "rgba(242,193,90,0.12)" }} />
      <List>
        {[...navItems, { name: "Let's Glow", href: "/contact" }].map(({ name, href }) => {
          const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
          return (
            <ListItem key={name} disablePadding>
              <ListItemButton
                component="a"
                href={href}
                sx={{ textAlign: "center" }}
              >
                <ListItemText
                  primary={name}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontSize: 12,
                        color: isActive ? "primary.main" : "inherit",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: transparent ? "transparent" : "rgba(11,16,32,0.82)",
          backdropFilter: transparent ? "blur(0px)" : "blur(16px)",
          WebkitBackdropFilter: transparent ? "blur(0px)" : "blur(16px)",
          borderBottom: transparent ? "1px solid transparent" : "1px solid rgba(242,193,90,0.08)",
          transition: "background-color 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ gap: 0, minHeight: { xs: 76, md: 80 }, pt: { xs: 1, md: 1.5 } }}>
          <IconButton
            aria-label="open navigation"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#F2C15A", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link
            href="/"
            aria-label="Home"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: 0,
              "&::before": { display: "none" },
              transition: "filter 0.25s ease",
              filter: "brightness(1)",
              "&:hover": {
                filter: "brightness(1.15) drop-shadow(0 0 8px rgba(242,193,90,0.35))",
              },
              flexShrink: 0,
            }}
          >
            <BrandMark height={44} />
          </Link>

          {/* Desktop nav — right aligned */}
          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0,
            }}
          >
            {navItems.map(({ name, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
              return (
                <Button
                  key={name}
                  href={href}
                  sx={{
                    color: isActive ? "primary.main" : "rgba(248,245,238,0.65)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    px: 1.75,
                    py: 1,
                    borderRadius: 0,
                    "&:hover": {
                      color: "primary.light",
                      backgroundColor: "transparent",
                    },
                  }}
                  variant="text"
                >
                  {name}
                </Button>
              );
            })}
            <Button
              href="/contact"
              variant="outlined"
              sx={{
                ml: 2,
                px: 2.5,
                py: 1,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderColor: "#F2C15A",
                color: "#F2C15A",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                "&:hover": {
                  borderColor: "#FFD878",
                  color: "#FFD878",
                  backgroundColor: "rgba(242,193,90,0.06)",
                },
              }}
            >
              Let&apos;s Glow
            </Button>
          </Box>

          {/* Tablet nav (sm only) — right aligned */}
          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", sm: "flex", md: "none" },
              alignItems: "center",
              gap: 0,
            }}
          >
            {navItems.slice(0, 3).map(({ name, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
              return (
                <Button
                  key={name}
                  href={href}
                  sx={{
                    color: isActive ? "primary.main" : "rgba(248,245,238,0.65)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    px: 1.5,
                    borderRadius: 0,
                    "&:hover": { color: "primary.light", backgroundColor: "transparent" },
                  }}
                  variant="text"
                >
                  {name}
                </Button>
              );
            })}
            <Button
              href="/contact"
              variant="outlined"
              sx={{
                ml: 1.5,
                px: 2,
                py: 0.75,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderColor: "#F2C15A",
                color: "#F2C15A",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                "&:hover": {
                  borderColor: "#FFD878",
                  color: "#FFD878",
                  backgroundColor: "rgba(242,193,90,0.06)",
                },
              }}
            >
              Let&apos;s Glow
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "background.paper",
            borderRight: "1px solid rgba(242,193,90,0.08)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
