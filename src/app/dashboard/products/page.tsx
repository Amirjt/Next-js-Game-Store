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
import Link from "next/link";

import { useContext } from "react";
import { Context } from "@/context/MainContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const { products, getProducts } = useContext(Context);

  const deleteHandle = async (id: any) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("Post Deleted :))", {
        theme: "dark",
        autoClose: 1000,
      });
      getProducts();
    }
  };

  return (
    <>
      <div className="relative">
        <span
          className="absolute top-1 left-1 cursor-pointer z-[1000]"
          onClick={getProducts}
        >
          Reload
        </span>
        <Link href={"/dashboard/products/addnewproduct"}>
          <PlusCircle
            strokeWidth={1.2}
            className="absolute top-0 right-0 text-green-600 cursor-pointer z-50"
          />
        </Link>
        <Table className="mt-10">
          <TableCaption>A list of Members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Product</TableHead>
              <TableHead className="text-center">Category</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product: any) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <img
                      src={product.image}
                      alt="avatar"
                      className="rounded-full w-10 h-10"
                    />
                    <span>
                      {product.title.length > 14 ? 
                        (<span>{product.title.slice(0,14)}...</span>) : (
                          (<span>{product.title}</span>)
                        )}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {product.category}
                </TableCell>
                <TableCell className="text-center">{product.price}</TableCell>
                <TableCell className="">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/dashboard/products/editproduct/${product._id}`}
                    >
                      <Button className="flex items-center gap-2">
                        <Edit size={16} strokeWidth={1.5} />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      onClick={() => deleteHandle(product._id)}
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

export default ProductsPage;
