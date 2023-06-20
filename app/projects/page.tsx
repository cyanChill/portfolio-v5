import type { Metadata } from "next";

import CenterLayout from "@/components/layout/CenterLayout";
/* Work around to set titles with App Router if we use client components */
import ProjectsList from "@/components/projects-list";

export const metadata: Metadata = {
  title: "My Projects",
  description: "View some of my projects.",
  openGraph: {
    title: "My Projects | Anthony Liang",
    description: "View some of my projects.",
    url: "https://cyanchill.com/projects",
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Projects | Anthony Liang",
    description: "View some of my projects.",
    images: "/twitter-image.png",
  },
};

export default function Projects() {
  return (
    <CenterLayout className="page-container animate-pop-in overflow-y-hidden opacity-0">
      <h1 className="title">
        <span className="gradient-primary-text">Projects</span>
      </h1>
      <ProjectsList />
    </CenterLayout>
  );
}
