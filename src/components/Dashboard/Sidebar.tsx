"use client";

import {
  ShoppingBasket,
  Users,
  Layers3,
  MessagesSquare,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = ({ user }: { user: any }) => {
  const path = usePathname();

  const links = [
    {
      title: "Products",
      path: "/dashboard/products",
      icon: <ShoppingBasket strokeWidth={1.2} size={22} />,
    },
    {
      title: "Users",
      path: "/dashboard/users",
      icon: <Users strokeWidth={1.2} size={22} />,
    },
    {
      title: "Categories",
      path: "/dashboard/categories",
      icon: <Layers3 strokeWidth={1.2} size={22} />,
    },
    {
      title: "Messages",
      path: "/dashboard/messages",
      icon: <MessagesSquare strokeWidth={1.2} size={22} />,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <Settings strokeWidth={1.2} size={22} />,
    },
  ];
  return (
    <div className="flex flex-col gap-10 relative h-full">
      <div className="absolute top-0 right-0 cursor-pointer">
        <div className="relative">
          <Bell strokeWidth={1.2} size={19} />
          <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full animate-pulse"></span>
        </div>
      </div>
      <h4 className="font-bold hidden sm:block">
        Welcome <span className="text-primary">{user.name}</span>
      </h4>
      <div className="flex flex-col gap-4 mt-10">
        {links.map((link) => (
          <Link
            className={`${
              path === link.path ? "bg-primary" : ""
            }  sm:p-2 p-1 flex items-center gap-3 rounded-xl hover:scale-105 duration-200`}
            href={link.path}
            key={link.title}
          >
            {link.icon}
            <span className="hidden sm:block">{link.title}</span>
          </Link>
        ))}
      </div>
      <Button className="flex items-center gap-2 absolute bottom-0 -left-3 sm:left-10">
        <LogOut strokeWidth={1.5} size={20} />
        <span className="hidden sm:block">Log Out</span>
      </Button>
    </div>
  );
};

export default Sidebar;
