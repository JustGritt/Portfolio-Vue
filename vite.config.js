import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/colors.scss";
          @import "@/scss/fonts.scss";
          @import "@/scss/globals.scss";
        `
      }
    }
  }
})
