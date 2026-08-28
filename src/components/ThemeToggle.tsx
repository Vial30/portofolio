"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-300 border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-90 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}
