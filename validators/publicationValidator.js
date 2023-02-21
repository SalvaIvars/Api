const { check } = require('express-validator')
const UserService = require('../service/userService')
const PublicationService = require('../service/publicationService')

const validateCreate = () => {return [ 
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
]}

module.exports = {
    validateCreate,
}