"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

const RegisterPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="sm:w-1/4 w-full shadow-2xl shadow-primary/20 rounded-tr-xl rounded-bl-xl p-4 flex flex-col gap-3 border border-border">
        <h2 className="font-bold text-primary text-center">Register</h2>
        <Input placeholder="Name" required />
        <Input placeholder="Username" required />
        <Input placeholder="Email" type="email" required />
        <div className="flex items-center relative">
          <Input
            placeholder="Password"
            type={isHidden ? "password" : "text"}
            required
          />
          {isHidden ? (
            <Eye
              onClick={() => setIsHidden(false)}
              strokeWidth={1.2}
              size={19}
              className="absolute right-2 cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={() => setIsHidden(true)}
              strokeWidth={1.2}
              size={19}
              className="absolute right-2 cursor-pointer"
            />
          )}
        </div>
        <div className="flex items-center relative">
          <Input
            placeholder="Confirm Password"
            type={isHidden ? "password" : "text"}
            required
          />
          {isHidden ? (
            <Eye
              onClick={() => setIsHidden(false)}
              strokeWidth={1.2}
              size={19}
              className="absolute right-2 cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={() => setIsHidden(true)}
              strokeWidth={1.2}
              size={19}
              className="absolute right-2 cursor-pointer"
            />
          )}
        </div>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default RegisterPage;
