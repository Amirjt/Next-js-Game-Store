import React from "react";
import GameSingle from "./GameSingle";

const TopGames = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
    </div>
  );
};

export default TopGames;
