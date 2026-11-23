import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-2 z-50 -translate-y-24 bg-ink px-4 py-3 text-paper focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}
