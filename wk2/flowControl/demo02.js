var a = 11;
var log = console.log;

switch(a){
    case 11:
        log('a = '+a);
        break;
    case 12:
        log('a = '+a);
        break;
    case 13:
        log('a = ');
        break;
    case 14:
    case 15:
    default:
        log('no matching values');
}