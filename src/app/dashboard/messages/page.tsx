"use client";

import Modal from "@/components/Modal";
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

import { Trash, Eye } from "lucide-react";
import { useState } from "react";

const MessagesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <Table>
          <TableCaption>A list of Members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sender</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">Amirjtt</TableCell>
              <TableCell className="text-center text-muted-foreground">
                2023.12.21
              </TableCell>
              <TableCell className="">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="flex items-center gap-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Eye size={16} strokeWidth={1.5} />
                    View
                  </Button>
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
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default MessagesPage;
