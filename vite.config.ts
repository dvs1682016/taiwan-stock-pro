import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/taiwan-stock-pro/', // 注意：這裡必須換成您的 GitHub Repository 名稱
  build: {
    outDir: 'dist',
  }
})