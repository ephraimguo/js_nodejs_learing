const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name: String,
  sub:{
    title: String,
    body: String
  }
});

async function run(){
  await User.remove();
  await User.create([
    {name: 'guo11', sub:{title:'t1', body: 'b1'}},
    {name: 'guo12', sub:{title:'t2', body: 'b2'}},
    {name: 'guo13', sub:{title:'t3', body: 'b3'}},
    {name: 'guo21', sub:{title:'t4', body: 'b4'}},
    {name: 'guo31', sub:{title:'t5', body: 'b5'}},
    {name: 'guo4112', sub:{title:'t6', body: 'b6'}}
  ]);

  let result = await User.find().where("sub.title").eq('t5');
  console.log(result);
}

run();