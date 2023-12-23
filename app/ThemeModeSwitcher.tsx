"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

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
        <IconContext.Provider value={{ className: "text-slate-200 text-2xl" }}>
          <div>
            <DynamicPiMoonThin />
          </div>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: "text-slate-700 text-2xl" }}>
          <div>
            <DynamicPiSunThin />
          </div>
        </IconContext.Provider>
      )}
    </button>
  );
};
export default ThemeModeSwitcher;
