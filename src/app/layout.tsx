import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import { Open_Metadata } from "@/constant/open-graph";

const anek = Anek_Devanagari({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = Open_Metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anek.className} antialiased`}>
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
