const { check } = require('express-validator')
const errorHandler = require('../helpers/errorHandler')
const UserService = require('../service/userService')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ 
    check('nick')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Invalid nick")
    .custom(async (nick)=>{
        const searchedNick = await UserService.checkNick(nick);
        if(searchedNick.length > 0)
            return errorHandler("Nick already in use", req, res)
    }),

    check('name')
        .trim()
        .not()
        .isEmpty()
        .isAlpha()
        .withMessage("Invalid name"),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (email)=>{
            const searchedEmail = await UserService.checkEmail(email);
            if(searchedEmail.length > 0)
                return errorHandler("Email already in use", req, res)
        }),

    check('password')
        .trim()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateLogin = [ 
    check('email')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (email)=>{
            const searchedEmail = await UserService.checkEmail(email);
            console.log("email: "  + email)
            console.log("searched: " + searchedEmail)
            if(searchedEmail.length <= 0)
            console.log("m")
                return errorHandler("Email not registered", req, res)
        }),

    check('password')
        .trim()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { 
    validateCreate,
    validateLogin
}