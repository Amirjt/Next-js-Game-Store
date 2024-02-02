"use client";

import { Context } from "@/context/MainContext";

import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SettingsPage = () => {
  const { products } = useContext(Context);

  const featuredSetter = async (id: any) => {
    const res = await fetch(`http://localhost:3000/api/featured/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFeatured: true,
      }),
    });
    if (res.status === 200) {
      toast.success("Featured Product Updated :))", {
        autoClose: 1000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-primary">Featured Product</h2>
      <select
        onChange={(e) => featuredSetter(e.target.value)}
        className="bg-gray-50 w-1/2 sm:w-full border border-gray-300 text-gray-900 text-sm rounded-xl block  p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {products.length !== 0 ? (
          products.map((product: any) => (
            <option value={product._id}>{product.title}</option>
          ))
        ) : (
          <option defaultValue={"No Product"}>No Product yet</option>
        )}
      </select>
      <ToastContainer />
    </div>
  );
};

export default SettingsPage;
