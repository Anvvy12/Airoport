export const toLocaleFormat = (format, time) => {
  let date = new Date(time);
  let f = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };

  for (let k in f) format = format.replace('%' + k, f[k] < 10 ? '0' + f[k] : f[k]);
  return format;
};
