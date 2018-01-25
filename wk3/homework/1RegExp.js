
var str = "function abc(){   }fjskfj192.168.1.101sl fjkdsjfkls fjklsfjlsd127.0.0.1fjksldfjafjio jfk192.168.1.101sljfs function fsdjfkldsfjsklfsklffjoijfoiaf asfjs fed jfjf jf sdjfsi jfi jafis function dd ( ) { }afjsdiajf iosa function abc(){} jfisjad fjsaiofjaoissf function vde(){}addedfds";

var re_ip = /(\d{1,3}\.){3}\d{1,3}/g;
var res_ip_exec;

do {
    res_ip_exec = re_ip.exec(str);
    console.log(res_ip_exec && res_ip_exec[0]);
}
while(res_ip_exec);

console.log("----------");

var re_fun = /function\s\w+\s?\((\s*?)\)(\s*?){(\s*?)}/g;
var res_fun_exec;

do {
    res_fun_exec = re_fun.exec(str);
    console.log(res_fun_exec && res_fun_exec[0]);
    // console.log(res_fun_exec);
}while(res_fun_exec);