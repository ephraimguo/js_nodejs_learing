var router = require("express").Router();


function h1(req, res, next){console.log("han1");next()}
function h2(req, res, next){console.log("han2");next();}
function h3(req, res, next){console.log("han3");res.send("Res finished")}

router.get("/", [h1, h2, h3]);

module.exports = router;