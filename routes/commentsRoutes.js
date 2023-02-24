const express = require('express')
const commentsController = require('../controllers/commentsController')
const verify = require('../middleware/verify')
const commentValidator = require('../validators/commentValidator');
const validateHelper = require('../helpers/validateHelper')
const router = express.Router()

router
    .get('/', verify.verifyJWT,commentsController.getAllComments)
    .get('/publication/:id', verify.verifyJWT, commentsController.getRouteComments)
    .get('/:id', verify.verifyJWT,commentsController.getComment)
    .delete('/:id', verify.verifyJWTAdmin,commentsController.deleteComment)
    .post('/', verify.verifyJWT, commentValidator.validateCreate(), validateHelper.validateResult, commentsController.createComment)
    .put('/:id', verify.verifyJWTAdmin, commentsController.updateComment)

module.exports = router;