const errorHandler = require('../helpers/errorHandler');
const uploadImage = require('../service/profilePictureService')
const uploadPublicationImages = require('../service/publicationPictureService')

const uploadProfilePicture = (req, res, next) => {
    uploadImage(req, res,
        (error) => {
            if (!error) {
                return next();
            }
            return errorHandler(error, req, res);
        }
    )
}

const uploadPublicationPictures = (req, res, next) => {
    uploadPublicationImages(req, res,
        (error) => {
            if (!error) {
                return next();
            }
            return errorHandler(error, req, res);
        }
    )
}

module.exports = {
    uploadProfilePicture,
    uploadPublicationPictures
}