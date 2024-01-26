"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const isLogedIn = true;
  const isAdmin = false;
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <header className="bg-primary h-16 rounded-xl p-5 flex justify-between items-center shadow-2xl shadow-primary/40 ">
        <div className="block sm:hidden">{isMenuOpen ? <X onClick={() => setIsMenuOpen(false)} /> : <Menu onClick={() => setIsMenuOpen(true)} />}</div>
        <Link href={"/"}>
          <h2 className="font-bold text-lg">
            <span className="text-secondary">Game</span> store
          </h2>
        </Link>
        <div className="hidden sm:flex items-center gap-3">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`px-2 py-1 rounded-xl hover:bg-secondary duration-300  ${
                path === link.path ? "bg-secondary text-primary" : "text-white"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-9">
          <div className="hidden sm:flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-full">
              <ThemeSwitcher />
            </div>
            <div className="bg-secondary p-2 rounded-full relative">
              <ShoppingCart size={20} strokeWidth={1} />
              <span className="absolute -top-2 -right-2 rounded-full p-2 bg-rose-300 w-5 h-5 flex items-center justify-center text-sm">
                7
              </span>
            </div>
            <div className="bg-secondary p-2 rounded-full relative">
              <Heart size={20} strokeWidth={1} />
              <span className="absolute -top-2 -right-2 rounded-full p-2 bg-rose-300 w-5 h-5 flex items-center justify-center text-sm">
                0
              </span>
            </div>
          </div>
          {isLogedIn ? (
            <div className="cursor-pointer group relative">
              <Image
                alt="avatar"
                src={"/noavatar.png"}
                height={37}
                width={37}
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-secondary w-28 absolute right-0 mt-2 rounded-xl p-3">
                <div className="w-full h-full flex flex-col items-start gap-3 text-sm">
                  {isAdmin && <button>Dashboard</button>}
                  <span className="text-red-500">Log Out</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant={"secondary"}>
                <Link href={"/login"}>Login</Link>
              </Button>
              <Button variant={"secondary"}>
                <Link href={"/register"}>Register</Link>
              </Button>
            </div>
          )}
        </div>
      </header>
      {/* Mobile Menu */}
      <div className={`${!isMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"} duration-200  w-1/2 h-1/2 bg-secondary fixed top-20 rounded-xl p-5 shadow-xl`}>
        <div className="w-full h-full flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-center">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`px-2 py-1 rounded-xl duration-300  ${
                  path === link.path ? "text-primary" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link href={"/cart"}>Cart</Link>
            <Link href={"/favorites"}>Favorites</Link>
          </div>
          <div className="flex items-center justify-between">
            <span>Theme</span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
