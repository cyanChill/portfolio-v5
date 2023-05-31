const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-pattern":
          "var(--blur-gradient), url('/assets/ui/home-pattern.svg')",
        "about-pattern":
          "var(--blur-gradient), url('/assets/ui/about-pattern.svg')",
        "projects-pattern":
          "var(--blur-gradient), url('/assets/ui/projects-pattern.svg')",
        "project-pattern":
          "var(--blur-gradient), url('/assets/ui/project-pattern.svg')",
        "contact-pattern":
          "var(--blur-gradient), url('/assets/ui/contact-pattern.svg')",
        "error-pattern":
          "var(--blur-gradient), url('/assets/ui/error-pattern.svg')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ff00e6",

        /* Gradient color classes */
        "pg-start": "rgb(255 0 230 / 1)",
        "pg-to": "rgb(255 131 61 / 0.86)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
