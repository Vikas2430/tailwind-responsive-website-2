/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./public/index.html"
    ],
  
    theme: {
      extend: {
        boxShadow: {
          'DEFAULT': '0px 4px 24px 0px #4343432E',
          'purple': '0px 4px 24px 0px #647CFF2E',
        }
      },
      container: {
        center: true,
      },
    },
    plugins: [],
  }