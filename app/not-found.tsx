import Image from "next/image";

import CenterLayout from "@/components/layout/CenterLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <CenterLayout
      className="my-20 grid gap-4 px-4 sm:py-8 md:my-auto md:grid-cols-2 md:gap-10 md:px-20"
      main
    >
      <Image
        src="/ui/error-img.svg"
        width={489}
        height={403}
        alt="404 image"
        className="justify-self-center"
      />
      <section className="md:my-auto">
        <h1 className="text-4xl font-bold md:text-6xl">Oops!</h1>
        <h2 className="mt-2 text-2xl font-semibold md:text-4xl">
          We couldn&apos;t find that page.
        </h2>
        <p className="mt-4 text-xl font-light md:text-2xl">
          Maybe you can find what you need here?
        </p>
        <div className="mt-3 flex gap-2 text-sm font-bold sm:text-base">
          <Link
            href="/projects"
            className="gradient-primary flex items-center rounded-md bg-gradient-to-r p-2 py-1 text-center sm:p-3 sm:py-1.5"
          >
            My Projects
          </Link>
          <Link
            href="/about"
            className="flex items-center rounded-md border-2 border-primary p-2 py-1 text-center sm:p-3 sm:py-1.5"
          >
            About Me
          </Link>
          <Image src="/ui/arrow.svg" width={37} height={39} alt="arrow" />
        </div>
      </section>
    </CenterLayout>
  );
}
