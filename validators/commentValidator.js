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

    check('id_user')
        .trim()
        .not()
        .isEmpty()
        .withMessage("Invalid id_user")
        .custom(async (id_user)=>{
            const exists = await UserService.checkIfIdUserExists(id_user);
            if(!exists)
                return errorHandler("Id_user doesn't exist", req, res)
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
