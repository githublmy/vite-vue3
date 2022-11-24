import request from "@/utils/requset";

/**
 * @description: 
 * @param {object} params
 * @return {*}
 */
export function getUserList(params: object) {
  return request({
    url: "/artist/list",
    method: "GET",
    params,
  });
}
