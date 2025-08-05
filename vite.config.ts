import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/dexie-test/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
