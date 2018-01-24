var str = "ephraimguof@gmail.com.cn";
// var email = /[\w][\w_\-]{2,20}@\w{1,10}\.com(\.\w{2,5})?/g;
// var email = /\w[\w_\-]{2,20}@\w{1,10}\.com(\.\w{2,5})?/g;
var email = /\w[\w_\-]{2,20}@\w{1,10}\.com(\.\w{2,5})?/g;

var res2 = email.exec(str);
console.log(res2);

var res = email.test(str);
console.log(res);