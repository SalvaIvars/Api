const validator = require('express-validator')
const errorHandler = require('./errorHandler')

const validateResult = (req, res, next) => {
    try{
        validator.validationResult(req.body).throw()
        return next()
    } catch (e){
        return errorHandler(e, req,res)
    }
}

module.exports =  validateResult 