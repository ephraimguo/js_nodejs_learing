const o = factory();
// o.change("oookkk");
console.log(o.key1);


function factory(){
    const key1 = Symbol();

    var obj = {
        key1 : 122,
        change(value){
            this.key1 = value;
        }
    };
    return o;
}