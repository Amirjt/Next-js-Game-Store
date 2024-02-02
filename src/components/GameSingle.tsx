"use client";

import { Context } from "@/context/MainContext";
import { Heart, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const GameSingle = ({ product }: { product: any }) => {
  const { favorites, setFavorites } = useContext(Context);

  const existing = favorites?.some((p: any) => p._id === product._id);

  const addFavoriteHandler = () => {
    if (!existing) {
      setFavorites((prev: any) => [...prev, product]);
    } else if (existing) {
      setFavorites((prev: any) =>
        prev.filter((p: any) => p._id !== product._id)
      );
    }
  };

  return (
    <div className="cursor-pointer relative z-[3000]">
      <img src={product?.image} alt="prev" className="rounded-xl" />
      <div className="flex items-center gap-2 absolute top-2 right-2">
        <Link href={`/shop/${product._id}`}>
          <ShoppingCartIcon
            size={24}
            strokeWidth={1.1}
            className="cursor-pointer text-green-500"
          />
        </Link>
        <Heart
          size={26}
          onClick={addFavoriteHandler}
          strokeWidth={1.1}
          className="cursor-pointer  p-1 rounded-full text-white z-50"
          fill={existing ? "red" : "transparent"}
        />
      </div>
      <div className="absolute bottom-2 left-2">
        <span className="text-sm font-bold text-white">{product?.title}</span>
      </div>
      <div className="absolute left-2 top-2">
        <span className="text-base font-bold text-green-500">
          $ {product?.price}
        </span>
      </div>
    </div>
  );
};

export default GameSingle;
