import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers/Providers";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeRey",
  description: "Portofolio of reynaldi satriawan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8">
            {children}
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}
