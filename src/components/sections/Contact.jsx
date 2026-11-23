import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../../constants";
import { grounds, useTheme } from "../../context/ThemeContext";

const copyLabels = {
  idle: "Copy address",
  copied: "Copied",
  failed: "Couldn't copy. Select the address above.",
};

export default function Contact() {
  const { ground, chooseGround } = useTheme();
  const [copyState, setCopyState] = useState("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const id = setTimeout(() => setCopyState("idle"), 3000);
    return () => clearTimeout(id);
  }, [copyState]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const CopyIcon = copyState === "copied" ? Check : Copy;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-ground text-ink transition-colors duration-300"
    >
      <div className="shell pt-20 lg:pt-32">
        <h2 id="contact-title" className="display reveal text-[clamp(3rem,12.5vw,12rem)]">
          Get in touch
        </h2>

        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block min-h-11 text-[clamp(1.375rem,3.6vw,3.25rem)] font-medium leading-tight tracking-tight underline decoration-2 underline-offset-[0.2em] [overflow-wrap:anywhere] hover:decoration-4"
            >
              {profile.email}
            </a>
            <div className="mt-6">
              <button type="button" onClick={copy} className="button button-line">
                <CopyIcon size={18} aria-hidden="true" />
                <span aria-live="polite">{copyLabels[copyState]}</span>
              </button>
            </div>
          </div>

          <ul className="lg:col-span-4">
            {profile.links.map(({ label, value, href }) => (
              <li key={label} className="border-t-2 border-ink last:border-b-2">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-between gap-4 py-3 transition-colors duration-150 hover:bg-ink hover:text-paper lg:px-3"
                >
                  <span>
                    <span className="font-semibold">{label}</span> {value}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-20 flex flex-col gap-6 border-t-2 border-ink py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <p className="[text-wrap:balance]">
            © {new Date().getFullYear()} Aaqib Bashir Mir, {profile.location}
          </p>
          <div role="group" aria-label="Page colour" className="flex gap-2">
            {grounds.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => chooseGround(option)}
                aria-pressed={option.id === ground.id}
                aria-label={option.label}
                title={option.label}
                className="grid h-11 w-11 cursor-pointer place-items-center border-2 border-ink"
                style={{ backgroundColor: option.hex }}
              >
                {option.id === ground.id && <Check size={20} aria-hidden="true" />}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
