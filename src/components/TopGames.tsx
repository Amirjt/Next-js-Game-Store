import React from "react";
import TopGameSingle from "./TopGameSingle";

const TopGames = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
      <TopGameSingle />
    </div>
  );
};

export default TopGames;
