const Usuario = require("../models/usuarios")

const getUser = async(id) => {
    const responseUser = await Usuario.findById({_id: id})
    return responseUser
}

const getAllUsers = async() => {
    const responseUser = await Usuario.find()
    return responseUser
}

const updateUser = async(id, data) => {
    const responseUser = await Usuario.findByIdAndUpdate(id, data)
    return responseUser
}

const deleteUser = async(id) => {
    const responseUser = await Usuario.findByIdAndDelete(id)
    return responseUser
}

const findDuplicateUser = async(nombre) => {
    const responseUser =  await Usuario.findOne({"nombre":nombre})
    if(responseUser == null){
        return false
    }else{
        return true
    }
}

const foundUser = async(nombre) => {
    const responseUser =  await Usuario.findOne({"nombre":nombre})
    if(responseUser == null){
        return false
    }else{
        return responseUser
    }
}

const createUser = async (body) => {
    const responseUser = await body.save()
    return responseUser
}

const obtainIdPublicacion = async() => {
    const responseUser = await Usuario.find().sort({"id_usuario":-1}).limit(1)
    return responseUser
}

const checkEmail = async(email) => {
    const responseUser =  await Usuario.findOne({"nombre":nombre})
    if(responseUser == null){
        return false
    }else{
        return true
    }
}

module.exports = {
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    findDuplicateUser,
    createUser,
    foundUser,
    obtainIdPublicacion,
    checkEmail
}