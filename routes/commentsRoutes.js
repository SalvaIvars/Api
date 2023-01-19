const express = require('express')
const commentsController = require('../controllers/commentsController')
const verifyJWT = require('../middleware/verifyJWT')
const router = express.Router()

router
    .get('/', commentsController.getComments)
    .get('/:id', commentsController.getComment)
    .delete('/:id', verifyJWT,commentsController.deleteComment)
    .post('/', verifyJWT,commentsController.createComment)
    .put('/:id', verifyJWT,commentsController.updateComment)

module.exports = router;