import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "./",

  plugins: [react()],

  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        fundingFinder: resolve(__dirname, "funding-finder.html"),
        projects: resolve(__dirname, "projects.html"),
        training: resolve(__dirname, "training.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
