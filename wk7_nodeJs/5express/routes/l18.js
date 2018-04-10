const router = require('express').Router();

router.post('/', function(req, res){
  const {name, email} = req.body;

  let errorMsg = '';

  if(!(name && name.length>2 && name.length < 10)){
    errorMsg = errorMsg || {};
    errorMsg.name = "name lenght must between 2 to 10 characters";
  }

  if(!(/^[a-zA-Z]\w+@[a-zA-Z]\w+\.[a-zA-Z]\w+(\.[a-zA-Z]\w+)?$/.test(email))){
    errorMsg = errorMsg || {};
    errorMsg.email = "your email format wrong";
  }
  console.log(errorMsg);
  res.send(errorMsg);

});

module.exports = router;