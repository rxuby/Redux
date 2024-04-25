import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@assets": path.resolve(__dirname, "src/assets"),

    },
    extensions: ['.ts', '.tsx', '.js']
  },

  server: {
    open: true 
  },
})
