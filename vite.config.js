import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  /**
   * Base path para GitHub Pages.
   * El sitio se publica en https://felixdoura.github.io/dynova-web/
   * por lo que todos los assets compilados deben prefijarse con /dynova-web/.
   * En `npm run dev` Vite ignora esto y sirve desde / como siempre.
   */
  base: '/dynova-web/',
})
 