/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-soft": "rgb(var(--paper-soft) / <alpha-value>)",
        globe: "rgb(var(--globe) / <alpha-value>)",
        ground: "var(--ground)",

        // Names the shadcn map component expects.
        border: "rgb(var(--ink) / <alpha-value>)",
        background: "rgb(var(--paper) / <alpha-value>)",
        foreground: "rgb(var(--ink) / <alpha-value>)",
        "muted-foreground": "rgb(var(--paper-soft) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Archivo Variable"', "Arial", "sans-serif"],
        sans: ['"Space Grotesk Variable"', "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        arrive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
