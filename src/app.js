const express = require('express');
const app = express();
const hotelRouter = require('./routes/hotel/hotel.route');
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/hotels', hotelRouter);

module.exports = app;