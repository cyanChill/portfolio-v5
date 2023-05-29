"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  // Dynamically change the background based on the current route
  let bkgPattern =
    "absolute left-0 top-0 -z-10 h-screen w-screen bg-cover bg-no-repeat ";
  if (pathname === "/") bkgPattern += "bg-home-pattern";
  else if (pathname === "/about") bkgPattern += "bg-about-pattern";
  else if (pathname === "/projects") bkgPattern += "bg-projects-pattern";
  else if (pathname.startsWith("/project")) bkgPattern += "bg-project-pattern";
  else if (pathname === "/contact") bkgPattern += "bg-contact-pattern";
  else bkgPattern += "bg-error-pattern";

  let navToggleClass =
    "z-50 absolute right-0 top-4 rounded-l-full p-1 px-4 text-3xl xs:hidden";
  if (!isActive) navToggleClass += " gradient-primary bg-gradient-to-r";

  let navClass =
    "z-40 absolute top-0 left-0 h-screen w-screen bg-slate-950 flex flex-col ";
  navClass += isActive ? "visible" : "invisible pointer-events-none";

  return (
    <>
      {/* Dynamic background based on route*/}
      <div className={bkgPattern} />

      <button
        className={navToggleClass}
        aria-controls="primary-navigation"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {!isActive ? <RiMenu4Line /> : <RiCloseLine />}
        <span className="sr-only">Menu</span>
      </button>
      <nav className={navClass}>
        <Image
          src="/assets/logo.svg"
          width={48}
          height={48}
          alt="cyanChill logo"
          className="absolute left-4 top-2"
        />

        <div className="mx-12 mt-auto py-32">
          <ul className="flex flex-col gap-4 text-3xl font-medium">
            {["Home", "Projects", "About"].map((route) => {
              const derivedRoute =
                route != "Home" ? `/${route.toLowerCase()}` : "/";
              const isActive = derivedRoute === pathname;

              let linkClass =
                "relative before:h-[2px] before:w-[1.5ch] before:bottom-0 before:left-0 before:absolute hocus:opacity-100 hocus:before:bg-white";
              if (!isActive) linkClass += " opacity-70";
              else linkClass += " before:bg-white";

              return (
                <li key={route} className="w-fit">
                  <Link
                    href={derivedRoute}
                    className={linkClass}
                    onClick={() => setIsActive(false)}
                  >
                    {route}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="mt-12 flex w-fit items-center gap-1 rounded-md bg-slate-800 p-2 py-1.5 font-bold"
          >
            {`Let's work together`}
            <BsArrowRightShort />
          </Link>

          <div className="mt-8 flex gap-3 text-2xl xs:hidden">
            <a href="https://github.com/cyanChill" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anthonyliang9/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
