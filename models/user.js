const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
 /* birthday: { type: Date, required: true },
  state: { type: String, required: true },
  gender: { type: String, required: true },
  account_state: { type: Number, default: 0 },*/
});

const User = mongoose.model('User', userSchema);
// Add CRUD methods
User.createUser = async function (userData) {
  const user = new User(userData);
  return user.save();
};

User.getUserById = function (userId) {
  return User.findById(userId);
};

User.updateUser = function (userId, updatedUserData) {
  return User.findByIdAndUpdate(userId, updatedUserData, { new: true });
};

User.deleteUser = function (userId) {
  return User.findByIdAndDelete(userId);
};

module.exports = User;

