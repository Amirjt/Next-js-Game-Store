"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Trash, PlusCircle } from "lucide-react";

import { useContext } from "react";
import { Context } from "@/context/MainContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoriesPage = () => {
  const { categories, getCategories } = useContext(Context);
  
  const deleteHandler = async (id: String) => {
    const res = await fetch(`http://localhost:3000/api/category/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("Category Deleted :))", {
        theme: "dark",
        autoClose: 1000,
      });
      getCategories();
    }
  };

  return (
    <>
      <div className="relative">
        <a href={"/dashboard/categories/addnewcategory"}>
          <PlusCircle
            strokeWidth={1.2}
            className="absolute top-0 right-0 text-green-600 cursor-pointer z-50"
          />
        </a>
        <Table className="mt-10">
          <TableCaption>A list of Members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Category</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.map((cat: any) => (
              <TableRow key={cat._id}>
                <TableCell className="text-left font-bold">
                  {cat.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <a href={`/dashboard/categories/editcategory/${cat._id}`}>
                      <Button className="flex items-center gap-2">
                        <Edit size={16} strokeWidth={1.5} />
                        Edit
                      </Button>
                    </a>
                    <Button
                      onClick={() => deleteHandler(cat._id)}
                      className="flex items-center gap-1"
                    >
                      <Trash size={16} strokeWidth={1.5} />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ToastContainer />
      </div>
    </>
  );
};

export default CategoriesPage;
