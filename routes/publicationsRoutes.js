const express = require("express");
const publicationsController = require("../controllers/publicationsController");
const verifyJWT = require('../middleware/verifyJWT')
const router = express.Router();

router
   .get("/", publicationsController.getAllRoutes)
   .get("/:id", publicationsController.getRoute)
   .post("/",verifyJWT, publicationsController.createRoute)
   .put("/:id", verifyJWT,publicationsController.updateRoute)
   .delete("/:id", verifyJWT,publicationsController.deleteRoute)

module.exports = router;