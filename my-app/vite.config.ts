import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   server: { port: 3000 },
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/internet_applications_development_frontend/' 
    : '/',
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000", // ← Исправьте на 8000!
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // ← Сохраняем /api!
      },
    },
  },
})