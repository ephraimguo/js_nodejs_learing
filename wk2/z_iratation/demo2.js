var obj = {
    a:1,
    b:2
};

console.log(obj);
delete obj.a;
console.log(obj);
obj.c = 'c';
Object.preventExtensions(obj);
// obj.c = 'c';
console.log(obj);