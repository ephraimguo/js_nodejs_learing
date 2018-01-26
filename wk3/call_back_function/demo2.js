function B(cback){

    setTimeout(function(){
        console.log('function B running');
        cback();
    }, 5000);
}

B(A);

function A() {
    console.log('A is called back');
}

console.log('------------------');

setTimeout(A, 2000);

