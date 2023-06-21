import { FaGithub, FaLinkedin } from "react-icons/fa";

import genMetaData from "@/lib/server-metadata";
import CenterLayout from "@/components/layout/CenterLayout";
import { GradText } from "@/components/Gradient";
import ContactForm from "@/components/contact-form";

export const metadata = genMetaData({
  title: "Contact",
  description: "Let's work together.",
  url: "https://cyanchill.com/contact",
});

export default function Contact() {
  return (
    <CenterLayout className="page-container grid animate-pop-in gap-4 opacity-0 md:my-auto md:grid-cols-2 md:gap-10">
      <section>
        <h1 className="title">
          <GradText content="Contact" durationMS={500} delayMS={300} />
        </h1>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          Fill out the form or shoot me an email directly at{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ""}`}
            className="font-bold"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </p>

        <ContactForm />
      </section>
      <section className="mt-4 flex flex-col gap-3 text-2xl sm:mt-14">
        <a
          href="https://github.com/cyanChill"
          target="_blank"
          className="w-fit"
        >
          <span className="sr-only">Link to my GitHub</span>
          <FaGithub className="inline" />{" "}
          <span className="text-base opacity-80">/cyanChill</span>
        </a>
        <a
          href="https://www.linkedin.com/in/anthonyliang9/"
          target="_blank"
          className="w-fit"
        >
          <span className="sr-only">Link to my LinkedIn</span>
          <FaLinkedin className="inline" />{" "}
          <span className="text-base opacity-80">/anthonyliang9</span>
        </a>
      </section>
    </CenterLayout>
  );
}
