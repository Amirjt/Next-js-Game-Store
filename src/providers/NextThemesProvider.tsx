"use client";
import { ThemeProvider } from "next-themes";

const NextThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default NextThemesProvider;
