/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'naruto-orange': '#FF5D00',
        'chakra-blue': '#00A2FF',
        'ninja-black': '#1a1a1a',
        'scroll-paper': '#f4e4bc',
      },
      fontFamily: {
        'ninja': ['Bangers', 'cursive'], // We'll need to import this font
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00A2FF' },
          '100%': { boxShadow: '0 0 20px #00A2FF, 0 0 10px #FF5D00' },
        }
      }
    },
  },
  plugins: [],
}
