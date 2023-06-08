import Image from "next/image";

import * as skillData from "@/appData/skills";
import CenterLayout from "@/components/layout/CenterLayout";

export const metadata = {
  title: "About | Anthony Liang",
  description: "Learn more about me.",
};

export default function About() {
  return (
    <CenterLayout className="my-20 grid gap-4 px-6 sm:py-8 lg:my-auto lg:grid-cols-2 lg:gap-10 lg:px-20">
      <section className="md:my-auto">
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="gradient-primary-text">Who am I?</span>
        </h1>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          A full-stack developer from Brooklyn, New York who recently graduated
          from <span className="font-bold">The City College of New York</span>{" "}
          with a bachelor&apos;s in computer science. I&apos;ve started off
          interested in front-end web development, which led to a love for
          back-end development through the help of resources such as{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            className="underline"
          >
            freeCodeCamp
          </a>{" "}
          and{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            className="underline"
          >
            The Odin Project
          </a>
          .
        </p>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          Loving both sides of the spectrum, I settled into the world of
          full-stack development, working on projects to hone my skills.
        </p>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          I&apos;m currently learning the{" "}
          <a href="https://create.t3.gg/" target="_blank" className="underline">
            T3 Stack
          </a>
          , whose core principle is &ldquo;simplicty, modularity, and full-stack
          typesafety&rdquo;.
        </p>
        <p className="mt-2 text-sm sm:mt-4 sm:text-base">
          <span className="font-bold">Outside of coding</span>, I&apos;m an avid
          reader of novels.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_RESUME}
          target="_blank"
          className="mt-4 flex w-fit items-center rounded-md bg-primary p-2 py-1 text-center text-sm font-bold sm:p-3 sm:py-1.5 sm:text-base"
        >
          View My Resume
        </a>
      </section>

      <section className="mt-4 grid gap-2 sm:mx-8 sm:grid-cols-2 lg:mx-0 lg:mt-0">
        <SkillGroup
          label="Front End"
          bgColor="bg-slate-700"
          icons={skillData.FRONT_END}
        />
        <SkillGroup
          label="Back End"
          bgColor="bg-slate-600"
          icons={skillData.BACK_END}
          className="mt-auto"
        />
        <SkillGroup
          label="Developer Tools"
          bgColor="bg-slate-800"
          icons={skillData.DEVELOPMENT_TOOLS}
          className="sm:col-span-2 sm:ml-[clamp(6rem,3vw,8rem)]"
        />
      </section>
    </CenterLayout>
  );
}

type SkillGroupType = {
  label: string;
  bgColor?: string;
  icons: skillData.SkillData;
  className?: string;
};

const SkillGroup = ({
  label,
  bgColor = "bg-slate-900",
  icons,
  className,
}: SkillGroupType) => {
  return (
    <div className={`rounded-lg p-4 ${bgColor} ${className}`}>
      <p className="text-2xl font-semibold">{label}</p>
      <div className="mt-2 grid grid-cols-[repeat(auto-fit,70px)] justify-evenly gap-2">
        {icons.map((icon) => {
          let iconEl: JSX.Element;
          if (icon.icon.startsWith("devicon")) {
            iconEl = <i className={`${icon.icon} colored text-4xl`} />;
          } else {
            iconEl = (
              <Image
                src={`/icons/${icon.icon}.svg`}
                width={36}
                height={36}
                alt={`${icon.name} icon`}
                className="h-8 w-8"
              />
            );
          }

          return (
            <div
              key={icon.name}
              className="flex w-[70px] flex-col items-center text-xs"
            >
              {iconEl}
              <p className="mt-auto">{icon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
