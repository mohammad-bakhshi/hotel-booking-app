const { default: mongoose } = require('mongoose');
const Hotel = require('./hotel.mongo');

const createHotel = async (hotel) => {
  try {
    const result = await Hotel.create(hotel);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const getAllHotels = async () => {
  try {
    const hotels = await Hotel.find({});
    return hotels;
  } catch (error) {
    console.error(error);
  }
}

const getHotelById = async (hotelID) => {
  try {
    const hotelId = mongoose.Types.ObjectId(hotelID);
    const hotel = await Hotel.findById(hotelId);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}

const updateHotel = async (hotelID, updateFiels) => {
  try {
    const hotelId = mongoose.Types.ObjectId(hotelID);
    const hotel = await Hotel.findByIdAndUpdate(hotelId, updateFiels);
    return hotel;
  } catch (error) {
    console.error(error);
  }
}

const addHotelImage = async (hotelID, imageURL) => {
  try {
    const hotelId = mongoose.Types.ObjectId(hotelID);
    const hotel = await Hotel.findByIdAndUpdate(hotelId, {
      $push: { images: imageURL }
    });
    return hotel;
  } catch (error) {
    console.error(error);
  }
}



module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  addHotelImage
}