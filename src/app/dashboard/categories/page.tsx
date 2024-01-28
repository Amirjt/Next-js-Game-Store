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

const CategoriesPage = () => {
  return (
    <>
      <div className="relative">
        <Link href={"/dashboard/categories/addnewcategory"}>
          <PlusCircle
            strokeWidth={1.2}
            className="absolute top-0 right-0 text-green-600 cursor-pointer z-50"
          />
        </Link>
        <Table className="mt-10">
          <TableCaption>A list of Members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left font-bold">Action</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Link href={"/dashboard/categories/editcategory/343"} >
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

export default CategoriesPage;
