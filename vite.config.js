import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // base: "/keystonepromotersdemo/dist/",
  plugins: [tailwindcss(), react()],
  css: {
    devSourcemap: true,
  },
});
