const express = require('express');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/img'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
  }
})
const upload = multer({ storage: storage })
const router = express.Router();
const {
  httpGetAllHotels,
  httpGetHotelById,
  httpCreateHotel,
  httpUpdateHotel,
  httpDeleteHotel,
  httpUploadHotelImage,
  httpmainPage
} = require('./hotel.controller');

router.get('/main', httpmainPage);
router.post('/upload/:id', upload.single('hotel'), httpUploadHotelImage)
router.get('/', httpGetAllHotels);
router.get('/:id', httpGetHotelById)
router.post('/', httpCreateHotel)
router.put('/:id', httpUpdateHotel)
router.delete('/:id', httpDeleteHotel)

module.exports = router