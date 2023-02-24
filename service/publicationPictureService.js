const multer = require('multer');
const path = require('path')
const imageUtils = require('../utils/imageUtils')
const fs = require('fs')
const fsExtra = require('fs-extra');

const filename = async (req, file, cb) => {
    if(req.body.id_publication == null){
        return cb("Error uploading image")
    }

    const publicationPath = path.join(__dirname,'/../images/publicationPicture/'+req.body.id_publication+'/')
    let nFiles =  await imageUtils.getNumberOfFiles(publicationPath)

    if(nFiles >= 10 ){
        return cb("Photos limit reached")
    }

    cb(null, `${req.body.id_publication}_${nFiles}${path.extname(file.originalname)}`)
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
    const publicationPath = path.join(__dirname,'/../images/publicationPicture/'+req.body.id_publication+'/')

    try {
        if(fs.existsSync(publicationPath)){
            //let nFiles = await imageUtils.getNumberOfFiles(publicationPath)
            //fsExtra.emptyDirSync(publicationPath);
        }
        else{
            fs.mkdir(publicationPath,(err) => {
                if (err) {
                    return cb(err.message);
                }
            })
        }
    } catch(e) {
        return cb(e.message)
    }

    cb(null,publicationPath)
}

const storage = multer.diskStorage({
    destination: destination,
    filename: filename
})

module.exports =  multer({
    storage:storage,
    limits: {
        fileSize: 100000000
    },
    fileFilter:fileFilter
}).array('photo',10)