const UserService = require('../service/userService')
const errorHandler = require('../helpers/errorHandler')
const path = require('path')
const { readdir } = require('fs/promises');

const getAllUsers = async (req,res) => {
    try{
        const response = await UserService.getAllUsers()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const getUser = async (req,res) => {
    try{
        const response = await UserService.getUser(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const updateUser = async (req, res) => {
    try{
        const response = await UserService.updateUser(req.params.id, req.body)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const deleteUser = async (req, res) => {
    try{
        const response = await UserService.deleteUser(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const getProfilePicture =  (req, res) => {
    let dir = path.join(__dirname, '/../images/profilePicture/')
    findByExtension(dir).then((files) => {
        dir = path.join(dir, files[0])
        res.sendFile( dir)
    });
}

const findByExtension = async (dir) => {
    const matchedFiles = [];
    const extensions = ['PNG','png', 'jpg','jpeg','jpg','svg']
    const files = await readdir(dir);

    for (const file of files) {

        const fileExt = path.extname(file);
        for(const ext in extensions){
            if (fileExt === `.${extensions[ext]}`) {
                matchedFiles.push(file);
            }
        }
    }

    return matchedFiles;
};

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfilePicture
}