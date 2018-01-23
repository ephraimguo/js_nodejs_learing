var str = 'A'; // declare string A which is the element of the final shape
var str_spc = '-'; // declare string space which is the empty element for the shape
// var str_test = '*'

var res = ''; // declare result string for collecting the final strings
var res_addon = '';
var lines = 10; // declare the total lines of A's
var log = console.log; // shorcut for console.log

for(leti=1; i<=lines; i++){
    for(letj=lines; j>=i; j--){
        res += str_spc;
        if(i===j){
            res_addon = str;
            for(let k=2; k<2*i-1; k++){
                res_addon += str_spc;
            }
            if(k>2) {
                res_addon += str;
            }
            res += res_addon + '\n';
        }
    }
}
for(let l=0; l < 2*lines+1; l++){
    res += str;
}
log(res);

