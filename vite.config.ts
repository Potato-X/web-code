import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), monacoEditorEsmPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
