var re1 = /x[abcy]*y/;
var re2 = /x[abcy]*?y/;

var res1 = re1.exec("xabcyyyyabcy");
var res2 = re2.exec("xabcyyyyabcy");

console.log(res1);
console.log(res2);