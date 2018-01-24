var re = /([abc]{3}\sxy){2,5}/g; //用括号将一段正则封装成一个组

var str = "bcc xyacb xycac xy";

console.log(re.test(str));

let res = re.exec(str);
console.log(res);

console.log('---------');

var re2 = /A(B(C))/;
var res2 = re2.exec("ABC");
console.log(res2);