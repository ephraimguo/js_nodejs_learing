const fs = require("fs");

fs.stat("dir1", function(err, status){
    console.log(status.isDirectory());
    console.log("-----------------");
    console.log(status.isFile());
});