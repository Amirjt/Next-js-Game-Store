import GameSingle from "@/components/GameSingle";
import MotionProvider from "@/providers/MotionProvider";
import React from "react";

const FavoritesPage = () => {
  return (
    <MotionProvider>
      <div className="flex flex-col gap-4 p-2">
        <h2 className="font-bold text-xl text-primary">Your Favorites</h2>
        <div className="grid grid-cols-7 gap-3">
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
          <GameSingle />
        </div>
      </div>
    </MotionProvider>
  );
};

export default FavoritesPage;
