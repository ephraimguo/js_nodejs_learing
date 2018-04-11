var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.locals.user = req.session.user;
  res.render('user');

});

// login session
router.post('/login', function (req, res, next) {
  var userName = 'ephraimguo';
  var password = '908137guo';
  if(req.body.userName === userName && req.body.password === password){
    req.session.user = {user:'ephraimguo'}
  }
  res.redirect('back');
});

router.get('logout', function(){
  res.session.user = undefined;
  res.redirect("back");
})

module.exports = router;
