/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        InterMedium: ['InterMedium', 'sans-serif'],
        InterBold: ['InterBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
