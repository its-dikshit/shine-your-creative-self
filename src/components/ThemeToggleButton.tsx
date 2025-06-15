
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ className = "", ...props }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle dark mode"
      className={
        `rounded-full p-1.5 bg-muted hover:bg-blue-100 dark:hover:bg-indigo-950 
        border border-sidebar-border shadow-sm transition-all flex items-center justify-center ` + className
      }
      onClick={e => {
        e.stopPropagation();
        setTheme(isDark ? "light" : "dark");
      }}
      {...props}
      type="button"
    >
      {isDark
        ? <Sun size={18} className="text-yellow-400" />
        : <Moon size={18} className="text-indigo-500" />
      }
    </button>
  );
};

export default ThemeToggleButton;
