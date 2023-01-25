const express = require("express");
const publicationsController = require("../controllers/publicationsController");
const verify = require('../middleware/verify')
const router = express.Router();

router
   .get("/", verify.verifyJWT,publicationsController.getAllRoutes)
   .get("/:id",verify.verifyJWT, publicationsController.getRoute)
   .post("/",verify.verifyJWT, publicationsController.createRoute)
   .put("/:id", verify.verifyJWT,publicationsController.updateRoute)
   .delete("/:id", verify.verifyJWT,publicationsController.deleteRoute)

module.exports = router;