import { about } from "../../constants";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ink py-20 text-paper lg:py-32">
      <div className="shell">
        <h2
          id="about-title"
          className="display reveal max-w-[14ch] text-[clamp(2rem,8.2vw,7rem)] text-ground"
        >
          {about.heading}
        </h2>

        <div className="mt-12 grid gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          <p className="reveal max-w-[58ch] text-xl leading-relaxed lg:col-span-7 lg:text-2xl lg:leading-relaxed">
            {about.body}
          </p>

          <dl className="reveal self-start lg:col-span-4 lg:col-start-9">
            {about.facts.map(([term, value]) => (
              <div
                key={term}
                className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-t border-paper/30 py-3 last:border-b"
              >
                <dt className="text-paper-soft">{term}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          {about.stack.map(({ title, items }) => (
            <div key={title} className="reveal lg:col-span-6">
              <h3 className="border-b-2 border-ground pb-3 text-lg font-semibold text-ground">
                {title}
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
                {items.map((item) => (
                  <li key={item} className="border-b border-paper/30 py-3 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
