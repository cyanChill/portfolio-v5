import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import CenterLayout from "@/components/layout/CenterLayout";

export default function Home() {
  return (
    <CenterLayout className="my-auto px-6 sm:px-20">
      <h1 className="text-4xl font-bold sm:text-6xl">Anthony Liang</h1>

      <p className="mt-4 font-light opacity-50 sm:text-2xl">
        <span className="line-through">Front-End</span>{" "}
        <span className="line-through">Back-End</span>
      </p>

      <p className="text-2xl font-bold sm:text-4xl">
        <span className="gradient-primary-text">Full-Stack</span> Developer
      </p>

      <p className="mt-4 max-w-[40ch] text-xs leading-5 opacity-80 sm:text-base">
        I love working on the visible and hidden layers of websites, dark mode,
        and coffee.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold sm:text-base">
        <Link
          href="/projects"
          className="flex items-center rounded-md bg-primary p-2 py-1 text-center sm:p-3 sm:py-1.5"
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="flex items-center rounded-md border-2 border-primary p-2 py-1 text-center sm:p-3 sm:py-1.5"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-4 flex gap-3 text-2xl">
        <a href="https://github.com/cyanChill" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anthonyliang9/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </CenterLayout>
  );
}
