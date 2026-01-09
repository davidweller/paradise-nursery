import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages deployment, update the base path to match your repository name
// Example: base: '/your-repo-name/'
// For root deployment, use: base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/'
})

