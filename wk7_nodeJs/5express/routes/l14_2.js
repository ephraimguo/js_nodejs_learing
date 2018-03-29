const fs = require("fs"); // file system

const exp = require("express"); // express imported
const r = exp.Router();

const multer = require("multer"); // medium multer imported
const upload = multer({
    dest: __dirname+"/upload"
});

const single = upload.single("singleFile_2");
const arr = [];

r.get("/", function(req, res, next){
    res.render("l14_2", {list:arr});
    // res.locals.list = arr;
    // res.render("l14_2");
});

r.get("/img/:imgname", function(req, res, next){
    // img reading stream
    const rs = fs.createReadStream( __dirname+"/upload/"+req.params.imgname);
    rs.pipe(res);//将数据缓缓的流去浏览器, 连接到响应流
});

r.post("/up", single, function(req, res, next){
    arr.push(req.file);
    res.redirect("back");
});

module.exports=r;
