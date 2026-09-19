import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import react from '@vitejs/react-vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  base: '/my-portfolio/',
})
