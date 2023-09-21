import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import '$lib/stylesheets/global';
					@import '$lib/stylesheets/config';
				`,
			},
		},
	},
	preview: {
		host: true,
		port: 3000,
	},
});
