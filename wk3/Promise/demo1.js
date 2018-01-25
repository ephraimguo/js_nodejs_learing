function asyncf(a=3){

    return new Promise(function (resolved, rejected) {
        //resolved 被调用，表示产生了一个合法结果
        //reject 被调用，表示有错误

        a += 1;
        setTimeout(function () {
            resolved();
        }, 2000);
    });
}

var p = asyncf();
p
.then(r=>{
if(r===4){
    console.log('第一层'+r);
    return asyncf(r);
}
})
.then(r=>{
    if(r===5){
        console.log('第2层'+r);
        return asyncf(r);
    }
})
.then(r= function(r){
    // console.log(r);
    console.log('第3层'+r);
    console.log('finished');
});