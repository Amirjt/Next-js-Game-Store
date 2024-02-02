"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const EditCategoryPage = ({ params }: { params: any }) => {
  const [name, setName] = useState("");
  const { id } = params;

  const editHandle = async () => {
    const res = await fetch(`http://localhost:3000/api/category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    if (res.status === 200) {
      setName("");
      toast.success("Category Updated :))", {
        theme: "dark",
        autoClose: 1000,
      });
      setTimeout(() => {
        window.location.replace("http://localhost:3000/dashboard/categories");
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-primary text-xl">Editing category</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category name"
        type="text"
        required
      />
      <Button onClick={editHandle}>Update</Button>
      <ToastContainer />
    </div>
  );
};

export default EditCategoryPage;
