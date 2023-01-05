/*
 * @Author: lu
 * @Date: 2022-11-24 15:26:15
 * @LastEditTime: 2023-01-05 11:54:45
 * @Description: 接口地址配置
 */
let baseURL = "";
if (import.meta.env.MODE === "development") {
  baseURL = "http://localhost:3000";
} else if (import.meta.env.MODE === "production") {
  baseURL = "66666";
}
export default baseURL;
