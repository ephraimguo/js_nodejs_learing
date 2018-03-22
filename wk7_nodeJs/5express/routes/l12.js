const fs = require('fs');
const exp = require("express");
const r = exp.Router();

r.get('/page1', function(req, res){
    res.render("page1", {list:[11,22,33]});
});

module.exports = r;