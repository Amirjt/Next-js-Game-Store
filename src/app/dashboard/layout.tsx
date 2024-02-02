"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUser(data);
        if (data.role === "ADMIN") {
          setIsAdmin(true);
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading || !isAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="flex gap-2 items-start">
        <div className="w-2/12 h-screen rounded-xl border border-secondary p-5">
          <Sidebar user={user} />
        </div>
        <div className="w-10/12 rounded-xl border border-secondary p-5">
          {children}
        </div>
      </section>
    </>
  );
}
