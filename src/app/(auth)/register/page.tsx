"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then((res) => {
      if (res.status === 500) {
        setLoading(false);
      } else {
        router.push("/");
      }
    });
  }, []);

  const handleRegister = async () => {
    if (!name || !userName || !email || !password) {
      setErr("Please Fill All Fields");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else if (password !== confirmPassword) {
      setErr("Your Password is incorrect");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else if (password.length < 8 || confirmPassword.length < 8) {
      setErr("Password must be at least 8 characters");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          userName,
          email,
          password,
        }),
      });

      if (res.status === 422) {
        setErr("User already exists");
        setTimeout(() => {
          setErr("");
        }, 2000);
      }

      if (res.status === 201) {
        toast.success("User Created", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
        });
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        window.location.reload();
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="sm:w-1/4 w-full shadow-2xl shadow-primary/20 rounded-tr-xl rounded-bl-xl p-4 flex flex-col gap-3 border border-border">
        <h2 className="font-bold text-primary text-center">Register</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
        <div className="flex items-center relative">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        {err && <p className="text-sm text-red-500">{err}</p>}
        <Button onClick={handleRegister}>Register</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
