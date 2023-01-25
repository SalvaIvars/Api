const express = require("express");
const publicationsController = require("../controllers/userController");
const router = express.Router();
const verify = require('../middleware/verify')
router
   .get("/", verify.verifyJWT,publicationsController.getAllUsers)
   .get("/:id", verify.verifyJWT,publicationsController.getUser)
   .put("/:id",verify.verifyJWTAdmin, publicationsController.updateUser)
   .delete("/:id", verify.verifyJWTAdmin, publicationsController.deleteUser)


module.exports = router;