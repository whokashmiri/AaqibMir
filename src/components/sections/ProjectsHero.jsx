export default function ProjectsHero() {
  return (
    <section className="relative w-full h-screen bg-[#f8f8f8] overflow-hidden">

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="flex items-center font-black uppercase tracking-tight">
          <span className="text-[150px] lg:text-[180px]">&gt;</span>

          <span className="mx-6 text-[170px] lg:text-[180px] leading-none">
            PROJECTS
          </span>

          <span className="text-[150px] lg:text-[180px]">&lt;</span>
        </h1>
      </div>


     
    </section>
  );
}