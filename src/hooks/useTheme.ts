import { useState } from 'react';
import { useEffect } from 'react';

const themeInLocalStorage = localStorage.getItem('theme');

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.theme)
  const currentColorTheme = theme === 'dark' ? 'light' : 'dark'; 

  useEffect(() => {
    const rootElement = window.document.documentElement;

    rootElement.classList.remove(currentColorTheme);
    rootElement.classList.add(theme);

    localStorage.setItem('theme', theme)
  }, [theme, currentColorTheme]);

  return [currentColorTheme, setTheme] as const;
};