const User = require("../models/User")
const Route = require("../models/Route")

const getUser = async(id) => {
    const responseUser = await User.findById({_id: id})
    return responseUser
}

const getAllUsers = async() => {
    const responseUser = await User.find()
    return responseUser
}

const updateUser = async(id, data) => {
    const responseUser = await User.findByIdAndUpdate(id, data)
    return responseUser
}

const deleteUser = async(id) => {
    const responseUser = await User.findByIdAndDelete(id)
    return responseUser
}

const findDuplicateUser = async(nombre) => {
    const responseUser =  await User.findOne({"name":nombre})
    if(responseUser == null){
        return false
    }else{
        return true
    }
}

const foundUser = async(nombre) => {
    const responseUser =  await User.findOne({"name":nombre})
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

const obtainIdPublication = async() => {
    const responseUser = await User.find().sort({"id_user":-1}).limit(1)
    return responseUser
}

const obtainIdUserEmail = async(email) => {
    const responseUser = await User.findOne({"email":email})
    return responseUser.id_user
}

const checkEmail = async(email) => {
    const responseUser =  await User.findOne({"email":email})
    if(responseUser == null){
        return ""
    }else{
        return responseUser.email
    }
}

const checkNick = async(nick) => {
    const responseUser = await User.findOne({"nick":nick})
    if(responseUser == null){
        return ""
    }else{
        return responseUser.nick
    }
}

const foundUserByEmail = async(email) => {
    const responseUser = await User.findOne({"email":email})
    if(responseUser == null){
        return false
    }else{
        return responseUser
    }
}

const obtainUserPublications = async(email) => {
    const id_user = await obtainIdUserEmail(email)
    const responseRoute = await Route.find({"id_user":id_user})
    return responseRoute
}

const checkIfIdUserExists = async(id) => {
    const exists = await User.find({"id_user":id})
    if(exists == null){
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
    obtainIdPublication,
    checkEmail,
    checkNick,
    foundUserByEmail,
    obtainUserPublications,
    checkIfIdUserExists
}