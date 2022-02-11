import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Sekai/',
  plugins: [react()],
  build:{
    target:['edge90','chrome90','firefox90','safari15']
  }
})
