"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch"; // Adjust the import based on where your Switch component is located
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
      />
      <label htmlFor="theme-switch" className="text-sm">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
}
