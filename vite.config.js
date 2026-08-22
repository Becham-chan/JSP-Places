import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set VITE_BASE_PATH to '/<repo-name>/'
// e.g. VITE_BASE_PATH=/kioku-no-basho/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
