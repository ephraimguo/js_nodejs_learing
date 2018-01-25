
const date = new Date();
let mth = date.getMonth()+1;
let date1 = date.getDate(); //日期
let day = date.getDay(); //星期
let yr = date.getFullYear();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(yr, mth, date1, day, hr, min, sec);