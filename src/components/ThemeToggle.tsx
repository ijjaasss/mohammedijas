import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-500 rotate-0 scale-100 transition-all group-hover:rotate-45 dark:rotate-0 dark:scale-0" />
      ) : (
        <Moon className="absolute w-6 h-6 text-slate-800 rotate-90 scale-0 transition-all group-hover:rotate-0 group-hover:scale-100 dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
}
