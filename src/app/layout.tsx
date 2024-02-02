import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import NextThemesProvider from "@/providers/NextThemesProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContext from "@/context/MainContext";

export const metadata: Metadata = {
  title: "Game store",
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
          <MainContext>
            <Header />
            {children}
            <Footer />
          </MainContext>
        </NextThemesProvider>
      </body>
    </html>
  );
}
