const express = require("express");
const userController = require("../controllers/userController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const userValidator = require('../validators/userValidator');
const validateHelper = require('../helpers/validateHelper')
const router = express.Router();

router
   .get("/", verify.verifyJWT,userController.getAllUsers)
   .get("/photo", userController.getProfilePicture)
   .get("/followers/:email", userController.getFollowers)
   .get("/:email", verify.verifyJWT,userController.getUser)
   .put("/",userController.updateUser)
   .delete("/:email", verify.verifyJWTAdmin, userController.deleteUser)
   .delete("/photo", userController.deleteProfilePicture)
   .post("/unfollow", userController.unfollowUser)
   .post("/follow", userController.followUser)
   .post("/:email", uploadImage.uploadProfilePicture,  userController.postPhoto)

module.exports = router;