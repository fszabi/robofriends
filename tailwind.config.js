/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      mono: ["VT323", "monospace"],
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to left, #071b52 0%, #008080 100%)",
      },
    },
  },
  plugins: [],
};
