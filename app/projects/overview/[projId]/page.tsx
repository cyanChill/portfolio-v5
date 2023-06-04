import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";

import { PROJECTS } from "@/appData/projects";
import { allProjects } from "@/.contentlayer/generated";
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
  const { project, projectData } = findProject(params.projId);

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

const findProject = (projId: string) => {
  const project = allProjects.find((proj) => projId === proj.projId);
  if (!project) return { project, projectData: null };
  return {
    project,
    projectData: PROJECTS.find((proj) => proj.title === project.projectName)!,
  };
};

const projectOrErr = (projId: string) => {
  const { project, projectData } = findProject(projId);
  if (!project) notFound();
  return { project, projectData };
};

export default function ProjectOverview({ params }: PageProps) {
  const { project, projectData } = projectOrErr(params.projId);

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
          <h1 className="mb-2 text-3xl font-bold lg:text-5xl">
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
        <section className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          adipisci autem id corporis nam debitis iusto consectetur illo
          doloribus ab, accusantium voluptatum facilis iste, repellat quod
          aliquam dicta porro? Fuga est maxime iste! Perferendis ullam libero
          quisquam asperiores, veritatis dolore a, dignissimos animi distinctio
          aliquam doloribus voluptates modi, dolorum quae ipsa recusandae?
          Ducimus eum praesentium illum quis veniam, adipisci quasi facilis qui
          amet placeat doloribus neque repudiandae sint dolorem tempore sed
          ipsam inventore architecto delectus cum accusantium odio. Corrupti sed
          dolorum quod quisquam quam molestias architecto aut perferendis, odit
          voluptates ipsam consectetur ducimus suscipit hic magni saepe harum
          corporis. Natus laborum ducimus nisi, harum fugiat eos ea pariatur
          nesciunt impedit, vel cumque deserunt assumenda praesentium nihil
          sapiente porro odio labore obcaecati aspernatur perspiciatis,
          laboriosam esse qui iusto magni? Laudantium a architecto excepturi
          labore consectetur accusamus maiores quam, maxime iusto harum, vitae
          iste libero eos ducimus enim quaerat ad? Ea facilis veniam repellendus
          neque eum aut quo aliquid libero dignissimos, amet sint ipsa
          consequuntur consectetur exercitationem consequatur laboriosam
          similique perspiciatis. Eum, maxime eius tempore suscipit consequuntur
          aliquid tenetur nisi aut, hic alias voluptatum necessitatibus quis
          dolores voluptas aliquam commodi velit vitae repellat at ipsum atque
          voluptatem. Repellendus totam enim distinctio ad nemo commodi,
          laboriosam labore expedita eveniet deleniti. Iste nam voluptatibus
          recusandae, soluta quod consectetur explicabo tenetur tempore
          quibusdam iusto nesciunt assumenda quia repudiandae perspiciatis
          impedit qui ullam libero veritatis! Temporibus iusto itaque nostrum
          modi iure. Aut voluptatum delectus velit odit voluptatibus! Odit, eum
          voluptates? Minus corrupti non deserunt voluptatem eveniet.
        </section>
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
