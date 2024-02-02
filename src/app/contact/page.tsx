"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MotionProvider from "@/providers/MotionProvider";
import Image from "next/image";
import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendHandler = async () => {
    if (!name || !email || !number || !message) {
      toast.error("Please fill the fields", {
        theme: "dark",
        autoClose: 1000,
      });
    } else {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          message,
        }),
      });
      if (res.status === 200) {
        toast.success("Your message has been sent , we will call you soon", {
          theme: "dark",
          autoClose: 3000,
        });
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      }
    }
  };

  return (
    <MotionProvider>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between p-5 sm:p-0">
        <Image src={"/contact.gif"} alt="contact" width={700} height={100} />
        <div className="w-full sm:w-1/2 flex flex-col gap-3">
          <h2 className="text-primary font-bold">Contact Us</h2>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name..."
            required
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email..."
            required
          />
          <Input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="number"
            placeholder="Number..."
            required
          />
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows={5}
            placeholder="Your Message..."
            required
          />
          <Button onClick={sendHandler}>Send</Button>
        </div>
        <ToastContainer />
      </div>
    </MotionProvider>
  );
};

export default ContactPage;
