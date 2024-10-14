"use client";
import React, { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeButton(): React.JSX.Element {

  type Theme = 'light' | 'dark';

  const getInitialTheme = (): Theme =>  {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme ? savedTheme : 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <button onClick={toggleTheme}>
        <DarkModeIcon />
      </button>
    </>
  );
}
