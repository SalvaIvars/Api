const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../images/profilePicture'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    let mimetype = false
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg' || file.mimetype === 'image/jpg'){
        mimetype = true
    }
    if(mimetype) {
        cb(null, true)
    }else{
        cb("Error: File must be an image")
    }
}

module.exports =  multer({
    storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter
}).single('photo')