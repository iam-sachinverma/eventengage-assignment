"use client";

import "../styles/globals.scss";
import { Inter } from "next/font/google";
import "material-icons/iconfont/material-icons.css";

import Navbar from "@/components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EventEngage Inc",
  description: "Front End Developer Role Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {children}
      </body>
    </html>
  );
}
