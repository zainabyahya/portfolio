/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'bebas': ["'Bebas Neue'"],
      },

    },
  },
  corePlugins: {
    animation: true,
  },
  plugins: [],
}

