
import React from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const MainDarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="fixed top-6 right-6 z-50 bg-background/90 rounded-full px-4 py-2 shadow flex items-center gap-2 border border-sidebar-border">
      <Sun size={18} className="text-yellow-400" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 focus:ring-2 focus:ring-blue-300 transition"
      />
      <Moon size={18} className="text-blue-700" />
    </div>
  );
};

export default MainDarkToggle;
