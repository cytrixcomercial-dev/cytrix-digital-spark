import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({ preset: 'node-server' }),
    viteReact(),
    tailwindcss({
      optimize: false,
    }),
  ],
  css: {
    lightningcss: false,
  },
  build: {
    cssMinify: false,
  },
})
