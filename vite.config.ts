import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Remove tailwindcss() from here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
