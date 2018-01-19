var a = 'A';
var res = '';

for(var i=0; i < 10; i++){
    if(i%2 == 0){
        res += a;
    }else{
        res += ' ';
    }
}
console.log(res);
