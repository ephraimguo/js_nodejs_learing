const fs = require("fs");

for(let i = 0; i<5; i++){
    fs.appendFile("dir1/md.txt", "lololololo "+i +"\n", function(err){
        console.log(err);
    });
}

