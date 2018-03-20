
//function(module, exports, require){

    var obj = {
        name: "Yanyu"
    };

//}
//在内部确实有类似的代码 obj其实是function的私有变量
//如果需要调用obj，则需要声明如下
//出口定义 exports
    exports.obj = obj;
    exports.num = 12;