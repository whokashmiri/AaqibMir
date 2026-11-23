import { navLinks } from "../../constants";
import { useActiveSection } from "../../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export default function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-ground text-ink transition-colors duration-300">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#main" className="inline-flex min-h-11 items-center font-semibold">
          Aaqib<span className="hidden sm:inline">&nbsp;Bashir</span>&nbsp;Mir
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-4 sm:gap-8">
            {navLinks.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className="inline-flex min-h-11 items-center border-y-4 border-transparent font-medium transition-colors duration-150 hover:border-b-ink aria-[current=true]:border-b-ink"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
