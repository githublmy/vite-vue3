/*
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-18 13:47:57
 * @LastEditTime: 2022-11-25 17:38:49
 * @Description: 菜单相关数据
 */
import { defineStore } from "pinia";

const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  actions: {
    // 菜单切换
    toggleSidebar() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
export default useSidebarStore;
