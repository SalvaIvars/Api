const validator = require('express-validator')
const validateResult = require('../helpers/validateHelper')

const validateCreate = [
    validator.check('nombre')
        .exists()
        .not()
        .isEmpty(),
    validator.check('email')
        .exists()
        .isEmail(),
    validator.check('password')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports =  validateCreate 