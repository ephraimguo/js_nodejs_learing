function PrintChar(str, lines){
    var log = console.log;
    this.str = str;
    this.lines = lines;
    this.for1 = function(){
        var res = '';
        for(var i=1; i<=this.lines; i++){
            for(var j=1; j<=i; j++){
                res += this.str;
                if(i===j){
                    res += '\n';
                }
            }

        }
        log(res);
    };

    this.for2 = function () {
        var res = '';
        for(var i=this.lines; i>=1; i--){
            for(var j=1; j<=i; j++){
                res += this.str;
                if(i===j){
                    res += '\n';
                }
            }
        }
        log(res);
    }

    this.for4 = function (){
        var res = '';
        for(var i=this.lines; i>=1; i--){
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
    }

    this.for5 = function(){
        var str_spc = ' '; // declare string space which is the empty element for the shape
        var res = '';
        var res_addon = '';

        for(var i=1; i<=this.lines; i++){
            for(var j=this.lines; j>=i; j--){
                res += str_spc;
                if(i===j){
                    res_addon = this.str;
                    for(var k=2; k<2*i-1; k++){
                        res_addon += str_spc;
                    }
                    if(k>2) {
                        res_addon += this.str;
                    }
                    res += res_addon + '\n';
                }
            }
        }
        for(var l=0; l < 2*this.lines+1; l++){
            res += this.str;
        }
        log(res);
    }
}

var p = new PrintChar('A', 20);
// p.for1();
// p.for2();
// p.for4();
p.for5();