const express = require("express");
const userController = require("../controllers/userController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const userValidator = require('../validators/userValidator');
const validateHelper = require('../helpers/validateHelper')
const router = express.Router();

router
   .get("/", verify.verifyJWT,userController.getAllUsers)
   .get("/photo",verify.verifyJWT, userValidator.validateEmail(), userController.getProfilePicture)
   .get("/followers/:email", verify.verifyJWT, userValidator.validateEmail(), userController.getFollowers)
   .get("/:email", verify.verifyJWT, userValidator.validateEmail(), userController.getUser)
   .put("/",verify.verifyJWT,userValidator.validateUpdateUser(),userController.updateUser)
   .delete("/:email", verify.verifyJWTAdmin, userValidator.validateEmail(),userController.deleteUser)
   .delete("/photo",verify.verifyJWT,userValidator.validateEmail(), userController.deleteProfilePicture)
   .post("/unfollow",verify.verifyJWT,userValidator.validateEmail(), userController.unfollowUser)
   .post("/follow",verify.verifyJWT, userValidator.validateEmail(),userController.followUser)
   .post("/:email",verify.verifyJWT,userValidator.validateEmail(), uploadImage.uploadProfilePicture,  userController.postPhoto)

module.exports = router;