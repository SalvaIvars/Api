const { check } = require('express-validator')
const errorHandler = require('../helpers/errorHandler')
const UserService = require('../service/userService')
const PublicationService = require('../service/publicationService')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ 
    check('message')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Invalid message"),

    check('date')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Invalid date"),

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

    check('id_publication')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Invalid id_publication")
        .custom(async (id_publication)=>{
            const exists = await PublicationService.checkIfIdPublicationExists(id_publication);
            if(!exists)
                return errorHandler("Id_publication doesn't exist", req, res)
        }),
        
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreate
}
