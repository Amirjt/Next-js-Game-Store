"use client";

import Image from "next/image";

import { Heart, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";

const Featured = () => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        width={300}
        height={100}
        src={"/r6prev.jpg"}
        alt="prev"
        className="rounded-xl  shadow-2xl shadow-primary/40"
      />
      <span className="absolute p-2 bg-red-500 top-0 -left-8 rounded-xl -rotate-45 text-sm animate-pulse text-white visible opacity-100 duration-400 group-hover:invisible group-hover:opacity-0">
        Featured
      </span>
      <div className="absolute w-1/3 invisible opacity-0 group-hover:w-1/2 group-hover:visible group-hover:opacity-100 duration-200 h-full top-0 left-0 bottom-0 rounded-xl bg-black bg-opacity-70">
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
          <h3 className="font-bold text-sm text-primary">Rainbow Six Siege</h3>
          <span className="font-semibold bg-primary rounded-xl px-2 py-1 text-sm">
            Action
          </span>
          <span className="font-bold text-green-500 text-lg">$ 114</span>
          <div className="flex items-center gap-4">
            <Heart
              size={20}
              strokeWidth={1.1}
              className="cursor-pointer text-red-500"
            />
            <ShoppingCartIcon
              size={20}
              strokeWidth={1.1}
              className="cursor-pointer text-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
