var proto = new Object();


//从proto继承下来newObj
var newObj = Object.create(proto,{
    a:{
        configurable:true,
        value: "aaa",
        // enumerable: true
    },
    b:{
        enumerable: true,
        value:"bbb"
    }
});

//use defineProperties add new attribute to newObj and define the descriptions
Object.defineProperties(newObj, {
    c:{
        value: 'ccc',
        enumerable: true,
        configurable: true
    },
    d:{
        value: 'ddd',
        enumerable: true
    }
});

console.log(newObj);
console.log(newObj.__proto__ === proto);




