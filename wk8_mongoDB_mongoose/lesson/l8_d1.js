const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User',{name:String, age:Number});


async function test(){
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

  // EXP 1
  // const u1 = await User.findOne({age:3});
  // u1.name = 'guoguoguo';
  // await u1.save();
  // console.log(await User.findById(u1.id));

  // EXP2
  await User.update({name: 'guo'}, {age: 1234}, {multi:true});
  console.log(await User.find({name: 'guo'}));

}

test();
