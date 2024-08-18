module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.{html,md}",
    "./themes/eco/content/**/*.{html,md}",
    "./themes/eco/layouts/**/*.{html,md}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "bumblebee",
      {
        ganymed: {
          primary: "#f79522",
          secondary: "#f79400",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
