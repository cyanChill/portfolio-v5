"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import CenterLayout from "./CenterLayout";

export default function NavBar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Dynamically change the background based on the current route
  let bkgPattern =
    "fixed inset-0 -z-10 h-screen w-screen bg-cover bg-no-repeat ";
  if (pathname === "/") bkgPattern += "bg-home-pattern";
  else if (pathname === "/about") bkgPattern += "bg-about-pattern";
  else if (pathname === "/projects") bkgPattern += "bg-projects-pattern";
  else if (pathname.startsWith("/projects/overview")) {
    bkgPattern += "bg-project-pattern";
  } else if (pathname === "/contact") bkgPattern += "bg-contact-pattern";
  else bkgPattern += "bg-error-pattern";

  let navToggleClass =
    "z-50 fixed right-0 top-4 rounded-l-full p-1 px-4 text-3xl sm:hidden";
  if (!isOpen) navToggleClass += " gradient-primary bg-gradient-to-r";

  // Close nav on mobile when routes changes
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      {/* Dynamic background based on route*/}
      <div className={bkgPattern} />
      {/* Mobile nav control */}
      <button
        className={navToggleClass}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? <RiMenu4Line /> : <RiCloseLine />}
        <span className="sr-only">Menu</span>
      </button>

      <CenterLayout>
        <nav
          className={`fixed left-0 top-0 z-40 flex h-screen w-screen flex-col overflow-y-auto bg-slate-950 px-12 sm:relative sm:mx-6 sm:mt-4 sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:justify-between sm:bg-transparent sm:px-0 ${
            isOpen
              ? "visible"
              : "pointer-events-none invisible sm:pointer-events-auto sm:visible"
          }`}
        >
          <Image
            src="/assets/logo.svg"
            width={48}
            height={48}
            alt="cyanChill logo"
            className="absolute left-4 top-2 sm:static"
          />

          <ul className="mt-auto flex flex-col gap-4 pt-32 text-3xl font-medium sm:m-0 sm:flex-row sm:gap-12 sm:py-0 sm:text-lg md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-20">
            {["Home", "Projects", "About"].map((route) => {
              const derivedRoute =
                route != "Home" ? `/${route.toLowerCase()}` : "/";
              const isActive = derivedRoute === pathname;

              return (
                <li key={route} className="w-fit">
                  <Link
                    href={derivedRoute}
                    className={`relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[1.5ch] hocus:opacity-100 hocus:before:bg-white ${
                      isActive ? "before:bg-white" : "opacity-70"
                    }`}
                  >
                    {route}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={`mt-12 flex w-fit items-center gap-1 rounded-md border-2 p-2 py-1.5 font-bold sm:mt-0 sm:h-fit ${
              pathname === "/contact"
                ? "border-white"
                : "border-slate-800 bg-slate-800"
            }`}
          >
            {`Let's work together`}
            <BsArrowRightShort
              className={pathname === "/contact" ? "rotate-90" : ""}
            />
          </Link>

          <div className="mt-8 flex gap-3 pb-32 text-2xl sm:hidden">
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
        </nav>
      </CenterLayout>
    </>
  );
}
