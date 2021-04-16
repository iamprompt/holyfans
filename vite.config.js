import { defineConfig } from 'vite'
import { resolve } from 'path'

const baseUrl = process.env.APP_ENV === 'PROD' ? '/holyfans/' : '/'

export default defineConfig({
  root: 'src', // Root Directory
  publicDir: '../public', // Public Directory (from root)
  base: baseUrl,
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: [
        resolve(__dirname, 'src/index.html'),
        resolve(__dirname, 'src/aboutus.html'),
        resolve(__dirname, 'src/explore.html'),
        resolve(__dirname, 'src/result.html'),
        resolve(__dirname, 'src/login.html'),
        resolve(__dirname, 'src/logout.html'),
        resolve(__dirname, 'src/register.html'),
      ],
    },
  },
})
