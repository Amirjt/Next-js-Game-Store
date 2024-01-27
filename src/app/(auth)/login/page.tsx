"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="sm:w-1/4 w-full shadow-2xl shadow-primary/20 rounded-tr-xl rounded-bl-xl p-4 flex flex-col gap-3 border border-border">
        <h2 className="font-bold text-primary text-center">Login</h2>
        <Input placeholder="Email or Username" />
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
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
