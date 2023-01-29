const express = require("express");
const authController = require("./authController");
const image = require('../service/imageService')
const validateCreate = require('../validators/userValidator')
const router = express.Router();

router
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .post('/imagen', image.writeImage)
    .get('/imagen', image.readImage)

module.exports = router;