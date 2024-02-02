"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewUserPage = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const addHandle = async () => {
    if (!name || !userName || !email || !password || role === "Role") {
      toast.error("Please Fill the Fields", {
        autoClose: 1000,
        theme: "dark",
      });
    } else {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          userName,
          email,
          password,
          role: role === "Role" ? "USER" : role,
        }),
      });
      if (res.status === 422) {
        toast.error("User Already Exists", {
          autoClose: 1000,
          theme: "dark",
        });
      }

      if (res.status === 201) {
        toast.success("User Created :))", {
          autoClose: 1000,
          theme: "dark",
        });
        window.location.replace("http://localhost:3000/dashboard/users");
      }
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Add new User</h2>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            required
          />
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            type="text"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            max={5}
            min={0}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            max={5}
            min={0}
          />
        </div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue={"Role"}>Role</option>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <Button onClick={addHandle}>Add</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewUserPage;
