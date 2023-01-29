const validator = require('express-validator')
const errorHandler = require('./errorHandler')

const validateResult = (req, res, next) => {
    try{
        const errors = validator.validationResult(req.body)
        if(!errors.isEmpty()){
            return errorHandler(errors.array(), req, res)
        }
        return next()
    } catch (e){
        return errorHandler("Validation error", req,res)
    }
}


module.exports =  {
    validateResult,
}