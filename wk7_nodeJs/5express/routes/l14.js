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

r.get("/img/:imgname", function(req, res, next){
    // img reading stream
    const rs = fs.createReadStream( __dirname+"/upload/"+req.params.imgname);
    rs.pipe(res);//将数据缓缓的流去浏览器, 连接到响应流
});

r.post("/multi", multi, function(req, res, next){
    res.send(req.files);
});

r.post("/mix", mix, function(req, res, next){
    res.send(req.files);
});


module.exports = r;



