"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Footer from "../components/Footer";
import ResponsiveMenu from "../components/ResponsiveMenu";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { from_name: string; reply_to: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (fields: Fields): Errors => {
  const errors: Errors = {};
  if (!fields.from_name.trim()) {
    errors.from_name = "Name is required.";
  } else if (fields.from_name.trim().length < 2) {
    errors.from_name = "Name must be at least 2 characters.";
  }
  if (!fields.reply_to.trim()) {
    errors.reply_to = "Email is required.";
  } else if (!EMAIL_REGEX.test(fields.reply_to.trim())) {
    errors.reply_to = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const EMPTY: Fields = { from_name: "", reply_to: "", service: "", message: "" };
type SnackState = { open: boolean; severity: "success" | "error"; text: string };

const contactDetails = [
  {
    Icon: EmailOutlined,
    label: "Email",
    value: "hello@fireflycreativeco.com",
    href: "mailto:hello@fireflycreativeco.com",
  },
  {
    Icon: AccessTimeOutlined,
    label: "Response Time",
    value: "Within one business day",
    href: null,
  },
];

export default function ContactPage() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [snack, setSnack] = useState<SnackState>({ open: false, severity: "success", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) setErrors(validate(updated));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ from_name: true, reply_to: true, service: true, message: true });
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      // TODO: wire up email service
      setSnack({ open: true, severity: "success", text: "Your message was sent — we'll be in touch soon!" });
      setFields(EMPTY);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("Contact form error:", err);
      setSnack({ open: true, severity: "error", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      <ResponsiveMenu />

      {/* Centered hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 8, md: 10 },
          textAlign: "center",
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
            "@media (max-width: 600px)": {
              width: "480px",
              height: "380px",
              top: "-5%",
              background: "radial-gradient(ellipse, rgba(247,215,116,0.05) 0%, transparent 55%)",
            },
          },
        }}
      >
        <Container sx={{ maxWidth: "680px !important", position: "relative", zIndex: 1 }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 11, md: 12 },
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              mb: 2.5,
            }}
          >
            + Get In Touch
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "42px", sm: "60px", md: "76px" }, lineHeight: 1.05, mb: 3 }}
          >
            Let&apos;s Work Together
          </Typography>
          <Typography
            sx={{
              color: "grey.300",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.75,
              maxWidth: 520,
              mx: "auto",
            }}
          >
            Ready to grow your business online? Fill out the form below and we&apos;ll reach out to schedule a free intro call.
          </Typography>
        </Container>
      </Box>

      {/* Contact info strip + form */}
      <Box
        component="section"
        sx={{
          pb: { xs: 12, md: 16 },
        }}
      >
        <Container sx={{ maxWidth: "760px !important" }}>

          {/* Info strip */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "center",
              gap: { xs: 2.5, sm: 6 },
              mb: 7,
            }}
          >
            {contactDetails.map(({ Icon, label, value, href }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: 1.5,
                    border: "1px solid rgba(247,215,116,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ color: "primary.main", fontSize: 16 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "grey.500",
                      lineHeight: 1,
                      mb: 0.4,
                    }}
                  >
                    {label}
                  </Typography>
                  {href ? (
                    <Typography
                      component="a"
                      href={href}
                      sx={{
                        color: "grey.200",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "color 0.2s",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {value}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: "grey.200", fontSize: 14 }}>{value}</Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Form */}
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 11, md: 12 },
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              mb: 4,
            }}
          >
            + Send a Message
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
                <TextField
                  label="Name"
                  name="from_name"
                  value={fields.from_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.from_name}
                  helperText={errors.from_name}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="reply_to"
                  type="email"
                  value={fields.reply_to}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.reply_to}
                  helperText={errors.reply_to}
                  fullWidth
                />
              </Box>
              <TextField
                label="Service of Interest (optional)"
                name="service"
                value={fields.service}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={5}
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.message}
                helperText={errors.message}
                fullWidth
              />
              <Button
                type="submit"
                size="large"
                fullWidth
                sx={{
                  mt: 0.5,
                  py: 1.6,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  backgroundColor: "primary.main",
                  color: "#0B1020",
                  "&:hover": { backgroundColor: "secondary.main" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Container>
      </Box>

      <Footer />

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ width: "100%" }}
        >
          {snack.text}
        </Alert>
      </Snackbar>
    </>
  );
}
