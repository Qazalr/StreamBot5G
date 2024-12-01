/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#0d0e37",
        "prime": "#0a83e8"
      },
    },
  },
  plugins: [],
}

