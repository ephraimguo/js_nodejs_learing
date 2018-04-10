const router = require('express').Router();

router.get('/', function(req, res, next){
  next(new Error('err msg'));
});

module.exports = router;