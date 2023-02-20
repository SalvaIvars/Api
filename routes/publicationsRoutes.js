const express = require("express");
const publicationsController = require("../controllers/publicationsController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const validateHelper = require('../helpers/validateHelper')
const publicationValidator = require('../validators/publicationValidator');
const userValidator = require('../validators/userValidator');
const router = express.Router();

router
   .get("/", verify.verifyJWT,publicationsController.getAllRoutes)
   .get("/:id",verify.verifyJWT, publicationsController.getRoute)
   .get("/user/:email", verify.verifyJWT,userValidator.validateEmail(),validateHelper.validateResult, publicationsController.getUserRoutes)
   .get("/photos/:id_publication", verify.verifyJWT,  publicationsController.getNumberPhotoRoutes)
   .post("/",verify.verifyJWT, publicationValidator.validateCreate(), validateHelper.validateResult, publicationsController.createRoute)
   .put("/:id", verify.verifyJWT,  publicationsController.updateRoute)
   .delete("/:id", verify.verifyJWT,publicationsController.deleteRoute)
   .post("/like", publicationsController.likeRoute)
   .post("/unlike", publicationsController.removeLikeRoute)
   .post("/photo", uploadImage.uploadPublicationPictures, function(req,res){
      res.sendStatus(200)
  })

module.exports = router;