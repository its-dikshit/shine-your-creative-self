
import React from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

// Polished pill-style toggle with animation and icons popping up
type MainDarkToggleProps = React.HTMLAttributes<HTMLDivElement>;
const MainDarkToggle: React.FC<MainDarkToggleProps> = ({ className = "", ...props }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`group relative rounded-full p-0.5 flex items-center bg-muted border border-sidebar-border w-[60px] h-[32px] shadow-sm cursor-pointer transition-all ${className}`}
      role="button"
      aria-label="Toggle dark mode"
      tabIndex={0}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      <span className="absolute left-1 top-1/2 -translate-y-1/2 z-10">
        <Sun
          size={20}
          className={`transition-all duration-200 ${isDark ? "opacity-40" : "opacity-100 text-yellow-400 drop-shadow"} `}
        />
      </span>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 z-10">
        <Moon
          size={20}
          className={`transition-all duration-200 ${isDark ? "opacity-100 text-indigo-500 drop-shadow" : "opacity-40"} `}
        />
      </span>
      <span
        className={`
          absolute top-1 left-1
          w-8 h-8
          rounded-full bg-white/90 shadow border border-blue-200
          transition-all duration-300
          ${isDark ? "translate-x-7" : "translate-x-0"}
          flex items-center justify-center
          z-20
          group-focus:ring-2 group-focus:ring-blue-500
        `}
        aria-hidden="true"
      ></span>
      {/* Hidden switch for accessibility */}
      <Switch
        checked={isDark}
        onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        className="opacity-0 absolute pointer-events-none"
        tabIndex={-1}
      />
    </div>
  );
};

export default MainDarkToggle;
