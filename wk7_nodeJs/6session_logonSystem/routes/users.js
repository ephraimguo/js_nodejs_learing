var express = require('express');
var router = express.Router();
var userList = {};
var PW = require("png-word");
var pw = new PW(PW.GRAY);
var R = require('random-word');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.user = req.session.user || "";
  req.session.num1 = res.locals.num1 = Math.round(Math.random()*10);
  req.session.num2 = res.locals.num2 = Math.round(Math.random()*10);
  // req.session.verifySum = res.locals.verifySum = res.locals.num1 + res.locals.num2;
  res.render("users");
});

// login session
router.post('/login', function (req, res, next) {
  const {userName, password, vNum} = req.body;
  if(userList[userName] && userList[userName].password === password && parseInt(vNum)===req.session.num1+req.session.num2){
    req.session.user = {userName: userList[userName].userName}
  }else{
    console.log(req.session.num1, req.session.num2, vNum);
  }
  res.redirect('back');
});

router.get('/logout', function(req, res, next){
  req.session.user = undefined;
  res.redirect("back");
});


router.post('/register', function (req, res) {
  const {userName, password, confirmPass, vNum} = req.body;
  if(userName && password && password === confirmPass && vNum === req.session.vNum){
    userList[userName] = {userName,password};
  }
  console.log(userList[userName]);
  res.redirect('back');
});

router.get("/vpng", function(req, res){
  var r = new R('12345abcdef');
  req.session.vNum = r.random(4);
  pw.createReadStream(req.session.vNum).pipe(res)
});

router.post('/update_pswd', manage, function(req, res){
  const {userName, new_pswd} = req.body;
  if(userList[userName]){
    userList[userName].password = new_pswd;
  }
  res.redirect('back');
});

function manage(req, res, next){
  if(req.session.user && req.session.user.userName === 'admin'){
    next();
  }
  else{
    next(new Error('not authorized'));
  }
}


module.exports = router;
