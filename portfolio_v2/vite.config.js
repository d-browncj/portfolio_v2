import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    },
    // Copy additional assets
    copyPublicDir: true,
  },
  publicDir: 'public',
  // Ensure all assets are included
  assetsInclude: ['**/*.json', '**/*.txt', '**/*.md'],
})