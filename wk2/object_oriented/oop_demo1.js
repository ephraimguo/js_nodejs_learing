//通过JSon方式
var obj = {
    name: 'yanyu',
    changeName : function (name) {
        this.name = name;
    }
};

obj.changeName('qq 1233213');
console.log(obj);