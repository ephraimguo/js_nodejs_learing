const exp = require("express");
const router = exp.Router();
const path = require("path");

router.get("/down", function(req, res, next){
    //download
    res.download(__dirname+"/07.js");
});

router.get("/back", function(req, res, next){
    res.redirect("http://www.youtube.com");
});






module.exports = router;