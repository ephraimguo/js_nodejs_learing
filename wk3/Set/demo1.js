var log = console.log;

var arr = [11,22,33,44,44,55,5,5555,6,7,8,8,8,8];
log(arr, arr.length);

var set1 = new Set(arr);
log(set1, set1.size);
set1.add('ost');
log(set1, set1.size);

// set1.forEach(v=>log(v));

// set1.clear();
// log(set1);

arr = Array.from(set1);
log(arr,arr.length);
