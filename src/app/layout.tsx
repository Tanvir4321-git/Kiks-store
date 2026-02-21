import type { Metadata } from "next";
import {  Open_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Layout/Navbar";

const rubik = Rubik({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-rubik",        
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",    
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
        className={`${rubik.variable} ${openSans.variable} antialiased`}
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
