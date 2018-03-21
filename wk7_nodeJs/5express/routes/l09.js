const exp = require("express");
const router = exp.Router();


router.get("/ab*cd", function(req, res, next){
    res.send("ab*cd");
});

router.get("/12[345]+6", function(req, res, next){
    res.send("12345");
});

router.get(/xyz\d{2,5}w/, function(req, res, next){
    res.send("RegExp");
});


module.exports = router;

