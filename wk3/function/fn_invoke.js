
function fn() {
    console.log(this);
}

var obj = {
    test:fn
};

// fn();
obj.test();

console.log(fn instanceof Function);

var fn2 = new Function("a", "b =12", "console.log(a+b)");

console.log("------------");
fn2(12, 23);