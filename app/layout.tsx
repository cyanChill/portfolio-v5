import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anthony Liang | Full-Stack Developer",
  description: "Anthony Liang's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={`${inter.className} relative flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950 bg-no-repeat text-white sm:!overflow-y-auto`}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{ className: "!bg-slate-800 !text-white" }}
        />
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
