
var arr = [11,22,33,44,55];
var res = 0;
arr.forEach(function (item, index, arr) {
    res += item;
});
console.log(res);