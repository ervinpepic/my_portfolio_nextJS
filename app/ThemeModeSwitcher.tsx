"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeModeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const DynamicPiMoonThin = dynamic(() =>
    import("react-icons/pi").then((m) => m.PiMoonThin)
  );
  const DynamicPiSunThin = dynamic(() =>
    import("react-icons/pi").then((m) => m.PiSunThin)
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <button
      className={`w-10 h-10 absolute right-5 top-5 px-2 rounded-full 
        hover:scale-150 active:scale-300 duration-300 bg-gray-700 dark:bg-slate-200`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <span className="text-2xl text-slate-200">
          <DynamicPiMoonThin />
        </span>
      ) : (
        <span className="text-2xl text-slate-700">
          <DynamicPiSunThin />
        </span>
      )}
    </button>
  );
};
export default ThemeModeSwitcher;
