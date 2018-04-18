
function asyncF(a){

  return new Promise(function(resolve, reject){
    //resolve is called, a valid result is created
    //reject is called, an error happend
    a+=2;
    setTimeout(function(){
      resolve(a);
    }, 2000);
  });
}

var prom = asyncF(6);
prom.then(res=>{
  if(res===8) {
    console.log(res);
    return asyncF(res)}
}).then(r=>{
  console.log(r);
});
//   .then(r=>{
//     console.log(r);
//   });

// asyncF(2, function(result){
//   console.log('--1--',new Date());
//   if(result === 4){
//     console.log('--2--',new Date());
//     asyncF(result, function(result){
//       if(result === 6){
//         console.log('--3--', new Date())
//       }
//     });
//   }
// });