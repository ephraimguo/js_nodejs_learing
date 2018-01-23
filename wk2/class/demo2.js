var obj = {
    name: "leo"
}


let desc = Object.getOwnPropertyDescriptor(obj, "name");
console.log(desc);
console.log('-------------');
class User{
    constructor(){}
    get n(){ return "nnn"}
    change(){}
}

var usr = new User();
const desc2 = Object.getOwnPropertyDescriptors(usr.__proto__);
console.log(desc2);

Object.defineProperty(obj, "b",{
    configurable: false,
    value: 123
});
const desc3 = Object.getOwnPropertyDescriptors(obj, "b");

console.log(obj['b']);
