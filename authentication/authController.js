const Usuario = require("../models/usuarios")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
 
// register
const signUp = async (req, res) => { 
    const {nombre, password} = req.body

    if(!nombre || !password) return res.status(400).json({message:'Username and password are required.'})

    const duplicate = await Usuario.findOne({"nombre":nombre}, (err, info) => {
        if(err){
            res.sendStatus(400)
        }else{ 
            return info
        }
    }).clone()

    if(duplicate != null)  return res.status(409).json({message:'Username is allready chosen'})

    const hashedPwd = await bcrypt.hash(password, 10)

    const id_usuario = await Usuario.find().sort({"id_usuario":-1}).limit(1)

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
        web: req.body.web,
        rol: req.body.rol
    })

    const accesToken = createAccessToken(userDoc.nombre, userDoc.rol)

    userDoc.save((err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:err})
        }else{
            res.status(201).send({
                status:'201',
                accessToken: accesToken,
            })
        }
    })
}

// Login
const signIn = async (req, res) => { 
    const {nombre, password} = req.body

    if(!nombre || !password) return res.status(400).json({message:'Username and password are required.'})

    const foundUser = await Usuario.findOne({"nombre":nombre}, (err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:err})
        }else{ 
            return info 
        }
    }).clone()

    if(foundUser == null)  return res.status(401).json({message:'User not found'})

    const match = await bcrypt.compare(password, foundUser.password)

    if(match){
        const accessToken = createAccessToken(foundUser.nombre, foundUser.rol)
        console.log("access:" + accessToken)
        res.status(201).send({
            status:'201',
            accessToken: accessToken,
        })
    }else{
        res.status(401).json({
            message: 'User/Password incorrect'
        })
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