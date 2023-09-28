import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
	],

	kit: {
		adapter: adapter()
	},

	ssr: {
		noExternal: ['@corbado/webcomponent']
	}
};

export default config;
