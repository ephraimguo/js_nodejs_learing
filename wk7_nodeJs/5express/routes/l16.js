const router = require('express').Router();

router.post('/', function(req, res){
  console.log(req.body);
  res.send();
});

router.get('/',function(req, res){
  res.render("l16", {});
});

module.exports = router;
