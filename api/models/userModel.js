const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;


module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};