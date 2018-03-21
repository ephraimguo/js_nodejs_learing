const express = require("express");
const router = express.Router();

router.get("/param/:id", function(req, res, next){
    res.send(req.params.id);
});

router.get("/query/", function(req, res, next){
    res.send(req.query);
});
// upper 2 methods are using GET method


router.post("/up", function(req, res, next){
    res.send("<h1>"+req.body.title+"</h1><br>"+req.body.content);
});

module.exports = router;