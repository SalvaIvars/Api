const express = require("express");
const authController = require("./authController");
const userValidator = require('../validators/userValidator');
const router = express.Router();

router
    .post('/signup', userValidator.validateCreate, authController.signUp)
    .post('/signin', userValidator.validateLogin, authController.signIn)

module.exports = router;