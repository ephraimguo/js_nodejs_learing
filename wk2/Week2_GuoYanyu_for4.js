var str = 'A'; // declare string A which is the element of the final shape
var res = ''; // declare result string for collecting the final strings
var lines = 10; // declare the total lines of A's
var log = console.log; // shorcut for console.log

for(var i=lines; i>=1; i--){
    for(var j=1; j<=i; j++){
        if((i%2)){
            continue;
        }
        else {
            res += str;
            if (i === j) {
                res += '\n';
            }
        }
    }
}
log(res);