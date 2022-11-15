import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
  base: "./", //打包环境
  resolve: {
    // 配置别名
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    // 自动导入element-plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
