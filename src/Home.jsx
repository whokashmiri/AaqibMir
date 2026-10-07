import Hero from "./components/sections/Hero";
import CreativeHero from "./components/sections/CreativeHero";
import Contact from "./components/sections/Contact";
import AboutSection from "./components/sections/AboutSection";
import SeeMyWorkSection from "./components/sections/SeeMyWorkSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsHero from "./components/sections/ProjectsHero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeHero />
      <SeeMyWorkSection />
      <Contact />
      <AboutSection />
      <ContactSection />
      <ProjectsHero />
      <Projects />
    </>
  );
}