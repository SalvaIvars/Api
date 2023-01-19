const express = require("express");
const publicationsController = require("../controllers/userController");
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
router
   .get("/", publicationsController.getAllUsers)
   .get("/:id", publicationsController.getUser)
   .post("/", verifyJWT,publicationsController.createUser)
   .put("/:id", verifyJWT, publicationsController.updateUser)
   .delete("/:id", verifyJWT, publicationsController.deleteUser)


module.exports = router;