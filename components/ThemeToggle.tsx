"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-md border border-gray-400 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white transition"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}