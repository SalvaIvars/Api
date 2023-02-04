const express = require("express");
const authController = require("./authController");
const image = require('../service/imageService')
const userValidator = require('../validators/userValidator')
const router = express.Router();

router
    .post('/signup', userValidator.validateCreate, authController.signUp)
    .post('/signin', userValidator.validateLogin, authController.signIn)
    .post('/imagen', image.writeImage)
    .get('/imagen', image.readImage)

module.exports = router;