const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test");

//userSchema
const userSchema = new Schema({
  name: String,
  age: Number,
  fromChina: Boolean,
  arr: Array,
  arr2: [],
  arr3: [Number],
  arr4: [{title: String, num: Number}],
  sub: {title: String, content: String}
});

const User = mongoose.model('User', userSchema);

var u = new User({
  name: 123,
  age: 't'
});

console.log(u.age, u.name);


// var u = new User({});
// var u2 = new User({});
// console.log(u.id, u2.id);