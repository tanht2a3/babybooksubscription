/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(229, 228, 96)',
        accent: 'rgb(253, 234, 227)',
        teal: 'rgb(61, 130, 142)',
      },
      fontFamily: {
        'parkinsans': ['Parkinsans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
