const obj = new Object();
const obj2 = {

};

function A(){

}

obj.abc = 123;
obj2.__proto__.abc = 123;

console.log('obj.abc = '+obj.abc);
console.log('obj2.abc = '+obj2.abc);
console.log('A prototype '+ A.prototype);