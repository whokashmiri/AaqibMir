import { useEffect, useState } from "react";

// Returns the id of the section crossing the upper third of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          setActive((current) =>
            entry.isIntersecting ? id : current === id ? null : current
          );
        }
      },
      { rootMargin: "-33% 0px -66% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
