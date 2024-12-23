import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true); // Force dark theme by default

  useEffect(() => {
    // Apply the dark theme to the document body
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Ensure 'dark' is set in localStorage

  }, []); // Empty dependency array ensures this effect runs only once on mount

  const toggleTheme = () => setIsDark((prev) => !prev); // This will allow you to toggle the theme

  return { isDark, toggleTheme };
}
