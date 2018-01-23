const obj = factory();
// obj.change("oookkk");
console.log(obj);


function factory(){
    const key1 = Symbol();

    var obj = {
        [key1]:122,
        change(value){
            this[key1] = value;
        }
    };
    return obj;
}

// const o = factory();
// o.change("oookkk");
// console.log(o);
//
// function factory(){
//
//     const key1 = Symbol(); // symbol
//
//     var o = {
//         [key1]:122,
//         change(value){
//             this[key1] = value;
//         }
//     }
//
//     return o;
//
// }
