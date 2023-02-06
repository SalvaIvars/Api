const express = require("express");
const userController = require("../controllers/userController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const userValidator = require('../validators/userValidator');
const router = express.Router();

router
   .get("/", verify.verifyJWT,userController.getAllUsers)
   .get("/photo", userController.getProfilePicture)
   .get("/:id", verify.verifyJWT,userController.getUser)
   .put("/:id",verify.verifyJWTAdmin,userValidator.validateUpdateUser, userController.updateUser)
   .delete("/photo", userController.deleteProfilePicture)
   .post("/photo", uploadImage.uploadProfilePicture, function(req,res){
      res.sendStatus(200)
  })


module.exports = router;