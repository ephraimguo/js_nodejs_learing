const exp = require("express");
const r = exp.Router();

const multer = require("multer");
const upload = multer({
    dest: __dirname+"/upload"
});

const single = upload.single("singleFile");
const multiple = upload.array("multiFile", 3);
const fields = upload.fields([
    {name:"f1", maxCont:1},
    {name:"f2", maxCont:3}
]);

r.post("/up1", single, function(req, res){
    res.send(req.file);
});
r.post("/up2", multiple, function (req, res) {
    res.send(req.files);
});
r.post("/up3", fields, function(req, res){
    res.send(req.files);
});

module.exports = r;



