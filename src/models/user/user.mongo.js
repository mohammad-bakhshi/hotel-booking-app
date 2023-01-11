const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  },
  reservedRooms: {
    type: mongoose.Types.ObjectId,
    ref: "room",
    default: null
  }
})

const userModel = mongoose.model('user', userSchema, 'users');
module.exports = userModel;