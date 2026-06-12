import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useThemeColor } from "../../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    
    const { themeColor } = useThemeColor();
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

const [activeIndex, setActiveIndex] = useState(0);
  const immersive = [
    "React",
    "GSAP",
    "Three.js",
    "WebGL",
    "Canvas",
    "Framer Motion",
    "Lenis",
    "Blender",
    "Shader",
  ];

  const professional = [
    "TypeScript",
    "Sass / SCSS",
    "Node.js",
    "PHP",
    "WordPress",
    "Twig",
    "Gulp",
    "MySQL",
    "Figma",
  ];

  const info = [
    ["Since", "2021"],
    ["Location", "Riyadh, Saudi Arabia"],
    ["Education", "Engineering — Computer Science"],
    ["Status", "Available"],
    ["CSSDA", "UI · UX · Innovation"],
    ["BestCSS", "Site of the Day"],
  ];

useGSAP(() => {
  gsap.set(".nav-bg", { height: 0 });
  gsap.set(".nav-stack", { height: 0 });
  gsap.set(".nav-info", { height: 0 });

  gsap.set(".background-panel", {
    opacity: 0,
    y: 100,
  });

  gsap.set(".stack-panel", {
    opacity: 0,
    y: 100,
  });

  gsap.set(".info-panel", {
    opacity: 0,
    y: 100,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: pinRef.current,
      anticipatePin: 1,
    },
  });

  // INTRO → BACKGROUND
  tl.to(".intro-panel", {
    opacity: 0,
    y: -80,
    duration: 1,
  });

  tl.to(
    ".nav-bg",
    {
      height: "100%",
      ease: "none",
      duration: 1,
    },
    "<"
  );

  tl.to(
    ".background-panel",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "<"
  );

  // pause
  tl.to({}, { duration: 1 });

  // BACKGROUND → STACK
  tl.to(".background-panel", {
    opacity: 0,
    y: -80,
    duration: 1,
  });

  tl.to(
    ".nav-stack",
    {
      height: "100%",
      ease: "none",
      duration: 1,
    },
    "<"
  );

  tl.to(
    ".stack-panel",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "<"
  );

  // pause
  tl.to({}, { duration: 1 });

  // STACK → INFO
  tl.to(".stack-panel", {
    opacity: 0,
    y: -80,
    duration: 1,
  });

  tl.to(
    ".nav-info",
    {
      height: "100%",
      ease: "none",
      duration: 1,
    },
    "<"
  );

  tl.to(
    ".info-panel",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "<"
  );

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);

const NavItem = ({ label, fillClass }) => (
  <div className="relative overflow-hidden text-xl font-black leading-none">
    <span className="text-gray-500">{label}</span>

    <span
      className={`${fillClass} absolute left-0 bottom-0 h-0 overflow-hidden text-white`}
    >
      {label}
    </span>
  </div>
);
  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh]"
    >
      <div
        ref={pinRef}
        className="sticky top-0 h-screen bg-[#030303] overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[16.66%] top-0 h-full w-px bg-gray-500" />
          <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-500" />
          <div className="absolute right-[16.66%] top-0 h-full w-px  bg-gray-500" />

          <div className="absolute top-0 left-0 w-full h-px  bg-gray-500" />
          <div className="absolute top-1/4 left-0 w-full h-px  bg-gray-500" />
          <div className="absolute top-2/4 left-0 w-full h-px  bg-gray-500" />
          <div className="absolute top-3/4 left-0 w-full h-px  bg-gray-500" />
        </div>

        {/* Right Navigation */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
  <NavItem label="BACKGROUND" fillClass="nav-bg" />
  <NavItem label="STACK" fillClass="nav-stack" />
  <NavItem label="INFO" fillClass="nav-info" />
</div>

        {/* INTRO */}
        <div className="intro-panel absolute inset-0 flex items-center">
          <div className="px-[12%] max-w-7xl">
            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white">
             Creative software engineer crafting modern digital experiences. <br/>

I combine frontend excellence with backend engineering,<br/>
building scalable web applications, automation systems,<br/>
and interactive user interfaces using React, TypeScript,<br/>
Python, and cloud-native technologies.
            </h1>
          </div>
        </div>

        {/* BACKGROUND */}
        <div className="background-panel absolute inset-0 flex items-center">
          <div className="px-[12%] max-w-6xl">
            <div className="mb-8 text-sm text-white marker:tracking-[0.4em] uppercase">
              BACKGROUND
            </div>

            <h2 className="text-7xl lg:text-8xl text-white mb-8">
              Creative Developer
            </h2>

            <p className="text-2xl lg:text-4xl text-gray-500 leading-relaxed max-w-4xl">
              Building immersive digital experiences
              using WebGL, Three.js, React and modern
              motion systems since 2017.
            </p>
          </div>
        </div>

        {/* STACK */}
        <div className="stack-panel absolute inset-0 flex items-center">
          <div className="w-full px-[12%]">
            <div className="grid lg:grid-cols-2 gap-32">
              <div>
                <motion.h1 className="mb-10 text-sm tracking-[0.4em] uppercase"
                animate={{
              color: themeColor,
            }}
                >
                  Immersive
                </motion.h1>

                <div className="space-y-4">
                  {immersive.map((item) => (
                    <div
                      key={item}
                      className="text-xl lg:text-2xl text-white "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h1 className="mb-10 text-sm tracking-[0.4em] uppercase"
                
                    animate={{
              color: themeColor,
            }}>
                  Professional
                </motion.h1 >

                <div className="space-y-4">
                  {professional.map((item) => (
                    <div
                      key={item}
                      className="text-xl lg:text-2xl text-white hover:[themeColor]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="info-panel absolute inset-0 flex items-center">
          <div className="px-[12%]">
            <div className="grid md:grid-cols-2 gap-x-32 gap-y-12">
              {info.map(([title, value]) => (
                <div key={title}>
                  <div className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">
                    {title}
                  </div>

                  <div className="text-xl lg:text-2xl text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Huge Number */}
        <div className="absolute right-0 bottom-[-10%] text-[28rem] font-black text-black/[0.04] leading-none select-none">
          02
        </div>
      </div>
    </section>
  );
}