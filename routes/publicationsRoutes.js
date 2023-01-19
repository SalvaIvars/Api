const express = require("express");
const publicationsController = require("../controllers/publicationsController");
const router = express.Router();

router
   .get("/", publicationsController.getAllRoutes)
   .get("/:id", publicationsController.getRoute)
   .post("/", publicationsController.createRoute)
   .put("/:id", publicationsController.updateRoute)
   .delete("/:id", publicationsController.deleteRoute)

module.exports = router;