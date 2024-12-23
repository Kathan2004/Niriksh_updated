// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import DarkLogo from '../assets/dark-logo.png'; // Path to your dark mode logo
import LightLogo from '../assets/light-logo.png'; // Path to your light mode logo

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      <img
        src={isDark ? DarkLogo : LightLogo}
        alt="Theme Toggle"
        className="theme-toggle-logo"
      />
    </button>
  );
}
