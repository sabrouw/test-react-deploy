import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Spécifie le répertoire de sortie du build
    sourcemap: true, // Génère des sourcemaps pour le débogage
    minify: 'esbuild', // Minification des fichiers avec esbuild
  },
  server: {
    port: 3000, // Port du serveur de développement
    open: true, // Ouvre le navigateur automatiquement
  },
})
