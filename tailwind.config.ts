/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#000000",
        "bg-medium": "#1a0026",
        "bg-light": "#4a004a",

        "neon-pink": {
          DEFAULT: "#FF00FF",
          light: "#FF66FF",
        },
        "neon-blue": {
          DEFAULT: "#00FFFF",
          light: "#66FFFF",
        },
        "neon-white": "#FFFFFF",
      },
      boxShadow: {
        "glow-pink": "0 0 15px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.4)",
        "glow-blue": "0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
}