/*
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-18 13:47:57
 * @LastEditTime: 2022-11-18 14:10:31
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
    toggleSidebar() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
export default useSidebarStore;
