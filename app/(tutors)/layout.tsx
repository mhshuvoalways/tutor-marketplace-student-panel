import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import "@/app/globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Tutors | Tim's tutor",
  description: "Tim's Tutors is a tutors marketplace",
};

export default function TutorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
}
