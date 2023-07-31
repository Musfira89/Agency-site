"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { BsSun, BsMoon } from "react-icons/bs";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsSun className="h-6 w-6 text-orange-300" />
      ) : (
        <BsMoon className="h-6 w-6 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeButton;
