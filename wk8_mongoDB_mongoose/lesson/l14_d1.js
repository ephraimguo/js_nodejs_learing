const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name: String,
  arr: [Number],
});

async function run(){
  await User.remove();
  await User.create([
    {name:'G1', arr:[1,11,111]},
    {name:'G2', arr:[2,22,222]},
    {name:'G3', arr:[3,33,333]}
  ]);

  const q = User.find().where("arr").nin([22]);
  console.log(await q);
}

run();