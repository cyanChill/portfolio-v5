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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={`${inter.className} relative flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950 bg-no-repeat text-white`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
