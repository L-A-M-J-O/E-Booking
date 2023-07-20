/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      display: ["Pally", "Comic Sans MS", "sans-serif"],
      body: ["Pally", "Comic Sans MS", "sans-serif"],
    },
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("flowbite/plugin")],
};
