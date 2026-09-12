import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const apiUrl = new URL(env.VITE_API_URL)

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/generate': {
          target: apiUrl.origin,
          changeOrigin: true,
          rewrite: () => `${apiUrl.pathname}${apiUrl.search}`,
        },
      },
    },
  }
})
