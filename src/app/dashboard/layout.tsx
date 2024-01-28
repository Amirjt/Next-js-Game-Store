import Sidebar from "@/components/Dashboard/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Created with Next.js 14",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-2 items-start">
      <div className="w-2/12 h-screen rounded-xl border border-secondary p-5">
        <Sidebar />
      </div>
      <div className="w-10/12 rounded-xl border border-secondary p-5">
        {children}
      </div>
    </section>
  );
}
