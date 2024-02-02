"use client";

import GameSingle from "@/components/GameSingle";
import { Context } from "@/context/MainContext";
import MotionProvider from "@/providers/MotionProvider";
import React, { useContext } from "react";

const FavoritesPage = () => {
  const { favorites } = useContext(Context);
  return (
    <MotionProvider>
      {favorites?.length > 0 ? (
        <div className="flex flex-col gap-4 p-2">
          <h2 className="font-bold text-xl text-primary">Your Favorites</h2>
          <div className="grid grid-cols-3 gap-3">
            {favorites?.map((fav: any) => (
              <GameSingle product={fav} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="font-bold text-xl text-primary">No Favorites</h2>
      )}
    </MotionProvider>
  );
};

export default FavoritesPage;
