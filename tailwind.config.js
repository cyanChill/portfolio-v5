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
      animation: {
        "pop-in": "pop-in 300ms ease-in-out 150ms forwards",
        slideX: "slideX 1s ease-in-out infinite alternate forwards",
        slideY: "slideY 1s ease-in-out infinite alternate forwards",
      },
      backgroundImage: {
        "home-pattern": "var(--blur-gradient), url('/ui/home-pattern.svg')",
        "about-pattern": "var(--blur-gradient), url('/ui/about-pattern.svg')",
        "projects-pattern":
          "var(--blur-gradient), url('/ui/projects-pattern.svg')",
        "project-pattern":
          "var(--blur-gradient), url('/ui/project-pattern.svg')",
        "contact-pattern":
          "var(--blur-gradient), url('/ui/contact-pattern.svg')",
        "error-pattern": "var(--blur-gradient), url('/ui/error-pattern.svg')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ff00e6",
        "primary-bkg": "#020617",

        /* Gradient color classes */
        "pg-start": "rgb(255 0 230 / 1)",
        "pg-to": "rgb(255 131 61 / 0.86)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: 0, transform: "translateY(1.5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideX: {
          "0%": { translate: "0%" },
          "100%": { translate: "25%" },
        },
        slideY: {
          "0%": { translate: "0 0%" },
          "100%": { translate: "0 25%" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
