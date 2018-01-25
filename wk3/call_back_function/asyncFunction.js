function B(call){
    setTimeout(call, 3000);
}

B(function (callback) {
    console.log('aaa');
});

console.log('sdfsdf');