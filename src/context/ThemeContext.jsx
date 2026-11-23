import { createContext, useContext, useLayoutEffect, useState } from "react";

// One ground colour per visit. Every ground carries ink text at 7:1 or better.
export const grounds = [
  { id: "saffron", label: "Saffron", hex: "#F6A81C" },
  { id: "chinar", label: "Chinar", hex: "#FF7A45" },
  { id: "almond", label: "Almond blossom", hex: "#F5A3C7" },
  { id: "dal", label: "Dal Lake", hex: "#4CC79A" },
];

const STORAGE_KEY = "ground";
const ThemeContext = createContext(null);

function initialGround() {
  try {
    const saved = grounds.find((g) => g.id === localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch {
    // storage blocked: fall through to a random ground
  }
  return grounds[Math.floor(Math.random() * grounds.length)];
}

export function ThemeProvider({ children }) {
  const [ground, setGround] = useState(initialGround);

  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--ground", ground.hex);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", ground.hex);
  }, [ground]);

  const chooseGround = (next) => {
    setGround(next);
    try {
      localStorage.setItem(STORAGE_KEY, next.id);
    } catch {
      // storage blocked: the choice lasts for this visit only
    }
  };

  return (
    <ThemeContext.Provider value={{ ground, chooseGround }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
