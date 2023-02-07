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
   .get("/:email", verify.verifyJWT,userController.getUser)
   .put("/:id",verify.verifyJWTAdmin,userController.updateUser)
   .delete("/:id", verify.verifyJWTAdmin, userController.deleteUser)
   .delete("/photo", userController.deleteProfilePicture)
   .post("/photo",  uploadImage.uploadProfilePicture, userController.postPhoto)


module.exports = router;