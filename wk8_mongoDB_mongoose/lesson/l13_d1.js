const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const User = mongoose.model('User', {
  name: String,
  age: Number
});

async function run(){
  await User.remove();

  await User.create([
    {name: 'guo', age: 1},
    {name: 'guo', age: 2},
    {name: 'guo', age: 3},
    {name: 'yan', age: 42},
    {name: 'yan', age: 43},
    {name: 'yan', age: 44},
    {name: 'yan', age: 47},
  ]);

  const q = User.update({}, {name: 'Ephraim'}, {multi: true});
  await q.where('age').gt(4);

  console.log(await User.find())
}

run();
