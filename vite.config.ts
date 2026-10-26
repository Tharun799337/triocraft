import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // In local dev, forward /api/* → http://localhost:4000/api/*
      // In production (Render), VITE_API_URL points to the deployed API service
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})


