import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 👈 important for Flask to serve assets correctly
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  preview: {
    port: process.env.PORT, // Use the port Render provides
    host: true, // Bind to 0.0.0.0 (external access)
    allowedHosts: ['wellness-tracker-9b8i.onrender.com'], // Allow Render to access it
  },
})
