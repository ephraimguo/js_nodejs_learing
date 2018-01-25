function asyncf(a){

    return new Promise(function (resolved, rejected) {
        a += 1;
        setTimeout(function () {
            resolved(a);
        }, 2000);
    });
}

var p = asyncf(6);
p.then(r=>{
    if(r===7){
        return asyncf(7);
    }
}).then(r=>{
        if(r===8){
            return asyncf(8);
        }
}).then(r=>{
        console.log(r);
        console.log('finished');
});