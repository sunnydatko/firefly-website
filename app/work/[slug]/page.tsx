import Image from "next/image";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";
import SectionDivider from "../../components/SectionDivider";
import { featuredProjects } from "../../data/featuredProjects";
import { pageMetadata } from "../../lib/seo";

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} — Small Business Case Study`,
    description: `${project.whatWeDid} for ${project.name}, a small business in ${project.location}.`,
    path: project.href,
    imageAlt: `${project.name} case study`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const nextProject = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length];

  return (
    <>
      <ResponsiveMenu />

      {/* Hero screenshot */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 6, md: 8 },
          backgroundColor: "background.default",
        }}
      >
        <Container sx={{ maxWidth: "1300px !important" }}>
          {/* Back link */}
          <Box
            component="a"
            href="/work"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "grey.500",
              textDecoration: "none",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 13,
              letterSpacing: "0.06em",
              mb: 5,
              transition: "color 0.2s",
              "&:hover": { color: "primary.main" },
            }}
          >
            ← All Work
          </Box>

          {/* Screenshot */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 1300px) 100vw, 1300px"
            />
          </Box>
        </Container>
      </Box>

      {/* Project header */}
      <Box
        component="section"
        sx={{
          pt: { xs: 6, md: 8 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container sx={{ maxWidth: "900px !important" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "36px", sm: "48px", md: "60px" }, lineHeight: 1.1, mb: 2 }}
          >
            {project.name}
          </Typography>
          <Typography
            sx={{
              color: "grey.400",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: { xs: 14, md: 15 },
              letterSpacing: "0.04em",
              mb: 5,
            }}
          >
            {project.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{project.location}
          </Typography>

          {/* Meta strip */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 4, md: 6 },
              pt: 4,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "grey.600",
                  mb: 0.75,
                }}
              >
                Year
              </Typography>
              <Typography sx={{ color: "grey.300", fontSize: 15 }}>{project.year}</Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "grey.600",
                  mb: 0.75,
                }}
              >
                Services
              </Typography>
              <Typography sx={{ color: "grey.300", fontSize: 15 }}>
                {project.services.join("  ·  ")}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Case study sections — only render when content is added */}
      {(project.overview || project.challenge || project.solution || project.result) && (
        <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
          <Container sx={{ maxWidth: "760px !important" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 10 } }}>

              {project.overview && (
                <CaseStudySection label="Overview" body={project.overview} />
              )}
              {project.challenge && (
                <CaseStudySection label="The Brief" body={project.challenge} />
              )}
              {project.solution && (
                <CaseStudySection label="What We Did" body={project.solution} />
              )}
              {project.result && (
                <CaseStudySection label="The Result" body={project.result} />
              )}

            </Box>
          </Container>
        </Box>
      )}

      <SectionDivider />

      {/* Next project */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 12 },
        }}
      >
        <Container sx={{ maxWidth: "1300px !important" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "grey.600",
              mb: 3,
            }}
          >
            Next Project
          </Typography>
          <Box
            component="a"
            href={nextProject.href}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              color: "inherit",
              gap: 4,
              "&:hover .next-arrow": { transform: "translateX(6px)" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "28px", md: "40px" }, mb: 0.5 }}>
                {nextProject.name}
              </Typography>
              <Typography sx={{ color: "grey.400", fontFamily: "var(--font-inter), sans-serif", fontSize: 14 }}>
                {nextProject.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{nextProject.location}
              </Typography>
            </Box>
            <Box
              className="next-arrow"
              sx={{
                fontSize: { xs: 28, md: 40 },
                color: "primary.main",
                transition: "transform 0.3s ease",
                flexShrink: 0,
              }}
            >
              →
            </Box>
          </Box>
        </Container>
      </Box>

      <SectionDivider />

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          textAlign: "center",
        }}
      >
        <Container sx={{ maxWidth: "600px !important" }}>
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
            + Your Project
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Want to be next?
          </Typography>
          <Button
            href="/contact"
            variant="contained"
            sx={{
              fontSize: { xs: 12, md: 13 },
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              px: { xs: 3.5, md: 4 },
              py: 1.6,
              backgroundColor: "primary.main",
              color: "#0B1020",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Start a Project
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

function CaseStudySection({ label, body }: { label: string; body: string }) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "primary.light",
          mb: 2,
        }}
      >
        + {label}
      </Typography>
      <Typography
        sx={{
          color: "grey.300",
          fontSize: { xs: "16px", md: "18px" },
          lineHeight: 1.8,
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}
