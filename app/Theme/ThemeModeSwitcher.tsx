"use client";
import { useTheme,  } from "next-themes";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { PiMoonThin, PiSunThin } from "react-icons/pi";

const themeBtnStyle = "w-10 h-10 fixed right-5 top-5 px-2 rounded-full hover:scale-150 active:scale-300 duration-300 bg-gray-700 dark:bg-slate-200"
const ThemeModeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return <div className="min-h-screen bg-slate-200 dark:bg-gray-700"></div>;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      className={themeBtnStyle}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme && currentTheme === "dark" ? (
        <IconContext.Provider value={{ className: "text-slate-700 text-2xl" }}>
          <PiSunThin />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: "text-slate-200 text-2xl" }}>
          <PiMoonThin />
        </IconContext.Provider>
      )}
    </button>
  );
};
export default ThemeModeSwitcher;
