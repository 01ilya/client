/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grey': '#363842',
        'grey_bg': '#363842',
        'blue_bg': '#6AB6EE',
      },
      fontWeight: {
       'B1': '300',
       'G1': '#6AB6EE00',
       'G2': '#6AB6EE',
      },
      backgroundImage: {
        'line_menu': "url('/public/images/line_menu.png')",
      },
    },
  },
  plugins: [],
}

