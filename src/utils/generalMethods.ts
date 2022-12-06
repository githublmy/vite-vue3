/*
 * @Author: lu
 * @Date: 2022-11-25 11:28:23
 * @LastEditTime: 2022-12-06 08:45:32
 * @Description: 常用函数
 */
/**
 * @description: 获取日期方法
 * @param {string | number} type 格式，不传默认年月日时分秒，传任意值年月日
 * @param {boolean} isShowWeek 是否显示星期，默认false
 * @param {string} separator 年月日分隔符，默认( - )
 * @return {*}
 */
export function getTodayDate(
  type: string | number,
  isShowWeek: boolean = false,
  separator: string = "-"
) {
  const d = new Date(); //创建日期对象
  const year = d.getFullYear(); //年
  const month =
    d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  const day = d.getDate() < 10 ? "0" + (d.getDate() + 1) : d.getDate() + 1;
  let week: number | string = d.getDay(); //星期
  switch (week) {
    case 1:
      week = "周一";
      break;
    case 2:
      week = "周二";
      break;
    case 3:
      week = "周三";
      break;
    case 4:
      week = "周四";
      break;
    case 5:
      week = "周五";
      break;
    case 6:
      week = "周六";
      break;
    case 0:
      week = "周日";
      break;
    default:
      break;
  }
  const h = d.getHours() < 10 ? "0" + (d.getHours() + 1) : d.getHours() + 1;
  const m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  const s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
  let time: string;
  // 未传入type
  if (!type) {
    // 星期显示isShowWeek
    if (isShowWeek) {
      time = `${year}${separator}${month}${separator}${day} ${week} ${h}:${m}:${s}`;
    } else {
      time = `${year}${separator}${month}${separator}${day} ${h}:${m}:${s}`;
    }
  } else {
    if (isShowWeek) {
      time = `${year}${separator}${month}${separator}${day} ${week}`;
    } else {
      time = `${year}${separator}${month}${separator}${day}`;
    }
  }
  return time;
}
/**
 * @description: 文件流下载
 * @param {any} res  数据结果
 * @param {string} mimeType 数据类型  默认Excel类型
 * @return {*}
 */
export function resolveBlob(res: any, mimeType: string) {
  // console.log(res, 9999);
  const aLink = document.createElement("a");
  var blob = new Blob([res?.data], { type: "application/vnd.ms-excel" });
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
  var contentDisposition = decodeURI(res?.headers["content-disposition"]);
  var result: RegExpExecArray | null = patt.exec(contentDisposition);
  var fileName: any = result && result[1];
  fileName = fileName?.replace(/\"/g, "");
  // console.log(fileName);
  aLink.style.display = "none";
  aLink.href = URL.createObjectURL(blob);
  aLink.setAttribute("download", fileName); // 设置下载文件名称
  document.body.appendChild(aLink);
  aLink.click();
  URL.revokeObjectURL(aLink.href); //清除引用
  document.body.removeChild(aLink);
}
