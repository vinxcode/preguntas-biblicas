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
        'black': '#292F36',
        'red': "FF6B6B",
        'yellow': "FFE66D",
        'green': "4ECDC4",
        'white-soft': "F7FFF7",
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
