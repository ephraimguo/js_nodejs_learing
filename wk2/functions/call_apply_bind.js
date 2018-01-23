
function fn(a, b) {
    console.log(this, a, b);
}

var o1 = {name: 'guoyanyu'};

// fn(11, 33);
fn.call(o1, 11, 22);
fn.apply(o1, [11, 22]);

console.log("_____________________");

function fn1(){
    console.log(this);
}

const obj = {name: "bind obj"};
const f1 = fn1.bind(obj);

f1();
fn1.call(obj);
