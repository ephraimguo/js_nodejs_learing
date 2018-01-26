function aFn (a){
    return new Promise((res, rej)=>{
       setTimeout(function(){
           if(a >=33){
               rej(new Error('Must be a number'));
           }else{
               res(++a);``
           }}, 1000);
    });
}

// let p1 = aFn(11);
// let p2 = aFn(22);
// let p3 = aFn(33);
//
// Promise.all([p1, p2, p3])
// .then(res => console.log(res));

async function run(){

    try{
        var r1 = await aFn(11);
        var r2 = await aFn(22);
        var r3 = await aFn(33);
        var r4 = await aFn(44);
    }
    catch(err){
        console.log('must be number');
    }
   console.log(r1,r2,r3,r4);
}
run();