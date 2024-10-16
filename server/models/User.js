const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  token: {
    type: String
  },
  avatar: {
    type: String
  },
  // verified: {
  //   type: String
  // },
});

module.exports = mongoose.model('User', userSchema);