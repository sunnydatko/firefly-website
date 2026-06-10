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

export default function Home() {
  return (
    <>
      <Ambient />
      <ResponsiveMenu />
      <ScrollReveal />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <ValueProps />
        <About />
        <Services />
        {/* <FeaturedProjects /> */}{/* hidden until projects approved */}
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
