var re = /([abc]{2,5}(?=z))/;

console.log(re.test("abcz"));
console.log("---------");
let res = re.exec("abcz");
console.log(res);