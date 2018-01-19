var a = 'A';
var res = '';

for(var i=0; i < 10; i++){
    if(i%2 == 0){
        res += a;
    }else{
        for(var j=0; j<i; j++){
            res += ' ';
        }
    }
}
console.log(res);
