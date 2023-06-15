"use client";

import usePathChange from "@/hooks/usePathChange";

export default function DynamicBkg() {
  const { pathname, finished } = usePathChange(300);

  // Dynamically change the background based on the current route
  let bkgPattern: string;
  if (pathname === "/") bkgPattern = "bg-home-pattern";
  else if (pathname === "/about") bkgPattern = "bg-about-pattern";
  else if (pathname === "/projects") bkgPattern = "bg-projects-pattern";
  else if (pathname.startsWith("/projects/overview")) {
    bkgPattern = "bg-primary-bkg";
  } else if (pathname === "/contact") bkgPattern = "bg-contact-pattern";
  else bkgPattern = "bg-error-pattern";

  /* Dynamic background based on route*/
  return (
    <div
      className={`fixed inset-0 -z-10 h-screen w-screen bg-cover bg-no-repeat ${bkgPattern} opacity-0 transition ease-in ${
        finished ? "!opacity-100 duration-300" : ""
      }`}
    />
  );
}
