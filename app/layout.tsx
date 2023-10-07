import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers/Providers";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";
import { Footer } from "./components/Footer";

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
          {/* <ParticlesContainer /> */}
          <Suspense fallback={<Loading />}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="w-full lg:w-[1152px] mx-auto px-8 pb-8 flex-grow">
                {children}
                <Analytics />
              </main>
              <Footer />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
