import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using HashRouter, so base can be relative
export default defineConfig({
  plugins: [react()],
  base: './'
})

