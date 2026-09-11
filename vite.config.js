import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        fundingFinder: resolve(__dirname, 'funding-finder.html'),
        projects: resolve(__dirname, 'projects.html'),
        training: resolve(__dirname, 'training.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
