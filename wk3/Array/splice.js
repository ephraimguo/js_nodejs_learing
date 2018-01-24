var log = console.log;

// 添加字符
var arr = ['a','b'];
log("arr = " + arr);
arr.splice(1,0, 'c', 'd');
log("arr = " + arr);
log('----------------');

//删除数据
log(arr);
arr.splice(1,1);
log("arr = " + arr);
log('----------------');

//替换字符
arr.splice(1,2,'x','y');
log('arr = ' + arr);

