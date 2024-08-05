import catppuccin from '@catppuccin/tailwindcss';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purple-glow': '0 0 25px #EC9CA8',
      },
      colors: {
        'primary': '#EC9CA8'
      }
    },
  },
  plugins: [catppuccin({
    prefix: "ctp",
    defaultFlavour: "mocha",
  }),
  function({ addUtilities }) {
    addUtilities({
      '.text-shadow-glow': {
        textShadow: '0 0 20px #EC9CA8 ',
      },
    }, ['responsive', 'hover']);
  },

  ],
}
