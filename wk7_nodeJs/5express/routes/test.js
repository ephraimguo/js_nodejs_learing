const exp = require("express");
const router = exp.Router();

const multer = require("multer");

const fs = require("fs");

const upload = multer({
    dest: __dirname+"/upload"
});

var single = upload.single("sf");
var multi = upload.array("mf");

router.post("/file", single, function(req, res){
    res.send(req.file);
});
router.post("/files", multi, function(req, res){
    res.send(req.files);
});

module.exports = router;