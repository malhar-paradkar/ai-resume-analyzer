/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#22D3EE",
      },
    },
  },
  plugins: [],
}