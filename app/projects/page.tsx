import CenterLayout from "@/components/layout/CenterLayout";
/* Work around to set titles with App Router if we use client components */
import ProjectsList from "@/components/projects-list";

export const metadata = {
  title: "My Projects | Anthony Liang",
  description: "View some of my projects.",
};

export default function Projects() {
  return (
    <>
      <CenterLayout className="my-20 px-6 sm:py-8 md:px-20">
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-primary-text">Projects</span>
        </h1>
        <ProjectsList />
      </CenterLayout>
    </>
  );
}
