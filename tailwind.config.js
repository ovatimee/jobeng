/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
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
          "0%": { transform: 'translateX(300px)', opacity: '0'}
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
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
