const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const userSchema = new Schema({
  name: String,
  age: Number,
  child: [],
  childDetails: [{name:String, age: Number}],
});

const User = mongoose.model('User', userSchema);

let u1 = new User({
  name: 'Yanyu',
  age: 23,
  childDetails: [
    {
      name:'xiao', age:1
    },
    {
      name:'yu', age: 2
    }
  ]
});

console.log(u1);