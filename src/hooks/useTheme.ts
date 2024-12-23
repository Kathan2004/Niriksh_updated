// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode, but check localStorage for any stored preference
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : true; // Default to dark
  });

  useEffect(() => {
    // Apply the theme to the document body based on the current state
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Store 'dark' in localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Store 'light' in localStorage
    }
  }, [isDark]); // Re-run the effect when isDark changes

  const toggleTheme = () => setIsDark((prev) => !prev); // Toggle theme between dark and light

  return { isDark, toggleTheme };
}
