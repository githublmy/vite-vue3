/*
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-24 15:25:44
 * @LastEditTime: 2022-11-24 16:48:04
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
    // console.log(config);
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(new Error());
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log(response);
    const { code } = response.data;
    if (code === 200) {
      return response.data;
    } else {
      return "无效数据";
    }
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
