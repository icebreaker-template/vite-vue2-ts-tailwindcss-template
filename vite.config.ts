import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
