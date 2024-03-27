/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ["LibreFranklin", "sans-serif"],
        "libre-franklin-italic": ["LibreFranklin-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
