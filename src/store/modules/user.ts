/*
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-16 11:21:07
 * @LastEditTime: 2023-02-08 11:11:41
 * @Description: 用户相关操作数据
 */
import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from "@/utils/author";
// 用户操作
interface IUserInfo {
  userName: string;
  password: string | number;
}
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
    };
  },
  actions: {
    async login(userInfo: IUserInfo) {
      // console.log(userInfo.password);
      return new Promise((resolve, reject) => {
        if (userInfo.userName !== "admin") {
          // throw {
          //   code: 10000,
          //   msg: "用户不存在",
          // };
          const data = {
            code: 10000,
            msg: "用户不存在",
          };
          reject(data);
        }
        if (userInfo.password != "123456") {
          // throw {
          //   code: 10000,
          //   msg: "密码错误",
          // };
          const data = {
            code: 10000,
            msg: "密码错误",
          };
          reject(data);
        }
        if (userInfo.userName == "admin" && userInfo.password == "123456") {
          const data = {
            code: 200,
            msg: "登录成功",
          };
          setToken("v3-token");
          resolve(data);
        }
      });
    },
  },
});
