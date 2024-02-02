"use client"

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
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UsersPage =  () => {
  const [users , setUsers] = useState([])


  const getData = () => {
    fetch("http://localhost:3000/api/users" , {
      cache : "no-store"
    })
    .then(res => res.json())
    .then(data => setUsers(data))
  }

  useEffect(()=>{
    getData()
  },[])

  const deleteHandler = async (id) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}` , {
     method : "DELETE"
    })
    if(res.status === 200){
      getData()
      toast.success("User Deleted" , {
        theme : "dark",
        autoClose : 1000
      })
    }
  }

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
          {users?.users?.map((user)=> (
             <TableRow key={user._id} >
             <TableCell className="font-medium w-full">
               <div className="flex items-center gap-2">
                 <Image
                   src={"/noavatar.png"}
                   alt="avatar"
                   width={30}
                   height={30}
                 />
                 <div className="flex flex-col gap-2">
                   <span className="text-xs text-muted-foreground">{user.name}</span>
                   <span className="text-xs text-muted-foreground">
                     {user.email}
                   </span>
                 </div>
               </div>
             </TableCell>
             <TableCell >{user.role.toLowerCase()}</TableCell>
             <TableCell className="text-right">
               <div className="flex items-center gap-2">
                 <Link href={"/dashboard/users/edituser/34242"}>
                   <Button className="flex items-center gap-2">
                     <Edit size={16} strokeWidth={1.5} />
                     Edit
                   </Button>
                 </Link>
                 <Button onClick={() => deleteHandler(user._id)} className="flex items-center gap-2">
                   <UserRoundX size={16} strokeWidth={1.5} />
                   Delete
                 </Button>
               </div>
             </TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer/>
    </div>
  );
};

export default UsersPage;
