import { createApp } from "vue";
// 引入pinia
import { createPinia } from "pinia";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
// 导入全局图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 国际化，中文
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import BinDatav from "bin-datav";
import "bin-datav/lib/styles/index.css";
app
  .use(pinia)
  .use(router)
  .use(BinDatav)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
