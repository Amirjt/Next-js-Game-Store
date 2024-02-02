"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [identify, setIdentify] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then((res) => {
      if (res.status === 500) {
        setLoading(false);
      } else {
        router.replace("/");
      }
    });
  }, []);

  const handleLogin = async () => {
    if (!identify || !password) {
      setErr("Please Fill the fields");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else {
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identify,
          password,
        }),
      });
      if (res.status === 422) {
        setErr("Password or Username is not correct");
        setTimeout(() => {
          setErr("");
        }, 2000);
      } else if (res.status === 404) {
        setErr("User not found");
        setTimeout(() => {
          setErr("");
        }, 2000);
      }
      if (res.ok) {
        toast.success("You are loged in", {
          theme: "dark",
          position: "top-right",
          autoClose: 2000,
        });
        setIdentify("");
        setPassword("");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="sm:w-1/4 w-full shadow-2xl shadow-primary/20 rounded-tr-xl rounded-bl-xl p-4 flex flex-col gap-3 border border-border">
          <h2 className="font-bold text-primary text-center">Login</h2>
          <Input
            value={identify}
            onChange={(e) => setIdentify(e.target.value)}
            placeholder="Email or Username"
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
          {err && <p className="text-sm text-red-500">{err}</p>}
          <Button onClick={handleLogin}>Login</Button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
