const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = Promise;

const User = mongoose.model('User',{
  name: String
});

var user = new User({
  name: "guo"
});

async function run(){
  await User.remove();
  await user.save();

  const list = await User.create([
    {name: "guo1"},
    {name: "guo2"},
    {name: "guo3"},
    {name: "guo4"},
  ]);

  const list2 = await User.find();
  console.log(list2);
}

run();