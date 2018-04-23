const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name:{
    type: String,
    // default: 'Default',
    // required: [true, 'cannot be null'],
    // match: [/^guo/, "oook"]
    minlength: [2, 'min 2'],
    maxlength: [8, 'max 8']
  },
  age:{
    type: Number,
    min: [3, 'min 3'],
    max: [8, 'max 8']
  }
});

async function run(){
  await User.remove();
  try{
    await User.create(
      {name: 'guoyan'},
      {name: 'ephraim'},
      {name: 'seiowob'}
      );

    await User.update({}, {age: 2}, {multi: true})

  }catch(err){
    console.log(err.errors.age.message);
  }
  console.log(await User.find());
}

run();