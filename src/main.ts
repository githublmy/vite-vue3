import { createApp } from "vue";
// 引入pinia
import { createPinia } from "pinia";
import router from "./router/index";
// 全局样式
import "./assets/style/common.css";
// 初始化样式
import "./assets/style/normalize.css";
import App from "./App.vue";

const app = createApp(App);
// 使用pinia代替vuex
const pinia = createPinia();
// 导入全局图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 国际化，中文
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 导入elementPlus样式，提示信息没有样式
import 'element-plus/dist/index.css'
// 大屏适配插件
import BinDatav from "bin-datav";
// 导入插件所有样式
import "bin-datav/lib/styles/index.css";
// element-plus提示框绑定到原型上
import modal from "./plugins/modal";
app.config.globalProperties.$modal = modal

app
  .use(pinia)
  .use(router)
  .use(BinDatav)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
