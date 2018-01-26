
// create new sleep function by using Promise
function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(isNaN(time)){
                reject('time must be a number');
            }else {
                resolve('I slept for ' + time + 'second long');
            }
        }, time);
    });
}

// Asynchronized function created by using Promise syntax sugar
async function test() {

    // try..catch to throw out the error if the arguments are not numbers
    try {
        var sleep1 = await sleep(2000);   // sleep1 -- 2s sleeping as per time = 2000
        var sleep2 = await sleep(1000);   // sleep2 -- 1s sleeping as per time = 1000
    }
    catch(error){
        console.log('Time must be a number');
    }
    console.log(sleep1, sleep2);
}


// Async function called
test();