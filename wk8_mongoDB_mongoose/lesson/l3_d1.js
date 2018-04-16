/*

* 1. import mongoose Lib
* 2. connect bottom level database -- mongoose.connect("mongodb://localhost/test");
* 3. extends from ES6 Promise class by mongoose.Promise
* 4. create class Schema which extending from mongoose.Schema
* 5. create obj-schema naming userSchema instancing from class Schema
* 6. define userSchema
* 7. create data type User which is modelled from userSchema
* 8. instance User as user-object(a data) modelled by data-type User
* 9. data presistence -- dataObj.save();
* 10. data search -- dataType.find(); -> return all the data modelled by the data-type
*
* */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

// Create User Class
var userSchema = new Schema({
  name: String,
  password: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);

// const User2 = mongoose.model("User");
// console.log(User === User2);

var guo = new User({
  name: "guo",
  password: 123456,
  age: 18
});

var yan = new User({
  name: "yan",
  password: 190456,
  age: 16
});

// data presistence -- 数据持久化, return a Promise object
// guo.save();
// yan.save();
async function run(){
  await User.remove(); // class static fuction, to delete all the data obj from database
  const list1 = await User.find(); // find all class User objedt
  console.log('list1------',list1);
  // data presistence action, to save the data inside corresponding mongoDB
  await guo.save();
  await yan.save();
  const list2 = await User.find();
  console.log('list2------',list2);
}

run();