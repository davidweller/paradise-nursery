import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Base path for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/'
})

