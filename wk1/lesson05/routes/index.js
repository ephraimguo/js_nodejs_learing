var express = require('express');
var router = express.Router();


var db = [];

/* GET home page. */
//find
router.get('/', function(req, res, next) {
  res.render('index', {list:db});
});

//create get, practical: create form
router.get('/create', function(req, res){
  // res.send('content created by get method');
    res.render('create');
});


//create post
router.post('/create', function(req, res){
  db.push(req.body);
  res.redirect('/');

});

module.exports = router;
