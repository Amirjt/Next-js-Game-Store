"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <Moon
          strokeWidth={1}
          size={20}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <Sun
          strokeWidth={1}
          size={20}
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;
