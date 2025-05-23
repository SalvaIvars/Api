const User = require("../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const errorHandler = require('../helpers/errorHandler')
const UserService = require('../service/userService')
require('dotenv').config()

const saltRounds = 10; 
const MAX_LOGIN_ATTEMPTS = 3;
const LOCK_TIME = 3 * 60 * 1000;
 
// register
const signUp = async (req, res) => { 
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)

    const userDoc =  new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        date: req.body.date,
        nick: req.body.nick,
        password:hashedPwd,
        following: req.body.following,
        photo: req.body.photo,
        rol: req.body.rol,
        description: req.body.description
    })

    const accesToken = createAccessToken(userDoc.nombre, userDoc.rol)

    try{
        await UserService.createUser(userDoc)
        res.status(201).send({
            status:'201',
            accessToken: accesToken,
            id: userDoc._id,
        })
    }catch (e){
        return  errorHandler(e, req, res)
    }
}

// Login
const signIn = async (req, res) => { 
    const {email, password} = req.body

    var foundUser;
    try{
        foundUser = await UserService.foundUserByEmail(email)
        if(foundUser == false){
            return errorHandler('User not found', req, res)
        }
    }catch (e){
        return errorHandler(e, req, res)
    }
    let ahora = Date.now();
    let isLocked = foundUser.lockUntil && foundUser.lockUntil > ahora
    let hasLockExpired = foundUser.lockUntil && foundUser.lockUntil < ahora
    let loginAttempts = foundUser.loginAttempts;

    if(isLocked){
        res.status(403).send({
            status:'403',
            data:'Superado el número máximo de intentos'
        })
    }else{
        if(hasLockExpired){
            await foundUser.updateOne({ $set: { loginAttempts: 0 }, $unset: { lockUntil: 1 } });
            loginAttempts = 0
        }
        const match = await bcrypt.compare(password, foundUser.password)

        if(match){
            if(loginAttempts>0){
                await foundUser.updateOne({ $set: { loginAttempts: 0 }, $unset: { lockUntil: 1 } })        }
            const accessToken = createAccessToken(foundUser.name, foundUser.rol)
            res.status(201).send({
                status:'201',
                accessToken: accessToken,
                id: foundUser._id
            })
        }else{
            var updates = { $inc: { loginAttempts: 1 } };
            if (loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS) {
            updates.$set = { lockUntil: Date.now() + LOCK_TIME };
            }
            await foundUser.updateOne(updates);
            return errorHandler('Email/Password incorrect', req, res)
        }
    }
}

function createAccessToken(nombre, rol){
    return accessToken = jwt.sign({
        "nombre": nombre,
        "rol": rol
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'1d' }
    )
}

module.exports = {
    signUp,
    signIn,
}