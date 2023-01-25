const express = require("express");
const publicationsController = require("../controllers/userController");
const verify = require('../middleware/verify')
const router = express.Router();

router
   .get("/", verify.verifyJWT,publicationsController.getAllUsers)
   .get("/:id", verify.verifyJWT,publicationsController.getUser)
   .put("/:id",verify.verifyJWTAdmin, publicationsController.updateUser)
   .delete("/:id", verify.verifyJWTAdmin, publicationsController.deleteUser)


module.exports = router;