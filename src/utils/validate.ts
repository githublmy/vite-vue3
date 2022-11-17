/*
 * @LastEditTime: 2022-11-17 14:52:21
 * @Description: 常用正则验证
 */
/**
 * @description: 手机号验证
 * @param {string} phoneNumber
 * @return {Boolean}
 */
export const validatePhone = (phoneNumber: string) => {
  const reg =
    /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  return reg.test(phoneNumber);
};

/**
 * @description: 邮箱验证
 * @param {string} email
 * @return {Boolean}
 */
export const validateEmail = (email: string) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

/**
 * @description: 身份证号验证
 * @param {string} idCard
 * @return {Boolean}
 */
export const validateIDCard = (idCard: string) => {
  const reg =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  return reg.test(idCard);
};

/**
 * @description: 邮编验证
 * @param {string} postalCode
 * @return {Boolean}
 */
export const validatePostalCode = (postalCode: string) => {
  const reg = /^[1-9]\d{5}(?!\d)$/;
  return reg.test(postalCode);
};

/**
 * @description: url验证
 * @param {string} url
 * @return {Boolean}
 */
export const validateURL = (url: string) => {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
};

/**
 * @description: 验证设备是移动端还是PC端
 * @return {Boolean}
 */
export const validate = () => {
  const reg = /Mobi|Android|iPhone/i;
  return reg.test(navigator.userAgent);
};
