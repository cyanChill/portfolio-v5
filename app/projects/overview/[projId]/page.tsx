import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";
import { allProjects } from "contentlayer/generated";

import { PROJECTS } from "@/appData/projects";
import Mdx from "@/components/mdx-component";
import CenterLayout from "@/components/layout/CenterLayout";

type PageProps = {
  params: { projId: string };
};

// Let Next.js know what project routes we have
export const generateStaticParams = async () => {
  return allProjects.map((proj) => ({ projId: proj.projId }));
};

// For better SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project, projectData } = await findProject(params.projId);

  if (!project) {
    return {
      title: `Project Overview Not Found`,
      description: "Overview for project not found.",
    };
  } else {
    return {
      title: `${project.projectName} | Project Overview`,
      description: projectData.brief,
    };
  }
}

const findProject = async (projId: string) => {
  const project = allProjects.find((proj) => projId === proj.projId);
  if (!project) return { project, projectData: null };
  return {
    project,
    projectData: PROJECTS.find((proj) => proj.title === project.projectName)!,
  };
};

const projectOrErr = async (projId: string) => {
  const { project, projectData } = await findProject(projId);
  if (!project) notFound();
  return { project, projectData };
};

export default async function ProjectOverview({ params }: PageProps) {
  const { project, projectData } = await projectOrErr(params.projId);

  return (
    <>
      <div
        style={
          {
            backgroundColor: project.heroHex,
            boxShadow: `0 -100px 0 ${project.heroHex}`,
          } as CSSProperties
        }
        className="w-full"
      >
        <header className="mx-auto w-full max-w-7xl translate-y-20 px-6 md:px-20">
          <Link
            href="/projects"
            className="mb-2 flex items-center gap-1 text-sm hocus:font-semibold md:mb-4 md:text-base"
          >
            <BsArrowLeftCircle />
            Back to Projects
          </Link>
          <p className="font-black lg:text-2xl">
            <span className="gradient-primary-text">{project.duration}</span>
          </p>
          <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
            {projectData.title}
          </h1>
          <Image
            src={projectData.thumbnail.url}
            width={1080}
            height={720}
            alt={`Thumbnail for ${projectData.title}`}
            style={
              {
                backgroundColor: projectData.thumbnail.colorHex || "#1e293b",
              } as CSSProperties
            }
            className="h-auto w-full rounded-lg object-contain sm:h-96 md:h-[30rem]"
          />
        </header>
      </div>
      <CenterLayout
        className="my-24 grid gap-2 px-6 md:px-20 lg:grid-cols-[1fr_17.5rem]"
        overflowX={true}
      >
        {/* Main markdown content */}
        <section>
          <Mdx code={project.body.code} />
        </section>
        {/* Sidebar with technologies & links */}
        <aside className="row-start-1 h-fit rounded-lg bg-slate-800 p-2 lg:sticky lg:top-4 lg:col-start-2">
          <p className="mb-1 font-bold lg:text-lg">Technologies</p>
          <div className="flex flex-wrap gap-1">
            {projectData.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-600 p-1 py-0.5 text-xs md:p-2 md:py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-2 lg:mt-4">
            {project.website !== "" && (
              <Link
                href={project.website}
                className="my-1 flex items-center gap-1 text-sm hocus:font-semibold hocus:underline md:text-base"
              >
                <FaGlobeAmericas />
                View Project in Action
              </Link>
            )}
            <Link
              href={project.github}
              className="my-1 flex items-center gap-1 text-sm hocus:font-semibold hocus:underline md:text-base"
            >
              <FaGithub />
              View Project Code
            </Link>
          </div>
        </aside>
      </CenterLayout>
    </>
  );
}