//1st 字面量方式
var obj = {
  name:"Any",
    fn: function () {

    },
    fn2(){

    },
    get x(){      //如果有get就是一个只读属性 如果没get就是一个函数
        return 11;
    },
    set x(v){
        console.log(v)
    }
};

obj.x = 22;

console.log(obj.x);