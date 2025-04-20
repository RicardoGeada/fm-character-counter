import { useEffect, useState, useCallback, ReactNode } from "react";
import { ThemeContext, Theme } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  
  /**
   * Returns preferred theme from LocalStorage or system settings.
   * @returns Theme
   */
  const getPreferredTheme = (): Theme => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);


  /**
   * Applies the theme class to the <body> and persists it.
   */
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  /**
   * Toggles between 'light' and 'dark' themes.
   */
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
