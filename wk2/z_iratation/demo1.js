var obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol()]: "342"
};

obj.__proto__ = {
    x: true,
    y: true,
    z: false
};

obj.__proto__.__proto__ = {
    t1: "t1",
    t2: "t2",
    t3: "t3",
};

Object.defineProperty(obj, "zzz",{
    value: "908000",
    enumerable: true
});

// for(var k in obj){ // k can be any varible name
//     console.log(k+"="+obj[k]);
// }

// console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));
