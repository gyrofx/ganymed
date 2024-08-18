module.exports = {
  content: [
    "./content/**/*.{html,md}", 
    "./layouts/**/*.{html,md}", 
    "./themes/eco/content/**/*.{html,md}", 
    "./themes/eco/layouts/**/*.{html,md}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "bumblebee"],
  },
}
