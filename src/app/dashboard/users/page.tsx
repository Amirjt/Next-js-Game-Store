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

import { Edit, PlusCircle, UserRoundX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div className="relative">
      <Link href={"/dashboard/users/addnewuser"}>
        <PlusCircle
          strokeWidth={1.2}
          className="absolute top-0 right-0 text-green-600 cursor-pointer z-50"
        />
      </Link>
      <Table className="mt-5">
        <TableCaption>A list of Members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium w-full">
              <div className="flex items-center gap-2">
                <Image
                  src={"/noavatar.png"}
                  alt="avatar"
                  width={30}
                  height={30}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground">Amirjtt</span>
                  <span className="text-xs text-muted-foreground">
                    emirkh165@gmail.com
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>rgs</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center gap-2">
                <Link href={"/dashboard/users/edituser/34242"}>
                  <Button className="flex items-center gap-2">
                    <Edit size={16} strokeWidth={1.5} />
                    Edit
                  </Button>
                </Link>
                <Button className="flex items-center gap-2">
                  <UserRoundX size={16} strokeWidth={1.5} />
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
