const express = require('express')
const commentsController = require('../controllers/commentsController')
const router = express.Router()

router
    .get('/', commentsController.getComments)
    .get('/:id', commentsController.getComment)
    .delete('/:id', commentsController.deleteComment)
    .post('/', commentsController.createComment)
    .put('/:id', commentsController.updateComment)

module.exports = router;