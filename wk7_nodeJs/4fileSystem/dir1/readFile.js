const fs = require('fs');

fs.appendFile('f.txt','hello world', function(err){
    // console.log(err);

    fs.readFile("f.txt", function(err,data){
        console.log(err);
        console.log(data);
    })
});