import { createApp } from "vue";
// 引入pinia
import { createPinia } from "pinia";
import router from "./router/index";
// 全局样式
import "./assets/style/common.scss";
// 初始化样式
import "./assets/style/normalize.css";
import App from "./App.vue";

// 国际化，中文
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 导入elementPlus样式，提示信息没有样式
// import 'element-plus/dist/index.css'
// 大屏适配插件
import BinDatav from "bin-datav";
// 导入大屏插件所有样式
import "bin-datav/lib/styles/index.css";
// 导入全局图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
// 使用pinia代替vuex
const pinia = createPinia();

// 挂载图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 导入
app
  .use(pinia)
  .use(router)
  .use(BinDatav)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
