var str = "abcdefghijk";

let res = str.search("gh");

console.log(res);

var str2 = "aaa-bbb-ccc";
let res2 = str2.split('-',5);
console.log(res2);

var res3 = str2.replace('aaa',"AAA");
console.log(res3);

console.log("__________");

var res4 = str2.replace('-', function(){
    console.log(arguments);
    return "+";
});
console.log(res4);
console.log(res4.replace("-", "||"));

// function replacer(match, p1, p2, p3, offset, string) {
//     // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//     return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);