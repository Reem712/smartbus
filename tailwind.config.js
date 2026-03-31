/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0d0f11",
        sidebarBg: "#0e1114",
        accent: "#f9b233",
        cardBg: "#161a1f",
        textGray: "#8a8d91",
        success: "#3ddc97",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
