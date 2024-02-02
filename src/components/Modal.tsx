"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  messages,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  messages: any;
  searchParams: any;
  id: any;
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const id = params.get("view");

  const mainMessage = messages.messages.find(
    (message: any) => message._id === id
  );

  return (
    <>
      <div
        className={`${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } duration-200 fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 p-10`}
      >
        <div
          className={`${
            isModalOpen && "scale-100"
          } scale-0 duration-200  sm:w-1/3 w-full border border-border rounded-xl p-5 flex flex-col gap-4 backdrop-blur-md relative`}
        >
          <X
            onClick={() => setIsModalOpen(false)}
            strokeWidth={1.5}
            size={20}
            className="absolute top-3 right-3 cursor-pointer"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="sender" className="text-sm">
              Sender
            </label>
            <Input onChange={() => true} value={mainMessage?.name} id="sender" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input onChange={() => true} value={mainMessage?.email} id="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="number" className="text-sm">
              Number
            </label>
            <Input
              onChange={() => true}
              value={mainMessage?.number}
              id="number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea
              onChange={() => true}
              value={mainMessage?.message}
              rows={6}
              id="message"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
