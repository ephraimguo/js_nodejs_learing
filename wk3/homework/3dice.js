var log = console.log;

function dice(num = 1){
    let res = 6 * num;
    log(Math.ceil(Math.random()*res));
}

for(let i = 0; i<10; i++){
    dice();
}
log('---------------------');
for(let i = 0; i<10; i++){
    dice(2);
}