import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path, { resolve } from "path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
  resolve:{
      alias:{
        "@": path.resolve(__dirname,"./src")
      }
    }
})
