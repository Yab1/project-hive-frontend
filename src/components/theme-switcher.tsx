"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useSystemTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
