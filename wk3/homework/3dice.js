var log = console.log;

function dice(num = 1){ //default num is one, since originally there is only one dice
    let res = 6 * num;  //define res as the times for random numbers.
    log(Math.ceil(Math.random()*res));
}

for(let i = 0; i<10; i++){ // 10 times playec while using single dice
    dice();
}

log('---------------------'); // seperator

for(let i = 0; i<10; i++){ // 10 time played while using both dices.
    dice(2);
}