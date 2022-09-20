/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      acme: ["'Acme'", "sans-serif"],
    },
    extend: {
      colors: {
        cc: {
          100: "#4f4f4f",
          200: "#242424",
          300: "#c6c7c3",
          400: "#e7c48b",
          500: "#ff0000",
        },
      },
    },
  },
  plugins: [],
};
