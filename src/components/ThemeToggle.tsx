// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
