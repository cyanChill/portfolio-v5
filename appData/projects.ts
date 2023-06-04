export type ProjectData = {
  thumbnail: { url: string; colorHex: string };
  title: string;
  brief: string;
  technologies: string[];
}[];

export const PROJECTS: ProjectData = [
  {
    thumbnail: {
      url: "/assets/projects/Portfolio/thumbnail.webp",
      colorHex: "#867dbc",
    },
    title: "Portfolio",
    brief: "5th time's the charm, right?",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AWS", "Upstash"],
  },
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
    brief: "View posts from a private network of friends.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    thumbnail: {
      url: "/assets/projects/Next-Instagram/thumbnail.webp",
      colorHex: "#ff8f66",
    },
    title: "Next-Instagram",
    brief: "Share a visual representation of your life to the world.",
    technologies: ["Next.js", "MongoDB", "Firebase"],
  },
  {
    thumbnail: {
      url: "/assets/projects/GradSchoolZero/thumbnail.webp",
      colorHex: "#aaf5ac",
    },
    title: "GradSchoolZero",
    brief:
      "A mock graduation management application which allows for the creation of classes, class registration by users, and grade management.",
    technologies: ["React", "Bootstrap", "JSON Server"],
  },
  {
    thumbnail: {
      url: "/assets/projects/PC-Parts-List/thumbnail.webp",
      colorHex: "#ff6666",
    },
    title: "PC Parts List",
    brief:
      "An application for first-time PC builders to plan out their builds - modeled after PCPartPicker and made entirely in Node.js with the Pug template engine.",
    technologies: ["Node.js", "Express", "Pug", "MongoDB", "Workbox"],
  },
  {
    thumbnail: {
      url: "/assets/projects/Canal-Street-Market/thumbnail.webp",
      colorHex: "#fff482",
    },
    title: "Canal Street Market",
    brief:
      "A visual clone of the Canal Street Market site which demonstrates intriguing animations and abnormal layout designs.",
    technologies: ["React", "TypeScript"],
  },
  {
    thumbnail: {
      url: "/assets/projects/Doelist/thumbnail.webp",
      colorHex: "#646cc9",
    },
    title: "Doelist",
    brief: "Write out your thoughts and organize them in categories.",
    technologies: ["JavaScript", "Webpack", "Workbox"],
  },
  {
    thumbnail: {
      url: "/assets/projects/Space-Tourism-Site/thumbnail.webp",
      colorHex: "#2956ce",
    },
    title: "Space Tourism Site",
    brief:
      "Interested in space travel? View our past crew members and destinations.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    thumbnail: {
      url: "/assets/projects/Shopping-Cart-App/thumbnail.webp",
      colorHex: "#e0e0e0",
    },
    title: "Shopping Cart App",
    brief:
      "An ecommerce application Modeled after lttstore.com, with authentication with Google allowing your shopping cart to be saved in Firebase.",
    technologies: ["React", "Firebase"],
  },
];
