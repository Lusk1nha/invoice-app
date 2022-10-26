import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProviderProps } from "./ThemeProviderProps";
import { ThemeContextProps } from './ThemeContextProps';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const themeInLocalStorage = localStorage.getItem('theme');
const DEFAULT_THEME = themeInLocalStorage ?? 'light';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = useCallback((value?: string) => {
    setTheme(value ?? theme === 'light' ? 'dark' : 'light')
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};