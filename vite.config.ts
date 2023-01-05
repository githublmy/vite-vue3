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
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等,无需页面单独导入
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
    }),
    ElementPlus(),
  ],
  build: {
    //打包文件大小超出警告-1500kb, 默认500kb
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        }, // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: "js/[name].[hash].js",
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: "[ext]/[name].[hash].[ext]",
        // 用于命名代码拆分时创建的共享块的输出命名
        // chunkFileNames: "js/[name].[hash].js",
        // 拆分js到模块文件夹
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/")
            : [];
          const fileName =
            facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
});
