import type { Metadata } from "next";
import {  Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Layout/Navbar";

const rubik = Rubik({
  weight: [ "400", "500", "600", "800"],
});


export const metadata: Metadata = {
    title: {
    default: "Kicks| Onle Shop ",
    template: "%s | E-commerce",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        <main className="bg-[#e7e7e3]">

        {children}
        </main>
      </body>
    </html>
  );
}
