var re = /\w+/;
var re2 = new RegExp("abc", 'g'); //???

let bool = re2.test("abc");
console.log(bool);

console.log("----------");

// let res = re2.exec('aaa-bbb-ccc-abc-cc-abc');
let res = re2.exec('aaa-bbb-ccc-abc-cc-abc');

do{
    console.log(res, re2.lastIndex)
    res = re2.exec('aaa-bbb-ccc-abc-cc-abc');
}
while(res);


