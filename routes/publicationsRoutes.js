const express = require("express");
const publicationsController = require("../controllers/publicationsController");
const verify = require('../middleware/verify')
const uploadImage = require("../middleware/uploader");
const router = express.Router();

router
   .get("/photo", publicationsController.getPublicationPictures)
   .get("/", verify.verifyJWT,publicationsController.getAllRoutes)
   .get("/:id",verify.verifyJWT, publicationsController.getRoute)
   .post("/",verify.verifyJWT, publicationsController.createRoute)
   .put("/:id", verify.verifyJWT,publicationsController.updateRoute)
   .delete("/:id", verify.verifyJWT,publicationsController.deleteRoute)
   .post("/photo", uploadImage.uploadPublicationPictures, function(req,res){
      res.sendStatus(200)
  })

module.exports = router;