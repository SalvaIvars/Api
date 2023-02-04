const errorHandler = require('../helpers/errorHandler');
const uploadImage = require('../service/profilePictureService')

module.exports = (req, res, next) => {
    uploadImage(req, res,
        (error) => {
            if (!error) {
                return next();
            }
            return errorHandler(error, req, res);
        }
    )
}