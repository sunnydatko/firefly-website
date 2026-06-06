import { notFound } from "next/navigation";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { blogPosts } from "../../helpers/config";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";
import blog1 from "../../images/blog-1.png";
import blog2 from "../../images/blog-2.png";

const imageMap: Record<string, StaticImageData> = {
  "blog-1": blog1,
  "blog-2": blog2,
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h4"
    sx={{
      color: "common.white",
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: { xs: "20px", md: "24px" },
      mt: 6,
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "grey.300",
      fontFamily: "var(--font-inter), sans-serif",
      fontSize: { xs: 15, md: 17 },
      lineHeight: 1.8,
      mb: 2.5,
    }}
  >
    {children}
  </Typography>
);

const Ul = ({ items }: { items: string[] }) => (
  <Box
    component="ul"
    sx={{
      pl: 3,
      mb: 2.5,
      "& li": {
        color: "grey.300",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: { xs: 15, md: 17 },
        lineHeight: 1.8,
        mb: 1,
      },
    }}
  >
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </Box>
);

const articleContent: Record<string, React.ReactNode> = {
  "building-a-design-system-that-scales": (
    <>
      <P>
        As products grow, so do the challenges of maintaining consistency. What
        starts as a handful of reusable components can quickly evolve into dozens
        of patterns, competing implementations, and subtle design inconsistencies
        spread across multiple teams.
      </P>
      <P>
        A design system is often viewed as a collection of UI components, but
        successful systems provide much more than that. They establish a shared
        language between design and engineering, reduce duplicated effort, and
        create a foundation that allows teams to move faster without sacrificing
        quality.
      </P>

      <Heading>The Challenge of Growth</Heading>
      <P>
        Most products don&apos;t begin with a dedicated design system. Teams move
        quickly, prioritize shipping features, and optimize for short-term
        delivery. Over time, this often results in multiple versions of similar
        components, inconsistent styling decisions, and increasing maintenance
        costs.
      </P>
      <P>Common symptoms include:</P>
      <Ul
        items={[
          "Several button variations serving the same purpose",
          "Inconsistent spacing and typography across pages",
          "Repeated styling logic throughout the codebase",
          "Accessibility behaviors implemented differently between teams",
          "Increased effort required to maintain and update UI patterns",
        ]}
      />
      <P>
        These issues rarely appear overnight. Instead, they accumulate gradually
        as products evolve.
      </P>

      <Heading>Start with Foundations</Heading>
      <P>
        Before building components, establish foundational design decisions.
      </P>
      <P>These often include:</P>
      <Ul
        items={[
          "Color tokens",
          "Typography scales",
          "Spacing systems",
          "Border radius values",
          "Elevation and shadow patterns",
          "Interaction states",
        ]}
      />
      <P>
        By defining these primitives first, teams can build components on top of
        a consistent foundation rather than introducing new values with every
        implementation.
      </P>
      <P>
        When foundational decisions are centralized, updates become significantly
        easier. A single change can propagate throughout the entire system
        instead of requiring manual updates across dozens of screens.
      </P>

      <Heading>Components Are Products</Heading>
      <P>
        One of the most valuable mindset shifts is treating components as
        products rather than implementation details.
      </P>
      <P>Well-designed components should be:</P>
      <Ul
        items={[
          "Flexible without being overly complex",
          "Accessible by default",
          "Well documented",
          "Consistent across use cases",
          "Easy to adopt",
        ]}
      />
      <P>
        A component&apos;s success isn&apos;t measured by how many props it
        supports. It&apos;s measured by how effectively it solves common
        interface problems while remaining simple to use.
      </P>
      <P>
        The goal is not to create infinitely customizable components. The goal
        is to create reliable building blocks that encourage consistency.
      </P>

      <Heading>Documentation Matters</Heading>
      <P>
        Even the best component library will struggle without clear
        documentation.
      </P>
      <P>Documentation should answer questions such as:</P>
      <Ul
        items={[
          "When should this component be used?",
          "When should it not be used?",
          "What variants are available?",
          "What accessibility considerations exist?",
          "What common patterns should teams follow?",
        ]}
      />
      <P>
        Good documentation reduces uncertainty and helps maintain consistency as
        organizations grow.
      </P>
      <P>
        More importantly, it lowers the barrier to adoption for new team
        members.
      </P>

      <Heading>Design and Engineering Partnership</Heading>
      <P>
        Design systems are most successful when they are owned collaboratively.
      </P>
      <P>
        Designers contribute visual language, interaction patterns, and
        usability considerations. Engineers contribute implementation details,
        accessibility expertise, and long-term maintainability.
      </P>
      <P>
        Neither discipline can create an effective design system in isolation.
      </P>
      <P>
        Strong collaboration helps ensure that components are both visually
        consistent and technically sustainable.
      </P>

      <Heading>Measure Adoption, Not Component Count</Heading>
      <P>
        A common mistake is evaluating success based on the number of components
        created.
      </P>
      <P>
        A large component library does not necessarily indicate a healthy system.
      </P>
      <P>More meaningful indicators include:</P>
      <Ul
        items={[
          "Reduced implementation time for new features",
          "Improved consistency across products",
          "Increased accessibility compliance",
          "Higher component adoption rates",
          "Reduced UI-related defects",
        ]}
      />
      <P>
        The goal is not to build more components. The goal is to make product
        development easier and more consistent.
      </P>

      <Heading>Looking Ahead</Heading>
      <P>
        Design systems are never truly finished. They evolve alongside products,
        teams, and user needs.
      </P>
      <P>
        The most successful systems balance stability with flexibility. They
        provide enough structure to maintain consistency while remaining
        adaptable to future requirements.
      </P>
      <P>
        When approached thoughtfully, a design system becomes more than a UI
        library. It becomes a shared foundation that enables teams to build
        better products faster, with greater confidence and consistency.
      </P>
    </>
  ),
  "building-systems-not-screens": (
    <>
      <P>
        When people think about frontend development, they often think about
        screens.
      </P>
      <P>Buttons. Forms. Navigation. Dashboards.</P>
      <P>
        Those are certainly part of the job, but the most impactful frontend
        work rarely starts with individual screens. Instead, it starts with
        systems.
      </P>
      <P>
        As products grow, complexity tends to grow with them. New features
        introduce new requirements. Teams expand. Design evolves. What once felt
        simple becomes increasingly difficult to maintain.
      </P>
      <P>The challenge is rarely building a single interface.</P>
      <P>
        The challenge is building a foundation that allows hundreds of
        interfaces to evolve together.
      </P>

      <Heading>The Cost of Local Decisions</Heading>
      <P>
        Most technical debt doesn&apos;t come from bad engineers making poor
        decisions. It comes from reasonable decisions made in isolation.
      </P>
      <P>A team needs a button variation for a new feature.</P>
      <P>Another team introduces a slightly different form layout.</P>
      <P>
        A third team creates its own implementation of a common pattern because
        it was faster than finding an existing solution.
      </P>
      <P>Each decision makes sense in the moment.</P>
      <P>Collectively, they create fragmentation.</P>
      <P>
        Over time, products become collections of exceptions rather than
        systems.
      </P>

      <Heading>Thinking in Foundations</Heading>
      <P>The most sustainable products are built on shared foundations.</P>
      <P>These foundations often include:</P>
      <Ul
        items={[
          "Design tokens",
          "Component libraries",
          "Accessibility standards",
          "Shared patterns",
          "Architectural conventions",
        ]}
      />
      <P>The goal isn&apos;t restriction.</P>
      <P>The goal is alignment.</P>
      <P>
        When teams operate from a shared foundation, they spend less time
        solving the same problems repeatedly and more time creating value for
        users.
      </P>

      <Heading>Systems Create Velocity</Heading>
      <P>It&apos;s easy to assume that standards slow teams down.</P>
      <P>In practice, the opposite is often true.</P>
      <P>A well-designed system reduces decision fatigue.</P>
      <P>
        Instead of debating spacing, typography, interaction states, and
        implementation details for every feature, teams can focus on solving the
        unique problems that matter.
      </P>
      <P>Consistency becomes the default rather than the exception.</P>
      <P>As products scale, this compounds.</P>
      <P>
        A small investment in shared foundations can save hundreds of hours
        across an organization.
      </P>

      <Heading>The Human Side of Architecture</Heading>
      <P>Technical systems are only part of the equation.</P>
      <P>The best systems also create alignment between people.</P>
      <P>
        Designers, engineers, and product managers benefit from shared language
        and shared expectations.
      </P>
      <P>
        When everyone understands the building blocks, collaboration becomes
        easier.
      </P>
      <P>Communication becomes clearer.</P>
      <P>Decisions become more predictable.</P>
      <P>Architecture is ultimately about creating clarity.</P>
      <P>Not just for code, but for teams.</P>

      <Heading>Looking Forward</Heading>
      <P>Technology changes quickly.</P>
      <P>Frameworks evolve. Tools improve. Best practices shift.</P>
      <P>
        What tends to last are the principles behind strong systems:
        consistency, clarity, maintainability, and thoughtful design.
      </P>
      <P>Products are built one feature at a time.</P>
      <P>Great platforms are built through systems.</P>
      <P>
        The most valuable engineering work often isn&apos;t the screen users
        see today—it&apos;s the foundation that enables everything that comes
        next.
      </P>
    </>
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = articleContent[slug];

  return (
    <>
      <ResponsiveMenu />

      {/* Hero image — full bleed, nav overlays it */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 280, sm: 380, md: 500 },
        }}
      >
        <Image
          src={imageMap[post.image]}
          alt={post.title}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        {/* Gradient fades image into page background */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,13,26,0.2) 40%, rgba(8,13,26,1) 100%)",
          }}
        />
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          pb: { xs: 10, md: 16 },
        }}
      >
        <Container sx={{ maxWidth: "740px !important" }}>
          {/* Back link */}
          <Link
            href="/#blog"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "grey.500",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              fontWeight: 500,
              mb: 6,
              "& .arrow": { transition: "transform 0.3s" },
              "&:hover": {
                color: "grey.300",
                "& .arrow": { transform: "translateX(-4px)" },
              },
            }}
          >
            <Box component="span" className="arrow" aria-hidden>
              ←
            </Box>{" "}
            Back
          </Link>

          {/* Article header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              {post.category}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "common.white",
                fontSize: { xs: "28px", md: "40px" },
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              {post.title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "grey.400",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 12,
                    borderRadius: "999px",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.08)",
              mb: 6,
            }}
          />

          {/* Article body */}
          <Box>{content}</Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
