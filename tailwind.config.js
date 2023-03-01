/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'terasa': "url('/img/terasa.png')",
        'pasman-01': "url('/img/pasman-01.jpg')",
        'pasman-02': "url('/img/pasman.jpg')",
        'rocky-seaside': "url('/img/rocky-seaside.jpg')",
      },
      zIndex: {
        '100': '100',
      },
      colors: {
        primary: '#03497E',
        secondary: '#0596D5',
        accent: '#FEB228'
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
