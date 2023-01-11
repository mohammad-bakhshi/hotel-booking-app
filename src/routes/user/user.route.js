const express = require('express');
const router = express.Router();
const {
  usernameValidation,
  passwordValidation
} = require('./user.middleware')
const {
  httpSignupUser,
  httpSigninUser
} = require('./user.controller');

router.post('/signup', usernameValidation, passwordValidation, httpSignupUser)
router.post('/signin', usernameValidation, passwordValidation, httpSigninUser)

module.exports = router