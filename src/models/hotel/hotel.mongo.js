const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hotelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rooms: [{
    type: mongoose.Types.ObjectId,
    ref: "room",
    default: null,
  }],
  likes: {
    type: Number,
    default: 0
  },
  images: [{
    type: String,
    default: null
  }]
})

const hotelModel = mongoose.model('hotel', hotelSchema, 'hotels');
module.exports = hotelModel;