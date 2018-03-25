const fs = require("fs");

const exp = require("express");
const r = exp.Router();

const multer = require("multer");
const upload = multer({
    dest: __dirname+"/upload"
});

var single = upload.single("singleFile");
var multi = upload.array("multiFiles");
var mix = upload.fields([
    {name:"mixSingle", maxCount:1},
    {name:"mixMulti", maxCount:5}
]);

r.post("/single", single, function(req, res, next){
    res.send(req.file);
});

r.post("/xhr", single, function(req, res, next){
    res.send(req.file);
});

r.get("/img/:imgname",function (req,res) {
    // 图片文件数据的［读取流］
    const rs = fs.createReadStream("upload/"+req.params.imgname);
    rs.pipe(res);
});
// r.post("/xhr", single, function(req, res, next){
//     res.send(req.file);
// });
r.post("/multi", multi, function(req, res, next){
    res.send(req.files);
});
r.post("/mix", mix, function(req, res, next){
    res.send(req.files);
});


module.exports = r;



