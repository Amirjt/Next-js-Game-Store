"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { X } from "lucide-react";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
}) => {
  return (
    <>
      <div className={`${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"} duration-200 fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 p-10`}>
        <div
          className={`${
            isModalOpen && "scale-100"
          } scale-0 duration-200  sm:w-1/3 w-full border border-border rounded-xl p-5 flex flex-col gap-4 backdrop-blur-sm relative`}
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
            <Input id="sender" disabled />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input id="email" disabled />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="number" className="text-sm">
              Number
            </label>
            <Input id="number" disabled />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea rows={6} id="message" disabled />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
