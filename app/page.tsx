import Ambient from "./components/Ambient";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <Ambient />
      <ResponsiveMenu />
      <ScrollReveal />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <ValueProps />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        {/* <FeaturedProjects /> */}{/* hidden until projects approved */}
        <SectionDivider />
        <Testimonial />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
