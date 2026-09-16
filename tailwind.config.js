/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0b',
        canvas: '#0f0f11',
        accent: '#C6FF00',
        'text-primary': '#191a1d', // Dark cards
        'text-light': '#FFFFFF',
        'text-muted': '#a0a0a0',
        'neon': '#C6FF00',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1280px',
        },
      }
    },
  },
  plugins: [],
}
