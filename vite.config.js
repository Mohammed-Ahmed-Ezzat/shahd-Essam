import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shahd.ic/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'lenis'],
          icons: ['lucide-react', 'canvas-confetti'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
