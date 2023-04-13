import {resolve} from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
      "assets/": `${resolve(__dirname, "src/assets")}/`,
      "store/": `${resolve(__dirname, "src/store")}/`,
      "components/": `${resolve(__dirname, "src/components")}/`
    }
  }
})
