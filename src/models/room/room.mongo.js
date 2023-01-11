const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  }
})

const roomModel = mongoose.model('room', roomSchema, 'rooms');
module.exports = roomModel;