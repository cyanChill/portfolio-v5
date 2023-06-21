import Link from "next/link";
import type { CSSProperties } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import CenterLayout from "@/components/layout/CenterLayout";
import { GradText } from "@/components/Gradient";

export default function Home() {
  return (
    <CenterLayout className="my-auto px-6 py-10 sm:px-20">
      <h1 className="animate-pop-in text-4xl font-bold opacity-0 sm:text-6xl">
        Anthony Liang
      </h1>

      <p className="mt-4 font-light opacity-50 sm:text-2xl">
        <PopStrike delayMS={550} word="Front-End" />{" "}
        <PopStrike delayMS={1300} word="Back-End" />
      </p>

      <p
        style={{ "--pop-in-delay": "2s" } as CSSProperties}
        className="animate-pop-in text-2xl font-bold opacity-0 sm:text-4xl"
      >
        <GradText content="Full-Stack" durationMS={500} delayMS={2150} />{" "}
        Developer
      </p>

      <div
        style={{ "--pop-in-delay": "2.65s" } as CSSProperties}
        className="animate-pop-in opacity-0"
      >
        <p className="mt-4 max-w-[40ch] text-xs leading-5 opacity-80 sm:text-base">
          I love working on the visible and hidden layers of websites, dark
          mode, and coffee.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/projects"
            className="btn bg-primary transition duration-300 hocus:bg-accent"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="btn border-2 border-primary transition duration-300 hocus:border-accent hocus:bg-accent"
          >
            Learn More <span className="sr-only">About Me</span>
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
      </div>
    </CenterLayout>
  );
}

type PopStrikeProps = {
  delayMS: number;
  word: string;
};

const PopStrike = ({ delayMS, word }: PopStrikeProps) => {
  /*
    Having the "strike-through" animation happen on a "::before" on the parent
    element makes it stuttery
  */
  return (
    <span
      style={{ "--pop-in-delay": `${delayMS}ms` } as CSSProperties}
      className="relative inline-block animate-pop-in opacity-0"
    >
      {word}
      <span
        style={{ "--scaleX-delay": `${delayMS + 100}ms` } as CSSProperties}
        className="absolute left-0 top-1/2 h-[2px] w-full origin-left translate-y-1/2 scale-0 animate-[scaleX_500ms_var(--scaleX-delay)_forwards] bg-white"
      />
    </span>
  );
};
