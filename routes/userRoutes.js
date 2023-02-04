const express = require("express");
const publicationsController = require("../controllers/userController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const router = express.Router();

router
   .get("/", verify.verifyJWT,publicationsController.getAllUsers)
   .get("/photo", publicationsController.getProfilePicture)
   .get("/:id", verify.verifyJWT,publicationsController.getUser)
   .put("/:id",verify.verifyJWTAdmin, publicationsController.updateUser)
   .delete("/:id", verify.verifyJWTAdmin, publicationsController.deleteUser)
   .post("/photo", uploadImage, function(req,res){
      console.log("fun");
      res.sendStatus(200)
  })


module.exports = router;