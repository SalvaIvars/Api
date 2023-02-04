const imageUtils = require('../utils/imageUtils')
const path = require('path')
const fs = require('fs')
const errorHandler = require('../helpers/errorHandler')

const delteRouteImages = async(id_publication,req,res) => {
    let dir = path.join(__dirname, '/../images/publicationPicture/'+id_publication+'/')
    
    if(fs.existsSync(dir)){
        try{
            await imageUtils.findByExtension(dir, id_publication).then((files) => {
                if(files.length == 0){
                    return errorHandler("error", req, res);
                }

                for(const file in files){
                    dir = path.join(dir,files[file])
                    fs.unlink(dir, (err) => {
                        if (err) {
                            return errorHandler(err, req, res);
                        }
                    })
                    dir = path.join(__dirname, '/../images/publicationPicture/'+id_publication+'/')
                }

                fs.rmdir(dir, (err) => {
                    if (err) {
                        return errorHandler(err.message, req, res);
                    }
                })

                res.status(200).send({
                    status:'200',
                    data: "Images deleted"
                })
            })
        }catch(e){
            return;
        }
    }
}

module.exports = {
    delteRouteImages
}