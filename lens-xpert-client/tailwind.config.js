/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7f44af",
          "secondary": "#04f96f",
          "accent": "#8978db",
          "neutral": "#22262a",
          "base-100": "#ffffff",
          "info": "#74acf6",
          "success": "#0d7241",
          "warning": "#eed463",
          "error": "#f95873",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

