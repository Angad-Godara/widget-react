import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Bundle into a single file
        manualChunks: undefined, // Disable manual chunks
        entryFileNames: 'gs.js', // Output filename
      },
    },
  },
})
