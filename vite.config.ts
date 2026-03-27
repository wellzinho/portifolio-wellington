import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 127.0.0.1 evita problemas comuns no Chrome (localhost → IPv6 / ::1) e mantém acesso só na máquina.
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
    // Não forçar navegador padrão; use `npm run dev:chrome` no macOS para abrir o Google Chrome.
    open: false,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
