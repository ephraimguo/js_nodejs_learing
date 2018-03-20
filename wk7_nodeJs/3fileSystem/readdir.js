const fs = require('fs');

fs.readdir("dir1", function(err, list){
    console.log(list);

    list.forEach(item=>{
        fs.stat("dir1/"+item, (err, status)=>{
           console.log("otherdir/"+item, "is", status.isFile()?"file":"dir");
        });
    });

});