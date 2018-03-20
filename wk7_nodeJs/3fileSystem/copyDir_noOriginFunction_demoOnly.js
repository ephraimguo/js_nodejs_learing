
const fs = require('fs');

fs.copyFile("dir1", "dir2", function(err){
    console.log(err);
});