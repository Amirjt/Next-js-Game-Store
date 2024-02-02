"use client";
import { useContext } from "react";
import GameSingle from "./GameSingle";
import { Context } from "@/context/MainContext";

const TopGames = () => {
  const { products } = useContext(Context);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {products.slice(0, 10).map((product: any) => (
        <GameSingle key={product._id} product={product} />
      ))}
    </div>
  );
};

export default TopGames;
