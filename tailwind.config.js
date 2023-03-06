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
        secondary: {
          500: '#69c0e5',
          600: '#50b5e1',
          700: '#36abdd',
          800: '#1da0d9',
          900: '#0596d5',
          1000: '#0487bf',
        },
        accent: {
          50: '#fef7e9',
          100: '#feefd4',
          200: '#fee7be',
          300: '#fee0a9',
          400: '#fed893',
          500: '#fed07e',
          600: '#fec968',
          700: '#fec152',
          800: '#feb93d',
          900: '#FEB228',
          1000: '#e4a024',
        },
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
