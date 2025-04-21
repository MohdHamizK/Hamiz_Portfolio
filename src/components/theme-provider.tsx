"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => { 
  document.documentElement.setAttribute("data-theme","dark"); 
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
