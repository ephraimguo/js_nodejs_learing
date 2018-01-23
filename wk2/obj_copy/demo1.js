var o = {
    sub:{
        name:"llo"
    }
}

var o2 = {
    sub2:o.sub
}

o.sub.name = "123";
console.log(o2.sub2);

var source = {};
var o1 = {
    s:{
        name: "s_name",
    }
};

const result = Object(source, o1, {b:2});

o1.s.name = "new name";
console.log(o1.s.name);