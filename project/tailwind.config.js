/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
        serif: ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}

