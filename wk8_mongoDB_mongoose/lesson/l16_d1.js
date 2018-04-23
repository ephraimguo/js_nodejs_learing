const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = Promise;

const User = mongoose.model("User", {
  name: String
});

async function run(){
  await User.remove();
  await User.create([
    {name: 'guoguoguo'},
    {name: 'yanguoguo'},
    {name: 'yuguoguo'},
    {name: 'ephraimguoguoguoguo'}
  ]);

  const res = await User.find().$where(function(){
    return this.name.length >1 &&  this.name.length < 12;
  });

  console.log(res);
}

run();