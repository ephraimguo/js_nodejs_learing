const exp = require("express");
const r = exp.Router();

// var xhr = new XMLHttpRequest();

r.get("/", function(req, res, next){
    res.send(req.query.name);
});



module.exports = r;