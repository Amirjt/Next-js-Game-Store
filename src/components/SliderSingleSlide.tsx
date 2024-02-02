"use client";

import { Heart, ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Context } from "@/context/MainContext";
import Link from "next/link";

const SliderSingleSlide = ({ product }: { product: any }) => {
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
    <div className="relative">
      <img src={product?.image} alt="bg" className="rounded-xl shadow-xl" />
      <div className="flex items-center gap-3 absolute top-4 right-4">
        <Link href={`/shop/${product._id}`}>
          <ShoppingCartIcon
            size={24}
            strokeWidth={1.1}
            className="cursor-pointer text-green-500"
          />
        </Link>
        <Heart
          onClick={addFavoriteHandler}
          size={24}
          strokeWidth={1.1}
          className="cursor-pointer text-red-500 mt-1"
          fill={existing ? "red" : "transparent"}
        />
      </div>
    </div>
  );
};

export default SliderSingleSlide;
