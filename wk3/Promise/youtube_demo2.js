'use strict'

let myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('good to go!')
  }, 2000);
});

let myPromise2 = new Promise((resolve, reject)=>{
  setTimeout(() =>{
    reject('promise2 -- the promising');
  }, 1500);
});

Promise.all(myPromise, myPromise2)
  .then((data)=>{
    console.log(data);
  })
  .catch(error=>console.log(error));