export default function AboutSection() {
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

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16.66%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute right-[16.66%] top-0 h-full w-px bg-white/10" />

        <div className="absolute top-[180px] left-0 w-full h-px bg-white/10" />
        <div className="absolute top-[520px] left-0 w-full h-px bg-white/10" />
        <div className="absolute top-[820px] left-0 w-full h-px bg-white/10" />
      </div>

 

      {/* Intro */}
      <div className="flex justify-between px-20 pl-[18%] pt-20">
        <div className="max-w-6xl">
          <h1 className="font-black leading-[0.95] tracking-[-0.06em] text-[clamp(4rem,6vw,7rem)]">
            Creative developer specializing in WebGL and Three.js.
            <br />
            My work has been recognized by international juries
            (Awwwards Honorable Mention, Site of The Day,
            BestCSS, CSSDA).
            <br />
            I build interactive web interfaces with React, GSAP and
            Three.js.
          </h1>
        </div>

        <div className="w-64 flex flex-col items-end gap-6 font-black text-4xl">
          <span>BACKGROUND</span>
          <span className="text-white/15">STACK</span>
          <span className="text-white/15">INFO</span>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-40 px-[18%] pt-40 pb-32">
        <div>
          <div className="text-yellow-400 text-xs tracking-[0.4em] mb-10">
            IMMERSIVE
          </div>

          <div className="space-y-8">
            {immersive.map((item) => (
              <div
                key={item}
                className="text-5xl md:text-6xl font-black tracking-tight"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-yellow-400 text-xs tracking-[0.4em] mb-10">
            PROFESSIONAL
          </div>

          <div className="space-y-8">
            {professional.map((item) => (
              <div
                key={item}
                className="text-5xl md:text-6xl font-black tracking-tight"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-[-120px] right-[-40px] text-[32rem] font-black leading-none text-white/[0.03] select-none">
        02
      </div>
    </section>
  );
}