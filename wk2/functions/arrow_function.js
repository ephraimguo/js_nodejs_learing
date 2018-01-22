
let a = () => {
    console.log('我是尖头函数');
}



var obj = {
    name: 'yanyu',
    fun(){
        return ()=>this;
}
}
let f = obj.fun();
console.log(f());