import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src', // Root Directory
  publicDir: '../public', // Public Directory (from root)
  base: '/holyfans/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: [resolve(__dirname, 'src/index.html')],
    },
  },
})
