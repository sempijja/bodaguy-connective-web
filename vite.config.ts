import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/", // Set the base path to the root
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure assets are correctly resolved
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  // Add the CNAME file to the output directory
  publicDir: "public", // Ensure public assets like CNAME are copied to dist
});
