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

const updateUser = async(email, data) => {
    const filter = { email: email };
    const responseUser = await User.findOneAndUpdate(filter, data)
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
    console.log("email " + name)
    const responseUser = await User.updateOne({"email":email}, {$set: {"photo":name}})
    if(responseUser != null){
        return true
    }else{
        return false
    }
}

const removePhotoUser = async(email) => {
    const responseUser = await User.updateOne({"email":email}, {$set: {"photo":""}})
}

const getFollowers = async(email) => {
    const responseUser = await User.find({"following": email})
    return responseUser
}

const checkIfUserFollowsThisUser = async(email, emailToFollow) => {
    const responseUser = await User.find({"email":email},{"following": { $elemMatch: {$eq: emailToFollow}}})
    let result = false;
    responseUser.forEach((elem)=> { 
        if(elem.following.includes(emailToFollow)){
            result = true
        }else{
            result = false
        }
    })
        
    if(result){
        return true
    }
    return false
}

const followUser = async(email, emailToFollow) => {
    const responseUser  = await User.updateOne({"email":email}, {$push:{"following":emailToFollow}} )
    if(responseUser!=null){
        return true
    }
    return false
}

const unfollowUser = async(email, emailToUnfollow) => {
    const responseUser = await User.updateOne({"email":email}, {$pull:{"following":emailToUnfollow}})
    if(responseUser!=null){
        return true
    }
    return false
}

const getUsersFollowUser = async(email) =>{
    const responseUser = await User.find({"following": { $elemMatch: {$eq: email}}})
    return responseUser
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
    updateUserPhoto,
    removePhotoUser,
    getFollowers,
    followUser,
    checkIfUserFollowsThisUser,
    unfollowUser,
    getUsersFollowUser
}