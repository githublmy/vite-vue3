import { defineStore } from "pinia";
// 用户操作
interface IUserInfo {
  userName: string;
  password: string | number;
}
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
    };
  },
  actions: {
    async login(userInfo: IUserInfo) {
      // console.log(userInfo);
      if (userInfo.userName !== "123456") {
        throw {
          code: 10000,
          msg: "账号错误",
        };
      } else if (userInfo.password != "123456") {
        throw {
          code: 10000,
          msg: "密码错误",
        };
      } else {
        return {
          code: 200,
          msg: "登录成功",
        };
      }
    },
  },
});
