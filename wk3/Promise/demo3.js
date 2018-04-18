var p = new Promise(resolve => {
   setTimeout(function(){
       resolve(111);
   }, 3000);
});

p.then(r=>{
    return new Promise(resolve => {
        resolve(123);
    })
})
.then(r=>{
    console.log(r+456);
});

setTimeout(console.log('----------------------'));

function asyncFn(a){
    return new Promise((res, rej)=>{
       setTimeout(function () {
           res(++a);
       },1000);
    });
}

let p1 = asyncFn(11);
let p2 = asyncFn(22);
let p3 = asyncFn(33);

p1.then(r => console.log(r));
p2.then(r => console.log(r));
p3.then(r => console.log(r));