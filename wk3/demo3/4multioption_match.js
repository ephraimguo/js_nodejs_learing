var re = /[abc]{3}\w/g;

console.log(re.test("aabs"));


var re = /x[abcy]*/;
var res = re.exec("xabcyyyyy");

console.log(res);