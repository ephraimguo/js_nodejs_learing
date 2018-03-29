const exp = require("express");
const r = exp.Router();

r.get("/:id", function(req, res){
    console.log(req.params.id);
    res.send(req.params.id);
});

r.get("/", function(req, res){
    res.send(req.query.name);
});


module.exports = r;