/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'white': '#ffffff',
        'white-bg': '#e9e9e9',
        'black': "#000000",
        'red-1': "#fa1e4e",
        'red-2': "#ce2654",
        'red-3': "#a22e5a",
        'red-mixed': "#76365f",
        "blue": "#4a3e65",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily : {
        'tilt': ['Tilt Warp', 'sans-serif'],
        'league': ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
