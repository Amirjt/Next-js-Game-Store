"use client";

import GameSingle from "@/components/GameSingle";
import { useEffect, useState } from "react";

const SearchPage = ({ searchParams }: { searchParams: any }) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/search/${searchParams.q}`)
      .then((response) => response.json())
      .then((data) => setSearchData(data));
  }, [searchParams.q]);

  return (
    <div>
      <h2 className="mb-5">
        Search Resulst For :{" "}
        <span className="font-bold text-primary">{searchParams.q}</span>
      </h2>
      {searchData.length !== 0 ? (
        <div className="grid grid-cols-4 gap-3">
          {searchData?.map((product: any) => (
            <GameSingle key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-xl">Nothing</div>
      )}
    </div>
  );
};
export default SearchPage;
