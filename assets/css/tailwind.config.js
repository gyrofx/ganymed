import franken from 'franken-ui/shadcn-ui/preset-quick';


module.exports = {
  // darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [
  //   require('@tailwindcss/aspect-ratio'),
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/typography'),
  // ]
  presets: [franken({theme: 'orange'})],
	// content: [],
	safelist: [
		{
			pattern: /^uk-/
		}
	],
	theme: {
		extend: {}
	},
	plugins: []
}
