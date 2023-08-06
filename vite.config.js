import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import';


export default {
	root: 'src/client',
	publicDir: 'public',
	mode: 'production',

	build: {
		mode: 'production',
		manifest: false,
		outDir: '../../dist/client/',
		emptyOutDir: true,
		minify: 'terser',
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'src/client', 'index.html'),
				// app: 'src/client/js/app.js',
				// main: 'src/client/js/main.js',
			},
			output: {
				entryFileNames: `js/[name].js`,
				chunkFileNames: 'js/pages/[name].js',
				assetFileNames: `assets/[name].[ext]`,
			},
		},
		resolve: {
			alias: [
				{
					find: '@',
					replacement: path.resolve(__dirname, 'src/client/js'),
				},
				{
					find: './resources',
					replacement: path.resolve(__dirname, 'src/client/public/resources'),
				},
			],
		},
		assetsInclude: ['resources/*.*'],
	},

	plugins: [dynamicImport()],

	server: {
		host: '0.0.0.0',
		port: 3000,
		// https: true,
	},
};
