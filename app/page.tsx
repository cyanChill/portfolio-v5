import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="my-auto px-6">
      <h1 className="text-4xl font-bold">Anthony Liang</h1>

      <p className="mt-4 font-light opacity-50">
        <span className="line-through">Front-End</span>{" "}
        <span className="line-through">Back-End</span>
      </p>

      <p className="text-2xl font-bold">
        <span className="gradient-primary bg-gradient-to-r bg-clip-text text-transparent">
          Full-Stack
        </span>{" "}
        Developer
      </p>

      <p className="mt-4 max-w-[40ch] text-xs leading-5 opacity-80">
        I love working on the visible and hidden layers of websites, darkmode,
        and coffee.
      </p>

      <div className="mt-6 flex gap-2 text-sm font-bold">
        <Link
          href="/projects"
          className="block rounded-md bg-primary p-2 py-1 text-center align-middle"
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="block rounded-md border-2 border-primary p-2 py-1 text-center align-middle"
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
    </main>
  );
}
