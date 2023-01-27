const Usuario = require("../models/usuarios")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const CommentService = require('../service/commentService')
const errorHandler = require('../helpers/errorHandler')
const UserService = require('../service/userService')
require('dotenv').config()
 
// register
const signUp = async (req, res) => { 
    var duplicate;
    try{
        duplicate = await UserService.findDuplicateUser(req.body.nombre)
        if(duplicate){
            return errorHandler('Username is allready chosen', req, res)
        }
    }catch (e){
        return errorHandler(e, req, res)
    }

    const hashedPwd = await bcrypt.hash(req.body.password, 10)

    const id_usuario = await CommentService.obtainIdPublicacion()

    if(id_usuario.id_usuario == undefined){
        id_usuario.id_usuario=0
    }

    const userDoc =  new Usuario({
        id_usuario: id_usuario.id_usuario+1,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        fecha: req.body.fecha,
        nick: req.body.nick,
        password:hashedPwd,
        siguiendo: req.body.siguiendo,
        foto: req.body.foto,
        rol: req.body.rol
    })

    const accesToken = createAccessToken(userDoc.nombre, userDoc.rol)

    try{
        await UserService.createUser(userDoc)
        res.status(201).send({
            status:'201',
            accessToken: accesToken,
        })
    }catch (e){
        return  errorHandler(e, req, res)
    }
}

// Login
const signIn = async (req, res) => { 
    const {nombre, password} = req.body

    if(!nombre || !password) return errorHandler('Username and password are required.')

    var foundUser;
    try{
        foundUser = await UserService.foundUser(nombre)
        if(foundUser == false){
            return errorHandler('User not found', req, res)
        }
    }catch (e){
        return errorHandler(e, req, res)
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if(match){
        const accessToken = createAccessToken(foundUser.nombre, foundUser.rol)

        res.status(201).send({
            status:'201',
            accessToken: accessToken,
        })
    }else{
        return errorHandler('User/Password incorrect', req, res)
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