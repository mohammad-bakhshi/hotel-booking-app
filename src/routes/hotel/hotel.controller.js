const {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  addHotelImage
} = require('../../models/hotel/hotel.model');

const httpGetAllHotels = async (req, res) => {
  const hotels = await getAllHotels();
  return res.status(200).json(hotels);
}

const httpGetHotelById = async (req, res) => {
  const hotelID = req.params.id;
  const hotel = await getHotelById(hotelID);
  return res.status(200).json(hotel);
}

const httpCreateHotel = async (req, res) => {
  const hotel = req.body;
  const result = await createHotel(hotel);
  return res.status(201).json(result);
}

const httpUpdateHotel = (req, res) => {
  return res.send("UpdateHotel")
}

const httpDeleteHotel = (req, res) => {
  return res.send("DeleteHote")
}

const httpUploadHotelImage = async (req, res) => {
  const hotelID = req.params.id;
  const hotel = await addHotelImage(hotelID, req.file.filename);
  return res.status(200).json(hotel);
}

const httpmainPage = async (req, res) => {
  const hotels = await getAllHotels();
  return res.render('index', {
    images: hotels[0].images
  })
}

module.exports = {
  httpGetAllHotels,
  httpGetHotelById,
  httpCreateHotel,
  httpUpdateHotel,
  httpDeleteHotel,
  httpUploadHotelImage,
  httpmainPage
}