import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import NextThemesProvider from "@/providers/NextThemesProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Game Store",
  description: "Created with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-[1440px] mx-auto h-screen p-2 flex flex-col gap-10`}
      >
        <NextThemesProvider>
          <Header />
          {children}
          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  );
}
