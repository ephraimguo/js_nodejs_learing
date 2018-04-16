const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = Promise;

const User = mongoose.model('User', {
  name: String
});

var u = new User({name: 'guoguo'});

async function run(){
  await User.remove();
  await u.save();
  const u2 = await User.findById(u.id);
  const u3 = await User.findById(u.id);
  console.log(u2.id === u3.id);
}
run();