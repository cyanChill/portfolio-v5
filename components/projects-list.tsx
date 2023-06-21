"use client";

import { useState } from "react";
import Link from "next/link";

import { PROJECTS } from "@/appData/projects";

/* How Tailwind columns work is that it goes downwards then right */
const HEIGHTS = [345, 375, 400];

type FilterType = "all" | "featured";

export default function ProjectsList() {
  const [filter, setFilter] = useState<FilterType>("all");

  const displayedProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((proj) => proj.featured);

  return (
    <>
      <div className="my-4 flex items-center justify-center text-sm">
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "featured"}
          onClick={() => setFilter("featured")}
        >
          Featured
        </FilterButton>
      </div>

      <section
        key={filter}
        className="mt-5 animate-pop-in columns-1 gap-4 opacity-0 lg:columns-2"
      >
        {displayedProjects.map((proj, idx) => (
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
    </>
  );
}

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const FilterButton = ({ active, onClick, children }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`mx-2 rounded-md p-2.5 py-1.5 transition duration-300 ${
        active
          ? "scale-125 bg-slate-800 font-bold"
          : "font-medium hocus:underline"
      }`}
    >
      {children}
    </button>
  );
};
