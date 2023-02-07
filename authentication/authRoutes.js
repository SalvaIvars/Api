const express = require("express");
const authController = require("./authController");
const validateHelper = require('../helpers/validateHelper')
const userValidator = require('../validators/userValidator');
const router = express.Router();

router
    .post('/signup', userValidator.validateCreate(), validateHelper.validateResult, authController.signUp)
    .post('/signin', userValidator.validateLogin(), validateHelper.validateResult, authController.signIn)

module.exports = router;