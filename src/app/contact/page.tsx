import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MotionProvider from "@/providers/MotionProvider";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <MotionProvider>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between p-5 sm:p-0">
        <Image src={"/contact.gif"} alt="contact" width={700} height={100} />
        <div className="w-full sm:w-1/2 flex flex-col gap-3">
          <h2 className="text-primary font-bold">Contact Us</h2>
          <Input type="text" placeholder="Name..." required />
          <Input type="email" placeholder="Email..." required />
          <Input type="number" placeholder="Number..." required />
          <Textarea rows={5} placeholder="Your Message..." required />
          <Button>Send</Button>
        </div>
      </div>
    </MotionProvider>
  );
};

export default ContactPage;
