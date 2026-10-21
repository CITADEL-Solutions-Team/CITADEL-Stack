import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import axios from 'axios'
import { sitemap } from './build/sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader(),
    sitemap(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/test': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      }
    }
  }
})
