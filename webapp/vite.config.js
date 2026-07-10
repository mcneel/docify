import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

// Served under CloudFront at developer.rhino3d.com/api/rhinocommon/.
// Keep this in sync with the router base and the deploy static server.
export default defineConfig({
  base: '/api/rhinocommon/',
  plugins: [vue(), Icons({ compiler: 'vue3' }), tailwindcss()],
  resolve: {
    alias: {
      '@': r('./src'),
      src: r('./src'),
      components: r('./src/components'),
      layouts: r('./src/layouts'),
      pages: r('./src/pages'),
      stores: r('./src/stores'),
      composables: r('./src/composables'),
      utils: r('./src/utils'),
      assets: r('./src/assets'),
      '~assets': r('./src/assets'),
    },
  },
  build: {
    // The docs data is fetched at runtime; keep chunks reasonable.
    chunkSizeWarningLimit: 1500,
  },
})
