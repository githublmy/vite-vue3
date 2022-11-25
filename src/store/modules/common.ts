/*
 * @Author: lu
 * @LastEditors: 
 * @Date: 2022-11-25 15:27:22
 * @LastEditTime: 2022-11-25 17:37:06
 * @Description: 滚动条处理
 */
import { defineStore } from "pinia";
const useCommonStore = defineStore("common", {
  state: () => {
    return {
      scrollTop: 0, //滚动条高度
      elScrollbar: null, //滚动条dom
    };
  },
  actions: {
    // 设置滚动条
    setScrollTop(scrollTop: number) {
      this.scrollTop = scrollTop;
    },
    // 滚动条--
    setScrollTopReduce() {
      this.scrollTop = this.scrollTop - 100;
    },
  },
});
export default useCommonStore;
