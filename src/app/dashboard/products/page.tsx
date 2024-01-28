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
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <>
      <div className="relative">
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
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/noavatar.png"}
                    alt="avatar"
                    width={30}
                    height={30}
                  />
                  <span>God of War</span>
                </div>
              </TableCell>
              <TableCell className="text-center">Action</TableCell>
              <TableCell className="text-center">$23</TableCell>
              <TableCell className="">
                <div className="flex items-center justify-center gap-2">
                  <Link href={"/dashboard/products/editproduct/3432"} >
                    <Button className="flex items-center gap-2">
                      <Edit size={16} strokeWidth={1.5} />
                      Edit
                    </Button>
                  </Link>
                  <Button className="flex items-center gap-1">
                    <Trash size={16} strokeWidth={1.5} />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProductsPage;
