var arr = [11,22,33];

var res = arr.every(function(item, index, arr){
    if(item<22){
        return true;
    }
});

console.log('every res = '+res);

res = arr.some(function (item, index, arr) {
    if(item < 22){
        return true;
    }
});

console.log('some res = ' + res);

// console.log(arr);
console.log('--------------------');

//filter
var arr2 = arr.filter(function (item, index, arr) { //无论怎么过滤 都不会改变原数组
    if(item >= 22){
        return true;
    }
});
console.log('arr2 = ' + arr2);
console.log('arr = '+ arr);
console.log('--------------------');

// map
var arr3 = arr.map(function (item, index, arr) {
    if(item >= 22){
        return item;
    }
});
console.log(arr3);
console.log(arr);
console.log('--------------------');


// for each, 不可以使用continue 和 break跳出，无效果的, 是从头循环到尾不间断的, 无返回值，单纯的枚举
arr.forEach(function (item, index, arr) {
    console.log('this is '+index+'th item, is '+item);
});
console.log('--------------------');


//reduce 从左往右
var arr4 = arr.reduce(function (prev, next, nexIndex, arr) {
    return prev + '+' + next;
},'===');
console.log(arr4);


// reduceRight 从右往左