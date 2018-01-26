
function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(isNaN(time)){
                reject('time must be a number');
            }else {
                resolve('I slept for ' + time + 'second long');
            }
        }, time);
    })
}

async function test() {
    try {
        var sleep1 = await sleep(2000);
        var sleep2 = await sleep(1000);
    }
    catch(error){
        console.log('Time must be a number');
    }

    console.log(sleep1, sleep2);

}

test();