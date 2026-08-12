/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF3EA",
        ink: {
          DEFAULT: "#2B211C",
          muted: "#5C4D44",
          subtle: "#8A7A70",
        },
        terracotta: {
          DEFAULT: "#C97D5D",
          soft: "#E8B4A0",
          deep: "#8C4A32",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
