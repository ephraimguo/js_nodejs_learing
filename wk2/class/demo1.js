class User{
    constructor(){
        var pa = 'ca';

        this.print_pa = function(){
            console.log(pa);
        }
    }

    fn(){
        console.log('fn');
    }

    get type(){
        return "UUU";
    }

    //User.version = 1.0;
    static get version(){
        return 1.0;
    }
    static staticF() {

    }
}

var usr = new User();
console.log(User.version);
// console.log(User.staticF);
User.staticF();

console.log(typeof User);