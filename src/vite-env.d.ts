/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 声明大屏插件
declare module "bin-datav";
// 加载进度条
declare module "nprogress";
