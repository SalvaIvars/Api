const { validationResult } = require('express-validator'); 
const errorHandler = require('../helpers/errorHandler')

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        return errorHandler(err.array()[0].msg, req, res)
    }
}

module.exports = { validateResult }