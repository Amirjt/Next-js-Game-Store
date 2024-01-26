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
        <section>
            {children}
        </section>
    )
}
