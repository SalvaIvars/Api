const { check } = require('express-validator')
const UserService = require('../service/userService')

const validateCreate = () => {return [ 
    check('nick')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Invalid nick")
    .custom(async (nick)=>{
        const searchedNick = await UserService.checkNick(nick);
        if(searchedNick.length > 0){
            throw new Error("Nick is already used")
        }
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
            if(searchedEmail.length > 0){
                throw new Error("Email is already used")
            }
        }),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Invalid Password")
    ]
}

const validateLogin = () => {return[ 
    check('email')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (email)=>{
            const searchedEmail = await UserService.checkEmail(email);
            if(searchedEmail.length <= 0)
                throw new Error("Invalid email")
        }),

    check('password')
        .trim()
        .not()
        .isEmpty(),
]}

const validateUpdateUser = () => {return [ 
    check('nick')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Invalid nick")
    .custom(async (nick)=>{
        const searchedNick = await UserService.checkNick(nick);
        if(searchedNick.length > 0)
            throw new Error("Invalid email")
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
            if(searchedEmail.length <= 0)
                throw new Error("Invalid email")
        }),
]}

const validateEmail = () => {return[ 
    check('email')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (email)=>{
            const searchedEmail = await UserService.checkEmail(email);
            if(searchedEmail.length <= 0){
                throw new Error("Invalid email")
            }
        }),
]}

const checkIfEmailExists = () => {return[ 
    check('email')
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (email)=>{
            const searchedEmail = await UserService.checkEmail(email);
            if(searchedEmail.length > 0){
                throw new Error("This user doesn't exist")
            }
        }),
]}

module.exports = { 
    validateCreate,
    validateLogin,
    validateUpdateUser,
    validateEmail,
    checkIfEmailExists
}