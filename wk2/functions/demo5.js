var a=12;

function f(a){
    let x = --a;
    return function () {
        return x;
    }
}

console.log(f(a)());
console.log(f(a)());
console.log(f(a)());
console.log(f(a)());
console.log(f(a)());
console.log(f(a)());
console.log(f(a)());