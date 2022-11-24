import { createApp } from "vue";
// // 使用pinia代替vuex
import { createPinia } from "pinia";
import router from "./router/index";
// 全局样式
import "./assets/style/index.scss";
import App from "./App.vue";
// 国际化，中文
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 大屏适配插件
import BinDatav from "bin-datav";
// 导入大屏插件所有样式
import "bin-datav/lib/styles/index.css";
// 导入全局图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 全局组件
import RightToolbar from "@/components/RightToolbar/index.vue";
import PublicTable from "@/components/PublicTable/index.vue";
// 分页
import Pagination from "@/components/Pagination/index.vue";

const app = createApp(App);
const pinia = createPinia();

// 挂载图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 注册全局组件
// 注册表格工具组件
app.component("RightToolbar", RightToolbar);
// 表格
app.component("PublicTable", PublicTable);
// 分页
app.component("Pagination", Pagination);
// 导入
app
  .use(pinia)
  .use(router)
  .use(BinDatav)
  .use(ElementPlus, {
    locale: zhCn, //中文包
    // size: "small", //默认表单大小，官方默认default ，可选small，large
    zIndex: 3000, //默认弹窗的层级，官方默认2000
  })
  .mount("#app");
