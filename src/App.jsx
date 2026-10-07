import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import JourneyLoader from "./components/loader/JourneyLoader";
import Hero from "./components/sections/Hero";
import CreativeHero from "./components/sections/CreativeHero";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import SeeMyWorkSection from "./components/sections/SeeMyWorkSection";
import ProjectsHero from "./components/sections/ProjectsHero";
import Projects from "./components/sections/Projects";

function LandingPage() {
  return (
    <>
      <Hero />
      <CreativeHero />
      <AboutSection />
      <ContactSection />
      <SeeMyWorkSection />
      <ProjectsHero />
      <Projects />
    </>
  );
}

export default function App() {
  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return <JourneyLoader onFinish={() => setLoading(false)} />;
  // }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
