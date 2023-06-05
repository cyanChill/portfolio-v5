import Link from "next/link";

import { PROJECTS } from "@/appData/projects";
import CenterLayout from "@/components/layout/CenterLayout";

/* How Tailwind columns work is that it goes downwards then right */
const HEIGHTS = [345, 375, 400];

export default function Projects() {
  return (
    <CenterLayout className="my-20 px-6 sm:py-8 md:px-20">
      <h1 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-primary-text">Projects</span>
      </h1>
      <section className="mt-5 columns-1 gap-4 lg:columns-2">
        {PROJECTS.map((proj, idx) => (
          <Link
            key={proj.title}
            href={`/projects/overview/${proj.title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            style={
              {
                backgroundImage: `var(--blur-gradient-from-bottom), url('${proj.thumbnail.url}')`,
                backgroundColor: proj.thumbnail.colorHex || "#1e293b",
                height: `${HEIGHTS[idx % 3]}px`,
              } as React.CSSProperties
            }
            className="group mb-4 flex min-h-[14rem] overflow-hidden rounded-lg bg-contain bg-center bg-no-repeat p-2 sm:p-4"
          >
            <div className="mb-2 mt-auto transform duration-500 ease-in-out lg:mb-4 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              <p className="text-2xl font-bold group-hover:underline md:text-3xl">
                {proj.title}
              </p>
              <p className="mt-1 text-xs text-gray-300 md:text-sm">
                {proj.brief}
              </p>
              <div className="mt-3 flex flex-wrap gap-1 text-xs">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-600 p-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </CenterLayout>
  );
}
