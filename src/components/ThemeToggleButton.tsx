import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 w-12 h-12 bg-gray-700 dark:bg-gray-300 rounded-none hover:opacity-80 transition-opacity z-50"
      aria-label="Toggle theme"
    />
  );
};

