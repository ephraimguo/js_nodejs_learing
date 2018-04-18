function B(callback){
  setTimeout(function(){
    callback(12345)
  }, 2000);
}

const A = function (v){
  console.log('this is functionA which is called by function B '+ v);
};

A();
B(A);