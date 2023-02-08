/*
 * @Author: lu
 * @Date: 2022-11-24 15:25:44
 * @LastEditTime: 2023-02-08 10:38:22
 * @Description: axios封装
 */
import axios from "axios";
import baseURL from "./config";
// 引入axios类型
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
// 默认配置
const instance: AxiosInstance = axios.create({
  baseURL: baseURL, //后端地址
  timeout: 60 * 1000, //超时时间
});
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  },
  (error: AxiosError) => {
    // console.log(error);
    return Promise.reject(new Error());
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log(response);
    const { code } = response.data;
    const { msg } = response.data;

    if (code === 200) {
      return response.data;
    } else if (code === 10000) {
      ElMessage({
        message: msg,
        type: "error",
      });
      return Promise.reject(new Error(msg));
    } else {
      return "无效数据";
    }
  },
  (error: AxiosError) => {
    // console.log(error);
    console.log("err" + error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substring(message.length - 3) + "异常";
    }
    ElMessage({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);
export default instance;
