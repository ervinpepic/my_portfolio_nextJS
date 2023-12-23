"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ArrowUp = dynamic(() =>
    import("react-icons/pi").then((m) => m.PiArrowUpThin)
  );

  return (
    <button
      className={`${isVisible ? "block" : "hidden"}
            w-10 h-10 fixed bottom-10 right-5 px-2 rounded-full 
            hover:scale-150 active:scale-300 duration-300 bg-gray-700 dark:bg-slate-200`}
      onClick={scrollToTop}
    >
      {theme === "light" ? (
        <IconContext.Provider value={{ className: "text-slate-200 text-2xl" }}>
          <div>
            <ArrowUp />
          </div>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ className: "text-slate-700 text-2xl" }}>
          <div>
            <ArrowUp />
          </div>
        </IconContext.Provider>
      )}
    </button>
  );
};

export default ScrollToTopButton;
