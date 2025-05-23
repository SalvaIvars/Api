const express = require("express");
const userController = require("../controllers/userController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const userValidator = require('../validators/userValidator');
const validateHelper = require('../helpers/validateHelper')
const router = express.Router();

router
   .get("/", verify.verifyJWT,userController.getAllUsers)
   .get("/followers/:email", verify.verifyJWT, userValidator.checkIfEmailExists(), userController.getFollowers)
   .get("/:email", verify.verifyJWT, userValidator.checkIfEmailExists(), userController.getUser)
   .put("/",verify.verifyJWT,userValidator.validateUpdateUser(),userController.updateUser)
   .delete("/photo/:email",verify.verifyJWT,userValidator.checkIfEmailExists(), userController.deleteProfilePicture)
   .delete("/:email", verify.verifyJWT, userValidator.checkIfEmailExists(),userController.deleteUser)
   .post("/unfollow",verify.verifyJWT,userValidator.checkIfEmailExists(), userController.unfollowUser)
   .post("/follow",verify.verifyJWT, userValidator.checkIfEmailExists(),userController.followUser)
   .post("/:email",verify.verifyJWT,userValidator.checkIfEmailExists(), uploadImage.uploadProfilePicture,  userController.postPhoto)

module.exports = router;