"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { from_name: string; reply_to: string; message: string };
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

const EMPTY: Fields = { from_name: "", reply_to: "", message: "" };

type SnackState = { open: boolean; severity: "success" | "error"; text: string };

export default function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [snack, setSnack] = useState<SnackState>({ open: false, severity: "success", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ from_name: true, reply_to: true, message: true });
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");

      setSnack({
        open: true,
        severity: "success",
        text: "✨ Thanks for reaching out — I'll get back to you within one business day.",
      });
      setFields(EMPTY);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("Contact form error:", err);
      setSnack({ open: true, severity: "error", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "760px !important" }}>
        <Box className="reveal" sx={{ textAlign: "center", mb: { xs: 4, md: 3.5 } }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            + Let's Connect
          </Typography>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Let&apos;s Work Together
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: "480px",
              mx: "auto",
              fontSize: { xs: 14.5, md: 15.5 },
              lineHeight: 1.7,
            }}
          >
            Tell me about your project, your goals, or even just an idea — I&apos;d love to hear
            what you&apos;re building.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="reveal"
          sx={{ position: "relative", transitionDelay: "0.1s" }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: { xs: "-24px -12px", md: "-48px -64px" },
              background:
                "radial-gradient(ellipse 60% 55% at 50% 42%, rgba(216,179,106,0.08), rgba(216,179,106,0.025) 45%, transparent 72%)",
              filter: "blur(28px)",
              mixBlendMode: "screen",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              margin: "0 auto",
              width: { xs: "100%", sm: "90%", md: "70%" },
            }}
          >
            <TextField
              label="Name"
              name="from_name"
              value={fields.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.from_name && errors.from_name)}
              helperText={touched.from_name && errors.from_name}
            />
            <TextField
              label="Email"
              name="reply_to"
              type="email"
              value={fields.reply_to}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.reply_to && errors.reply_to)}
              helperText={touched.reply_to && errors.reply_to}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={7}
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.message && errors.message)}
              helperText={touched.message && errors.message}
            />
            <Button
              size="large"
              type="submit"
              sx={{
                alignSelf: "center",
                mt: 2.25,
                width: { xs: "100%", sm: "80%", md: "75%" },
                py: 1.4,
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
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
    </Box>
  );
}
