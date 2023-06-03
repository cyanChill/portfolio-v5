export type ProjectData = {
  thumbnail: { url: string; colorHex: string };
  title: string;
  brief: string;
  technologies: string[];
}[];

export const PROJECTS: ProjectData = [
  {
    thumbnail: {
      url: "/assets/projects/GitInspire/thumbnail.webp",
      colorHex: "#ddcce4",
    },
    title: "GitInspire",
    brief:
      "A platform to discover new repositories and bring life back to abandoned ones.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Flask",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    thumbnail: {
      url: "/assets/projects/OdinWorks/thumbnail.webp",
      colorHex: "#83a3f7",
    },
    title: "OdinWorks",
    brief:
      "A facebook clone to demonstrate skill in creating a full-stack application for The Odin Project.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
];
