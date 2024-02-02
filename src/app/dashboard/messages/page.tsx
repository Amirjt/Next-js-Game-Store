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
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessagesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const getMessages = () => {
    fetch("http://localhost:3000/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    getMessages();
  }, []);

  const viewHandler = (id: any) => {
    params.set("view", id);
    replace(`${pathName}?${params}`);
  };

  const deleteHandler = async (id: any) => {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getMessages();
      setIsModalOpen(false);
      toast.success("Successfully deleted message", {
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

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
            {messages.messages?.map((message: any) => (
              <TableRow key={message._id}>
                <TableCell className="text-left">{message.name}</TableCell>
                <TableCell className="text-center text-muted-foreground">
                  {message.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="">
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      className="flex items-center gap-2"
                      onClick={() => {
                        viewHandler(message._id);
                        setIsModalOpen(true);
                      }}
                    >
                      <Eye size={16} strokeWidth={1.5} />
                      View
                    </Button>
                    <Button
                      onClick={() => deleteHandler(message._id)}
                      className="flex items-center gap-1"
                    >
                      <Trash size={16} strokeWidth={1.5} />
                      Delete
                    </Button>
                  </div>
                </TableCell>
                <Modal
                  messages={messages}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ToastContainer />
      </div>
    </>
  );
};

export default MessagesPage;
