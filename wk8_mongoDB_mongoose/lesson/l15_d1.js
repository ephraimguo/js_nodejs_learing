const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name: String,
});

async function run(){
  await User.remove();
  await User.create([
    {name: 'guo11'},
    {name: 'guo12'},
    {name: 'guo13'},
    {name: 'guo21'},
    {name: 'guo31'},
    {name: 'guo4112'}
  ]);

  console.log(await User.find().where('name').regex(/^guo4\d{3}/));

}

run();