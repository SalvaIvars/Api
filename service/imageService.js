const mime = require('mime')
const fs = require('fs')

const writeImage = (req, res) => {
    let extension = mime.getExtension(mime.getType(req.body.profilePicturePath))
    let profilePicture = req.body.user_id + '.' + extension;
    let profilePicturePath = __dirname+'/../images/profilePicture/' + profilePicture ;
    let buffer = Buffer.from(req.body.profilePicture, 'base64');

    fs.writeFileSync(profilePicturePath, buffer);
    return profilePicture;
}

const readImage = (file)  => {
    var bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString('base64');
}

module.exports = {
    writeImage,
    readImage
}

