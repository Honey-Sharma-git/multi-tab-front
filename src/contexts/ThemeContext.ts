import { createContext } from "react";

export type ThemeKeys = "light" | "dark" | "auto";

interface ThemeContextI {
  theme: string;
  setTheme: (currentTheme: ThemeKeys) => void;
}

export const ThemeContext = createContext<ThemeContextI>({
  theme: "light",
  setTheme: () => {},
});
