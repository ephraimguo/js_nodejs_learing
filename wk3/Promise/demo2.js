var p = new Promise((res, rej)=>{
    setTimeout(function(){
       res(123);
    },2000);
});

p.then(r=>console.log(r)).catch(err=>console.log(err));
