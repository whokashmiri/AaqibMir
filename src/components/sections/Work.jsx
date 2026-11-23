import { ArrowUpRight } from "lucide-react";
import { projects } from "../../constants";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper py-20 lg:py-32">
      <div className="shell">
        <h2 id="work-title" className="display reveal text-[clamp(3rem,10vw,8rem)]">
          Work
        </h2>
        <ul className="mt-10 border-b-2 border-ink lg:mt-16">
          {projects.map((project) => (
            <li key={project.id} className="reveal border-t-2 border-ink">
              <Row project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ project: { name, year, context, skills, url } }) {
  const Tag = url ? "a" : "div";
  const linkProps = url ? { href: url, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag
      {...linkProps}
      className="group relative isolate grid gap-x-8 gap-y-3 overflow-hidden py-6 lg:grid-cols-12 lg:items-baseline lg:py-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-left scale-x-0 bg-ground transition-transform duration-300 ease-arrive group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
      <h3 className="display text-[clamp(2.25rem,6vw,5rem)] transition-transform duration-300 ease-arrive lg:col-span-6 motion-safe:lg:group-hover:translate-x-4">
        {name}
        {url && (
          <>
            <ArrowUpRight className="ml-2 inline h-[0.6em] w-[0.6em]" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </>
        )}
      </h3>
      <p className="font-medium tabular-nums lg:col-span-2">
        {year}, {context}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 lg:col-span-4 lg:pr-4">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Tag>
  );
}
