import { defineStore } from "pinia";
// 用户操作
export const useUserStore = defineStore("user", {
  state: () => {
    return {};
  },
  actions: {
    async login(userInfo: object) {
      console.log(userInfo);
    },
  },
});
