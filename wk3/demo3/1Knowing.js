var str = "ephraimguo@gmail.com";

var re = /\w+\w+\.\w+/g;

let res = re.test(str);
let res1 = re.exec(str);
console.log(res);

do{
    console.log(res1);
    res1 = re.exec(str);
}
while(res1);

