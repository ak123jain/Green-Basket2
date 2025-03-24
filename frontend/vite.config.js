// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Replace with your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs to `dist`
  }
})

