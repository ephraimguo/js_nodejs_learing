const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");

var mw = multer({dest: __dirname+"/imgsTemp"});
var single = mw.single("myImg");

// var imgs = [];
var imgs = require('./phName');



router.get("/", function(req, res){
  res.render('album_live', {title: 'Album', nList: imgs});
});

router.post("/upload", single, function(req, res){
  // imgs.push(req.file.filename);
  // console.log(imgs);
  // res.redirect("/album");
  imgs.push(req.file.filename);
  console.log(imgs);
  fs.writeFileSync(__dirname+"/phName.json",JSON.stringify(imgs));
  res.redirect('back');
});

router.get("/img/:name", function (req, res){
  fs.createReadStream(__dirname+"/imgsTemp/"+req.params.name).pipe(res);
});

module.exports=router;