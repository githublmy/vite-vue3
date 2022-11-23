/*
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-09 15:36:54
 * @LastEditTime: 2022-11-23 11:03:04
 * @Description: pinia引入
 */
// 引入pinia 第一种
import { createPinia } from "pinia";
// 使用pinia代替vuex
const pinia = createPinia();
export default pinia;

// 第二种
// import useSidebarStore from "./modules/sidebar";
// const store = () => ({
//   sidebar: useSidebarStore(),
// });
// export default store;
