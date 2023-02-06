const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ 
    check('email')
    .trim()
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Invalid email")
    .custom(async (email)=>{
        const searchedEmail = await UserService.checkEmail(email);
        if(searchedEmail.length <= 0)
            return errorHandler("This email doesn't exists", req, res)
    }),

    check('name')
        .trim()
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage("Invalid name"),

    check('category')
        .trim()
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage("Invalid category"),
    
    check('distance')
        .trim()
        .not()
        .isEmpty()
        .not()
        .isAlpha()
        .withMessage("Invalid distance"),

    check('difficulty')
        .trim()
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage("Invalid difficulty"),

    check('duration')
        .trim()
        .not()
        .isEmpty()
        .not()
        .isAlpha()
        .withMessage("Invalid duration"),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreate
}