function People(name = 'default'){
    this.name = 'Yanyu';
    this.changeName = function(name){
        this.name = name;
    }
}

People.prototype.fff = function(){

};

function User(name){

};

User.prototype = People.prototype.__proto__;