"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import CenterLayout from "./CenterLayout";

export default function NavBar() {
  const pathname = usePathname();

  const navMenu = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const setNavState = (open: boolean) => {
    if (document && navMenu.current) {
      if (open) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
        navMenu.current.scrollTo({ top: 0 });
      }
    }
  };

  let navToggleClass =
    "z-50 fixed right-0 top-4 rounded-l-full p-1 px-4 text-3xl sm:hidden";
  if (!isOpen) navToggleClass += " gradient-primary bg-gradient-to-r";

  // Close nav on mobile when routes changes
  useEffect(() => {
    setIsOpen(false);
    setNavState(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile nav control */}
      <button
        className={navToggleClass}
        onClick={() =>
          setIsOpen((prev) => {
            setNavState(!prev);
            return !prev;
          })
        }
      >
        <span className="sr-only">Menu</span>
        {!isOpen ? <RiMenu4Line /> : <RiCloseLine />}
      </button>

      <CenterLayout variant="header">
        <nav
          className={`fixed left-0 top-0 z-40 flex h-screen w-screen flex-col overflow-y-auto overscroll-none bg-primary-bkg px-12 transition duration-500 sm:relative sm:mx-6 sm:mt-4 sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:justify-between sm:bg-transparent sm:px-0 sm:duration-0 ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-full opacity-0 sm:pointer-events-auto sm:translate-x-0 sm:opacity-100"
          }`}
          ref={navMenu}
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              alt="cyanChill logo"
              className="absolute left-4 top-2 sm:static"
            />
          </Link>

          <ul className="mt-auto flex flex-col gap-4 pt-32 text-3xl font-medium sm:m-0 sm:flex-row sm:gap-12 sm:py-0 sm:text-lg md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-16 lg:gap-20">
            {["Home", "Projects", "About"].map((route) => {
              const derivedRoute =
                route != "Home" ? `/${route.toLowerCase()}` : "/";
              const isActive = derivedRoute === pathname;

              return (
                <li key={route} className="w-fit">
                  <Link
                    href={derivedRoute}
                    className="animated-nav-link"
                    data-active={isActive}
                  >
                    {route}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={`btn btn-lg mt-12 gap-1 border-2 px-2 text-base transition duration-300 sm:mt-0 sm:h-fit ${
              pathname === "/contact"
                ? "border-white"
                : "border-slate-800 bg-slate-800 hocus:border-white hocus:bg-transparent"
            }`}
          >
            {`Let's work together`}
            <BsArrowRightShort
              className={`transition duration-300 ${
                pathname === "/contact"
                  ? "rotate-90 animate-slideY"
                  : "animate-slideX"
              }`}
            />
          </Link>

          <div className="mt-8 flex gap-3 pb-32 text-2xl sm:hidden">
            <a href="https://github.com/cyanChill" target="_blank">
              <span className="sr-only">Link to my GitHub</span>
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anthonyliang9/"
              target="_blank"
            >
              <span className="sr-only">Link to my LinkedIn</span>
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </CenterLayout>
    </>
  );
}
