const fs = require('fs');

// fs.access("abc.txt", function(err){
//     console.log(err);
// });
fs.accessSync("abc.txt");