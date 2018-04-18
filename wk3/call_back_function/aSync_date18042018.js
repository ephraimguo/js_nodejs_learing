

function asyncF(a, cb){
  a+=2;
  setTimeout(function(){
    cb(a)
  }, 2000);
}

asyncF(2, function(result){
  console.log('--1--',new Date());
  if(result === 4){
    console.log('--2--',new Date());
    asyncF(result, function(result){
      if(result === 6){
        console.log('--3--', new Date())
      }
    });
  }
});