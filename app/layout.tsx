import "@/app/globals.css";
import StoreProvider from "@/app/StoreProvider";
import type { Metadata } from "next";
import { Gochi_Hand, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--outfit",
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--gochiHand",
});

export const metadata: Metadata = {
  title: "Tutor marketplace | Tim's tutor",
  description: "Tim's Tutors is a tutors marketplace",
};

export default function TutorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${gochiHand.variable} bg-[#F7F8FC]`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
