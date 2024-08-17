import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [franken({ theme: "orange" })],
	content: [],
	safelist: [
		{
			pattern: /^uk-/
		}
	],
	theme: {
		extend: {}
	},
	plugins: []
};
