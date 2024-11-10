"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
type  ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>;

const ThemeProviderApp = ({ children, ...props }: ThemeProviderProps) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default ThemeProviderApp;
