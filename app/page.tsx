import Ambient from "./components/Ambient";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import About from "./components/About";
import Services from "./components/Services";
import Writing from "./components/Writing";
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
        <Writing />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
