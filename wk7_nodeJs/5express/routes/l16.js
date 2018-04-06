const r = require("express").Router();

r.post("/", function(req, res){
    console.log(req.body);
    // res.redirect("back");
    res.send(req.body);
});

r.get('/', function(req, res){
    console.log(req.query);
    res.send();
});

module.exports = r;