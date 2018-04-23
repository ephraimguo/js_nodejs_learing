const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name:{
    type: String,
    // default: 'Default',
    required: [true, 'cannot be null'],
    validate: function(v){
      return v.length >3;
    }
  }
});

async function run(){
  await User.remove();
  var u = new User();
  try{
    await u.save();

  }catch(err){
    console.log(err.errors.name.message);
  }
  console.log(await User.find());
}

run();