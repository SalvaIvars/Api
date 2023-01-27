const UserService = require('../service/userService')
const errorHandler = require('../helpers/errorHandler')
 
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

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}