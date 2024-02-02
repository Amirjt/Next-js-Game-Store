"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewCategoryPage = () => {
  const [name, setName] = useState("");

  const addingNewCategoryHandle = async () => {
    if (!name) {
      toast.error("Please enter a name", {
        theme: "dark",
        autoClose: 1000,
        position: "top-right",
      });
    } else {
      const res = await fetch("http://localhost:3000/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      if (res.status === 201) {
        setName("");
        toast.success("Category Created :))", {
          theme: "dark",
          autoClose: 1000,
        });
        setTimeout(() => {
          window.location.replace("http://localhost:3000/dashboard/categories");
        }, 1000);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-primary text-xl">Adding new category</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category name"
        type="text"
        required
      />
      <Button onClick={addingNewCategoryHandle}>Add</Button>
      <ToastContainer />
    </div>
  );
};

export default AddNewCategoryPage;
