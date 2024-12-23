// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Apply the theme to the document body based on the current state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]); // Re-run the effect when isDark changes

  const toggleTheme = () => setIsDark((prev) => !prev); // Toggle theme between dark and light

  return { isDark, toggleTheme };
}
