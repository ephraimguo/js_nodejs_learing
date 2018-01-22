function A(name = "default") {
    this.name = name;
}

A.prototype.aaa = function(){
    console.log('aaa');
};
A.staticF = 12345;

var a = new A('leo');
console.log(a.name);
console.log('---------------------');

function B(name){
    A.call(this, name);
}

B.prototype.__proto__ = A.prototype;
B._proto_ = A;

var b = new B('somename');
b.aaa();
console.log(B.staticF);

