var arr1 = [1,2,3];
var arr2 = [4,5,6];

function fn(a1, a2){ // 1st params is the arr receiving 2nd params arr elements
    var i = 0;
    while(i<a2.length){
        a1.splice(i+(i+1), 0, a2[i]);
        console.log('i=1');
        i++;
    }
    console.log(a1);
}

fn(arr1, arr2);
