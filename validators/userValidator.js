const {body} = require('express-validator')
const validateResult = require('../helpers/validateHelper')

const validateCreate = [
    body('nombre')
        .exists()
        .not()
        .isEmpty(),
    body('email')
        .exists()
        .isEmail(),
    body('password')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports =  validateCreate 