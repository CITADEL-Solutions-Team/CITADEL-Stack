import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
=======
import vueDevTools from 'vite-plugin-vue-devtools'
>>>>>>> origin/dev

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
<<<<<<< HEAD
    }
  }
})
=======
    },
  },
})
>>>>>>> origin/dev
