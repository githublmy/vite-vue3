import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 自动导入element-plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 导入ElementPlus的样式
import ElementPlus from "unplugin-element-plus/vite";
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
    ElementPlus(),
  ],
});
