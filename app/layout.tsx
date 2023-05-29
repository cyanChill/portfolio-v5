import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anthony Liang | Full-Stack Developer",
  description: "Anthony Liang' portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-slate-950 bg-no-repeat text-white`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
