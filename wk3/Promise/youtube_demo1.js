'use strict'

let myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('good to go!')
  }, 2000);

  setTimeout(()=>{
    reject('oops')
  }, 1000);
});

myPromise
.then((res)=>{
  console.log(res);
})
.catch(error=>{console.log(error)});