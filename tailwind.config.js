/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('https://i.ibb.co.com/H2BxJ6P/banner.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

