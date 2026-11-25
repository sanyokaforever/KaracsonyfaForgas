import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import './src/style.css'

// https://vite.dev/config/
export default defineConfig({
  base: '/KaracsonyfaForgas/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})