"use client";

import GameSingle from "@/components/GameSingle";
import { Context } from "@/context/MainContext";
import MotionProvider from "@/providers/MotionProvider";
import { useContext, useEffect, useState } from "react";

const ShopPage = () => {
  const { categories } = useContext(Context);
  const [mainProducts, setMainProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/filterproducts/All`)
      .then((response) => response.json())
      .then((data: any) => setMainProducts(data));
  }, []);

  const sortHandler = async (value: any) => {
    fetch(`http://localhost:3000/api/filterproducts/${value}`)
      .then((response) => response.json())
      .then((data: any) => setMainProducts(data));
  };

  console.log(mainProducts);

  return (
    <MotionProvider>
      <div className="p-2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold sm:text-2xl text-primary">All Games </h2>
          <div className="flex items-center gap-2">
            <select
              onChange={(e) => sortHandler(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={"All"}>All</option>
              {categories.map((cat: any) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => sortHandler(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={"Sort By"}>Sort By</option>
              <option value="LOW">Price : Low to High</option>
              <option value="HIGH">Price : High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {mainProducts.map((product: any) => (
            <GameSingle product={product} />
          ))}
        </div>
      </div>
    </MotionProvider>
  );
};

export default ShopPage;
