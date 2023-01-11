const express = require('express');
const router = express.Router();
// const {
//   httpGetAllHotels,
//   httpGetHotelById,
//   httpCreateHotel,
//   httpUpdateHotel,
//   httpDeleteHotel,
//   httpUploadHotelImage,
//   httpmainPage
// } = require('./hotel.controller');

// router.get('/main', httpmainPage);
// router.post('/upload/:id', upload.single('hotel'), httpUploadHotelImage)
// router.get('/', httpGetAllHotels);
// router.get('/:id', httpGetHotelById)
// router.post('/', httpCreateHotel)
// router.put('/:id', httpUpdateHotel)
// router.delete('/:id', httpDeleteHotel)

router.post('/signup', httpSignupUser)
router.post('/signin', httpSigninUser)

module.exports = router