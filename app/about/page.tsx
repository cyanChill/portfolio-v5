import Image from "next/image";

import CenterLayout from "@/components/layout/CenterLayout";
import * as skillData from "@/appData/skills";

export default function About() {
  return (
    <CenterLayout className="my-20 grid gap-4 px-6 sm:px-20" main>
      <section>
        <h1 className="text-3xl font-bold sm:text-6xl">
          <span className="gradient-primary-text">Who am I?</span>
        </h1>
        <p className="mt-2 text-sm">
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
        <p className="mt-2 text-sm">
          Loving both sides of the spectrum, I settled into the world of
          full-stack development, working on projects to hone my skills.
        </p>
        <p className="mt-2 text-sm">
          I&apos;m currently learning the{" "}
          <a href="https://create.t3.gg/" target="_blank" className="underline">
            T3 Stack
          </a>
          , whose core principle is &ldquo;simplicty, modularity, and full-stack
          typesafety&rdquo;.
        </p>
        <p className="mt-2 text-sm">
          <span className="font-bold">Outside of coding</span>, I&apos; an avid
          reader of novels.
        </p>
        <a
          href=""
          target="_blank"
          className="mt-4 flex w-fit items-center rounded-md bg-primary p-2 py-1 text-center text-sm font-bold sm:p-3 sm:py-1.5 sm:text-base"
        >
          View My Resume
        </a>
      </section>

      <section className="grid gap-2">
        <SkillGroup
          label="Front End"
          bgColor="bg-slate-700"
          icons={skillData.FRONT_END}
        />
        <SkillGroup
          label="Back End"
          bgColor="bg-slate-600"
          icons={skillData.BACK_END}
        />
        <SkillGroup
          label="Developer Tools"
          bgColor="bg-slate-800"
          icons={skillData.DEVELOPMENT_TOOLS}
        />
      </section>
    </CenterLayout>
  );
}

type SkillGroupType = {
  label: string;
  bgColor?: string;
  icons: skillData.SkillData;
};

const SkillGroup = ({
  label,
  bgColor = "bg-slate-900",
  icons,
}: SkillGroupType) => {
  return (
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <p className="text-2xl font-semibold">{label}</p>
      <div className="mt-2 grid grid-cols-[repeat(auto-fit,80px)] justify-between gap-2">
        {icons.map((icon) => {
          let iconEl: JSX.Element;
          if (icon.icon.startsWith("devicon")) {
            iconEl = <i className={`${icon.icon} colored text-4xl`} />;
          } else {
            iconEl = (
              <Image
                src={`/assets/icons/${icon.icon}.svg`}
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
              className="flex w-20 flex-col items-center text-xs"
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