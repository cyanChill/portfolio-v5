import CenterLayout from "@/components/layout/CenterLayout";
/* Work around to set titles with App Router if we use client components */
import ProjectsList from "@/components/projects-list";

export const metadata = {
  title: "My Projects | Anthony Liang",
  description: "View some of my projects.",
};

export default function Projects() {
  return (
    <CenterLayout className="page-container animate-pop-in opacity-0">
      <h1 className="title">
        <span className="gradient-primary-text">Projects</span>
      </h1>
      <ProjectsList />
    </CenterLayout>
  );
}
