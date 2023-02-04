const multer = require('multer');
const path = require('path');

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'/../images/profilePicture/'))
    },
    filename: filename
})

module.exports =  multer({
    storage:storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: fileFilter
}).single('photo')

