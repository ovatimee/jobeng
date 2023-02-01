/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'max-5xl': { 'max': '1300px' },
      'max-4xl': { 'max': '990px' },
      'max-3xl': { 'max': '1212px' },
      'max-2xl': { 'max': '930px' },
      'max-xl': { 'max': '760px' },
      'max-xs': { 'max': '730px' },
      'max-xd': { 'max': '620px' },
      'max-lg': { 'max': '590px' },
      'max-md': { 'max': '520px' },
      'max-sm': { 'max': '380px' },
      'md': '992px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {
      colors: {
        "body-bg-color": "#e5ecef",
        "theme-bg-color": "#fafafb",
        "body-color": "#2f2f33",
        "active-light-color": "#e1ebfb",
        "active-color": "#0162ff",
        "header-bg-color": "#fff",
        "search-border-color": "#efefef",
        "border-color": "#d8d8d8",
        "alert-bg-color": "#e8f2ff",
        "subtitle-color": "#83838e",
        "inactive-color": "#f0f0f0",
        "placeholder-color": "#9b9ba5",
        "time-button": "#fc5757",
        "level-button": "#5052d5",
        "button-color": "#fff",
      },
      keyframes: {
        slideY: {
          "0%": { transform: "translateY(200px)" },
        },
        slide: {
          "0%": { transform: 'translateX(300px)', opacity: '0' }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        slideY: "slideY 0.6s both",
        slide: "slide 0.6s both",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      boxShadow: {
        "3d": "-6px 0 0 0 #9b9ba5, 6px 0 0 0 #9b9ba5",
        "btn": "0px 12px 40px -12px rgb(83, 82, 237)"
      },
      transitionDuration: {
        '150': '1.5s',
      },
      rotate: {
        '340': '340deg'
      },
      blur: {
        '4xl': '100px',
      },
      fontFamily: {
        'cursive': ['cursive']
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};
