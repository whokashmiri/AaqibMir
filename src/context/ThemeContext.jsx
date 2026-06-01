import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const colors = [
  "#00c86f",
  "#7c3aed",
  "#5F00BA",
  "#FE5D26",
  "#f59e0b",
  "#ec4899",
  "#899D78"
];

export function ThemeProvider({ children }) {
  const [themeColor] = useState(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  });

  return (
    <ThemeContext.Provider value={{ themeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeColor = () => useContext(ThemeContext);