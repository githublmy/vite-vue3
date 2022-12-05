import request from "@/utils/requset";

/**
 * @description:
 * @param {object} params
 * @return {*}
 */
// const controller = new AbortController();
export function getUserList(params: object) {
  // 取消请求
  // controller.abort();
  return request({
    url: "/artist/list",
    // signal: controller.signal,
    method: "GET",
    params,
  });
}
