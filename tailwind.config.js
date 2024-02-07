/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'c-lg': '0 0 10px 2px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}



