
var name = "yanyu";

function changename(_name){
    name = _name;
}
function getName(){
    return name;
}

//exports and module.exports can only choose one!!!!!!

module.exports = {
    chName : changename,
    gName : getName
};