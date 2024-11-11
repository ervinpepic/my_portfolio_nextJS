"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <div className="min-h-screen bg-slate-200 dark:bg-gray-700"></div>;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-300 ${
        currentTheme === "dark"
          ? "bg-gray-700 text-slate-200"
          : "bg-slate-200 text-gray-700"
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-6">
          Oops! The page you are looking for does not exist. Please go back and
          try some other page...
        </p>
        <Link href="/">
          <button className="py-2 px-6 rounded bg-gray-700 dark:bg-slate-200 text-slate-200 dark:text-gray-700 hover:bg-gray-600 dark:hover:bg-slate-300 hover:duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
