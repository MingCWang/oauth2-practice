import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const sourceJSPattern = /\/src\/.*\.js$/;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		loader: "jsx",
		include: [sourceJSPattern],
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
		},
	},
})

