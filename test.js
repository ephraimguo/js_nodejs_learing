var log = console.log;
// function asyncf(a,cb){
//
//     a += 1;
//     // cb(a);
//
//     setTimeout(function () {
//
//         cb(a)
//
//     },2000);
//
// }
//
// asyncf(6,function (r) {
//     console.log('this is '+ r+'最外层已经结束');
//     if(r===7){
//
//         asyncf(7,function (r) {
//             console.log('this is '+ r+'中间层已经结束');
//
//             if(r === 8){
//
//                 asyncf(8,function (r) {
//                     console.log('this is '+ r);
//                     console.log("finish!")
//
//                 })
//
//             }
//
//         })
//
//     }
//
// });

//------------------------------------

/*
function main(a, cb){
    a+=2;
    setInterval(function(){
        cb(a);
    }, 2000);
}

main(2, function(r){
    console.log(r);
    main(r, function(r){
        console.log(r);
    });
});
 */



