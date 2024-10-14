import React, { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function ThemeButton () {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
      };
    
      const [theme, setTheme] = useState(getInitialTheme);
    
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    return(
        <>
        <button onClick={toggleTheme}>
            <DarkModeIcon></DarkModeIcon>
        </button>
        </>
    )
}