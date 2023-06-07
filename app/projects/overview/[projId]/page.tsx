"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaGlobeAmericas, FaGithub, FaChevronUp } from "react-icons/fa";
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

  const scrollToTop = () => {
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section
        style={
          {
            backgroundColor: project.heroHex,
            boxShadow: `0 -100px 0 ${project.heroHex}`,
          } as CSSProperties
        }
        className="relative isolate w-full pt-20"
      >
        <div className="z-10 mx-auto w-full max-w-7xl px-6 md:px-20">
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
          <h1 className="mb-2 break-words text-5xl font-bold">
            {projectData.title}
          </h1>
          <p className="mb-8 text-sm lg:mb-12 lg:text-base">
            {projectData.brief}
          </p>
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
        </div>
        {/* Spacer for bottom */}
        <div className="absolute bottom-0 -z-[1] h-20 w-full bg-primary-bkg" />
      </section>
      <CenterLayout
        className="mb-12 mt-4 grid w-full gap-2 px-6 md:px-20 lg:grid-cols-[1fr_17.5rem]"
        overflowX={true}
      >
        {/* Main markdown content */}
        <article className="prose prose-invert mx-auto w-full min-w-0">
          <Mdx code={project.body.code} />
        </article>
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
              <a
                href={project.website}
                target="_blank"
                referrerPolicy="no-referrer"
                className="my-1 flex items-center gap-1 text-sm no-underline hocus:font-semibold hocus:underline md:text-base"
              >
                <FaGlobeAmericas />
                View Project in Action
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="my-1 flex items-center gap-1 text-sm no-underline hocus:font-semibold hocus:underline md:text-base"
            >
              <FaGithub />
              View Project Code
            </a>
          </div>
        </aside>
      </CenterLayout>
      {/* To top button */}
      <button
        style={
          {
            "--gutter": "calc(((100vw - 80rem)/2) + 1rem)",
          } as CSSProperties
        }
        className="fixed bottom-4 right-[max(1rem,var(--gutter))] rounded-full bg-primary p-2 text-2xl"
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>
    </>
  );
}
