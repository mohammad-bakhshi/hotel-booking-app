const express = require('express');
const app = express();
const hotelRouter = require('./routes/hotel/hotel.route');
const userRouter = require('./routes/user/user.route');
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/hotels', hotelRouter);
app.use('/users', userRouter);

module.exports = app;