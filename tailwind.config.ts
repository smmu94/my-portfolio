/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        primary: "#db2777",
        "primary-light": "#fbcfe8",
        secondary: "#6ff",
        dark: "#000000",
        light: "#ffffff",
        "text-secondary": "#9ca3af",
      },
      boxShadow: {
        neon: "0 0 20px #6ff, 0 0 40px #6ff",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #000 0%, #000 60%, #3b001f 100%)",
      },
    },
  },
  plugins: [],
};
