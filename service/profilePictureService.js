const multer = require('multer');
const path = require('path');
const imageUtils = require('../utils/imageUtils')
const fs = require('fs')

const filename = (req, file, cb) => {
    if(req.body.email == null){
        return cb("Error uploading image")
    }

    cb(null, `${req.body.email}${path.extname(file.originalname)}`)
}

const fileFilter = (req, file, cb) => {
    let mimetype = false
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg' || file.mimetype === 'image/jpg'){
        mimetype = true
    }
    if(mimetype) {
        cb(null, true)
    }else{
        return cb("Error: File must be an image")
    }
}

const destination = async (req, file, cb) => {
    let profilePicturePath = path.join(__dirname,'/../images/profilePicture/')
    let files = await imageUtils.findByExtension(profilePicturePath, req.body.email)
    if(files.length > 0){
        let pictureDelete = path.join(profilePicturePath, files[0])
        fs.unlink(pictureDelete, (err) => {
            if (err) {
                return errorHandler(err.message, req, res);
            }
        })
    }
    cb(null, profilePicturePath)
}
const storage = multer.diskStorage({
    destination: destination,
    filename: filename
})

module.exports =  multer({
    storage:storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: fileFilter
}).single('photo')

