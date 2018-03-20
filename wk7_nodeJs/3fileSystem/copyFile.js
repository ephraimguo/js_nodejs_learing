
const fs = require('fs');

fs.copyFile("dir1/md.txt", "dir1/cs.txt", function(err){
    console.log(err);
});