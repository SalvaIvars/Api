const User = require("../models/User")
const Route = require("../models/Route")

const getUser = async(email) => {
    const responseUser = await User.find({"email": email})
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

const deleteUser = async(email) => {
    const responseUser = await User.findOneAndDelete({"email":email})
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
    const responseUser = await Route.find({"email":email})
    return responseUser
}

const updateUserPhoto = async(email, name) => {
    const responseUser = await User.updateOne({"email":email}, {$set: {"photo":name}})
    if(responseUser != null){
        return true
    }else{
        return false
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
    checkEmail,
    checkNick,
    foundUserByEmail,
    obtainUserPublications,
    updateUserPhoto
}