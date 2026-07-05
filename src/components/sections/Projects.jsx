import { useRef } from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projects = [
   {projectName: "CÉLIA", year: 2025, school: "Gobelins", skills: ["Site internet", "WebGL", "Three.js", "React Three Fiber", "GSAP"], id: 1},
   {projectName: "ANNA", year: 2024, school: "Gobelins", skills: ["Site internet", "WebGL", "Three.js", "React Three Fiber", "GSAP"], id: 2},
   {projectName: "LUCAS", year: 2023, school: "Gobelins", skills: ["Site internet", "WebGL", "Three.js", "React Three Fiber", "GSAP"], id: 3},
   {projectName: "MIA", year: 2022, school: "Gobelins", skills: ["Site internet", "WebGL", "Three.js", "React Three Fiber", "GSAP"], id: 4},
  ];

  const active = 0;

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#cfa696] text-white">

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

        <p className="text-4xl mb-6">
          {String(active + 1).padStart(2, "0")}
        </p>

        <p className="text-3xl mb-5">
          2025 • Gobelins
        </p>

        <h1 className="text-[140px] font-bold uppercase leading-none">
          CÉLIA
        </h1>

        <div className="flex gap-10 mt-12 text-xl">
          <span>Site internet</span>
          <span>WebGL</span>
          <span>Three.js</span>
          <span>React Three Fiber</span>
          <span>GSAP</span>
        </div>

      </div>

      {/* RIGHT PROJECT LIST */}

      <div className="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3">

        {projects.map((project, index) => (
          <ProjectItem
    key={project.id}
    project={project}
    index={index}
    active={active}
/>
        ))}

      </div>

    </section>
  );
}