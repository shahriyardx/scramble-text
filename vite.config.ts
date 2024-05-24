import { extname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { glob } from "glob"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ include: ["src"] })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: Object.fromEntries(
				// https://rollupjs.org/configuration-options/#input
				glob
					.sync("src/**/*.{ts,tsx}", { ignore: "src/**/*.stories.{ts,tsx}" })
					.map((file) => [
						// 1. The name of the entry point
						// lib/nested/foo.js becomes nested/foo
						relative("src", file.slice(0, file.length - extname(file).length)),
						// 2. The absolute path to the entry file
						// lib/nested/foo.ts becomes /project/lib/nested/foo.ts
						fileURLToPath(new URL(file, import.meta.url)),
					]),
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
})
