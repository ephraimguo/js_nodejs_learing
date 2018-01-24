var log = console.log;

//join
var arr1 = [11,22,33];
let res = arr1.join();
log(res);
log("------------------");

//push 从最后加入
var arr2 = [];
log(arr2.length);

arr2.push('whoami');
log('after push action arr2 = ' + arr2.length);
log('-------------------');


//unshift 在最前面加入
arr2.unshift("11",'22','33');
log(arr2);
log('-------------------');


//shift 从前面删除
log('now arr2 = ' + arr2);
arr2.shift();
log("after shift action arr2 = "+arr2);
log('-------------------');

// pop 从后面删除
log('arr2 = ' + arr2);
arr2.pop();
log('after pop action arr2 = ' + arr2);

// 查找方法 find findIndex
var arr3 = [11,22,33,44,55];
var res_arr3 = arr3.find(function(item){
    console.log(item);
});
log(res_arr3); // undefined



