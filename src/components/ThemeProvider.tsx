import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = (props: Props) => {
  const { children } = props;
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "auto");
  console.log("ThemeProvider Rendered");

  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "auto") {
      localStorage.setItem("theme", "auto");
    }

    function canAddDark() {
      const isSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const currentTheme = localStorage.getItem("theme");

      if (!currentTheme) {
        return isSystemThemeDark;
      }
      if (currentTheme === "auto") {
        return isSystemThemeDark;
      }
      return currentTheme === "dark";
    }
    
    document.documentElement.classList.toggle("dark", canAddDark());
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
export default ThemeProvider;
