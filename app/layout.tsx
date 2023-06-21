import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "@/components/layout/Navigation";
import DynamicBkg from "@/components/layout/DynamicBkg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Anthony Liang",
    default: "Anthony Liang | Full-Stack Developer",
  },
  authors: [{ name: "Anthony Liang" }],
  description: "Anthony Liang's portfolio",
  keywords: ["Anthony Liang", "cyanchill", "cyanchill.com"],
  metadataBase: new URL("https://www.cyanchill.com"),
  openGraph: {
    title: "Anthony Liang | Full-Stack Developer",
    description: "Anthony Liang's portfolio",
    url: "https://cyanchill.com",
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Liang | Full-Stack Developer",
    description: "Anthony Liang's portfolio",
    images: "/twitter-image.png",
  },
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={`${inter.className} relative flex min-h-screen flex-col items-center overflow-x-hidden bg-primary-bkg bg-no-repeat text-white sm:!overflow-y-auto`}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{ className: "!bg-slate-800 !text-white" }}
        />
        <NavBar />
        {children}
        <DynamicBkg />
        <Analytics />
      </body>
    </html>
  );
}
