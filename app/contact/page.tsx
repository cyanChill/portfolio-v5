import { FaGithub, FaLinkedin } from "react-icons/fa";

import CenterLayout from "@/components/layout/CenterLayout";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact | Anthony Liang",
  description: "Let's work together.",
};

export default function Contact() {
  return (
    <CenterLayout className="my-20 grid gap-4 px-6 sm:py-8 md:my-auto md:grid-cols-2 md:gap-10 md:px-20 animate-pop-in opacity-0">
      <section>
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-primary-text">Contact</span>
        </h1>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          Fill out the form or shoot me an email directly at{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
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
          <FaGithub className="inline" />{" "}
          <span className="text-base opacity-80">/cyanChill</span>
        </a>
        <a
          href="https://www.linkedin.com/in/anthonyliang9/"
          target="_blank"
          className="w-fit"
        >
          <FaLinkedin className="inline" />{" "}
          <span className="text-base opacity-80">/anthonyliang9</span>
        </a>
      </section>
    </CenterLayout>
  );
}
