/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        band: {
          50: "#edf5ff",
          100: "#d7e8ff",
          200: "#b3d3ff",
          300: "#84b7ff",
          400: "#5294ff",
          500: "#2a74ff",
          600: "#175af2",
          700: "#1448c4",
          800: "#123e9a",
          900: "#112f6f",
        },
      },
    }
  },
  plugins: [],
}

