import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      // Ensure all routes fallback to index.html
      fs: {
        strict: false,
      },
    },
    base: '/bodaguy-website/', // Replace with your repository name
    plugins: [
      react(),
      ...(mode === 'development' ? [componentTagger()] : []), // Avoid `false` in plugins
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
