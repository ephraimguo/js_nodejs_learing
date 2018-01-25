var log = console.log;
var map = new Map();
map.set(false, 123);
map.set(true, 321);
map.set(false, 'false');
log(map.size, map.get(false), map.get(true));
log('----------------');

map.forEach((value, key)=>log(key, value));