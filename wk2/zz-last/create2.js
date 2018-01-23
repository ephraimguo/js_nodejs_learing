class User {  //类似于Java的写法
    constructor(){
        var private_x = 14; //可以定义私有属性
        this.a=12;
        this.fn = function () { //特权方法, 可以访问到私有属性
            return private_x;
        }
    }

    get x(){ //这个方法是创建在原型链上的，不是自身的属性，只要是constructor意外的定义，都是在原型链
        return 12;
    }

    static xyz(){
        console.log("static");
    }

}

var usr = new User();
console.log(usr.x);

for(k in usr){ //可以遍历出原型链
    console.log(usr[k]);
}

console.log('-------------------');
console.log(User.__proto__());
console.log(Object.getOwnPropertyNames(usr)); //无法遍历出原型链
console.log('-------------------');
console.log(usr.private_x);
console.log('--------static-----------');
console.log(usr.xyz());