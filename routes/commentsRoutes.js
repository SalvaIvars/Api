const express = require('express')
const commentsController = require('../controllers/commentsController')
const verify = require('../middleware/verify')
const router = express.Router()

router
    .get('/', verify.verifyJWT,commentsController.getComments)
    .get('/:id', verify.verifyJWT,commentsController.getComment)
    .delete('/:id', verify.verifyJWTAdmin,commentsController.deleteComment)
    .post('/', verify.verifyJWTAdmin,commentsController.createComment)
    .put('/:id', verify.verifyJWTAdmin,commentsController.updateComment)

module.exports = router;