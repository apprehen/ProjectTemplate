import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: (chunkInfo) => {
          // const name = chunkInfo.name
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : ''
          const name = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `assets/js/${name}-[hash].js`
        }
      }
    }
  }
})
