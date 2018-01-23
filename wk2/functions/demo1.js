function test(a, b){
    // console.log(arguments);
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}


test(11,22,33);
