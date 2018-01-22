function test(){
    var x = 12;
    return function(){
        // console.log(x);
        return x;
    }
}

let f = test();
let a = f();
console.log(a);