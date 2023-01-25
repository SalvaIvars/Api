const express = require("express");
const authController = require("./authController");
const verify = require('../middleware/verify')
const router = express.Router();

router
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
/*    .post('/accesstoken', verify.verifyJWT, authController.newAccessToken)
    .post('/refreshtoken', verify.verifyJWT, authController.newRefreshToken)
    .post('/logout', verify.verifyJWT, authController.logout)
    .post('/logoutAll', verify.verifyJWTAdmin, authController.logoutAll)
*/
module.exports = router;