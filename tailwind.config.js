module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "gw-blue-dark": "#112031",
        "gw-blueish-green": "#152D35",
        "gw-blue": "#345B63",
        "gw-light": "#345B63",
      },
      screens: {
        'phone': '375px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop':'1280px'
      }
    },
    fontFamily: {
      Helvetica: ["Helvetica, sans-serif"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
