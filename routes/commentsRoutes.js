const express = require('express')
const commentsController = require('../controllers/commentsController')
const verify = require('../middleware/verify')
const commentValidator = require('../validators/commentValidator');
const router = express.Router()

router
    .get('/', verify.verifyJWT,commentsController.getAllComments)
    .get('/:id', verify.verifyJWT,commentsController.getComment)
    .delete('/:id', verify.verifyJWTAdmin,commentsController.deleteComment)
    .post('/', verify.verifyJWTAdmin, commentValidator.validateCreate, commentsController.createComment)
    .put('/:id', verify.verifyJWTAdmin, commentValidator.validateCreate, commentsController.updateComment)

module.exports = router;