const Usuario = require("../models/usuarios")
const RefreshToken = require("../models/refreshToken")
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

    const refreshTokenDoc = new RefreshToken({
        id: userDoc._id,
    })

    await refreshTokenDoc.save()
   
    const refreshToken = createRefreshToken(userDoc.nombre, userDoc.rol, refreshTokenDoc.id)
    const accesToken = createAccessToken(userDoc.nombre, userDoc.rol)

    userDoc.save((err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(201).send({
                status:'201',
                accessToken: accesToken,
                refreshToken: refreshToken,
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
            res.sendStatus(400).send({status:'400', data:error})
        }else{ 
            return info 
        }
    }).clone()

    if(foundUser == null)  return res.status(401).json({message:'User not found'})

    const match = await bcrypt.compare(password, foundUser.password)

    if(match){

        const refreshTokenDoc = await new RefreshToken({
            id: foundUser._id,
        })

        await refreshTokenDoc.save()

        const accessToken = createAccessToken(foundUser.nombre, foundUser.rol)
        const refreshToken = createRefreshToken(foundUser.nombre, foundUser.rol,refreshTokenDoc.id)
        console.log(" a " + accessToken)
        res.status(201).send({
            status:'201',
            accessToken: accessToken,
            refreshToken: refreshToken,
        })
    }else{
        res.status(401).json({
            message: 'User/Password incorrect'
        })
    }
}

const newRefreshToken = async (req, res) => {
    const currentRefreshToken = await validateRefreshToken(req.body.refreshToken);
    const refreshTokenDoc =  new RefreshToken({
        owner: currentRefreshToken.id
    })

    await refreshTokenDoc.save()
    await RefreshToken.deleteOne({_ID: currentRefreshToken.id})

    const accessToken = createAccessToken(currentRefreshToken.nombre, currentRefreshToken.rol)
    const refreshToken = createRefreshToken(currentRefreshToken.nombre, currentRefreshToken.rol,currentRefreshToken.id)

    res.status(201).send({
        status:'201',
        accessToken: accessToken,
        refreshToken: refreshToken,
    })
}

const newAccessToken = async (req, res) => {
    const currentRefreshToken = await validateRefreshToken(req.body.refreshToken);
    const accessToken = createAccessToken(currentRefreshToken.id)

    res.status(201).send({
        status:'201',
        accessToken: accessToken,
        refreshToken: req.bod.refreshToken,
    })
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

function createRefreshToken(nombre, rol, token){
    return refreshToken = jwt.sign({
        "nombre": nombre,
        "rol": rol,
        tokenId: token,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:'1d' }
    )
}

const validateRefreshToken = async (token) => {
    const decodeToken = () => {
        try {
            return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
        } catch(err){
            // TODO
            console.log(err)
            return err
        }
    }

    const decodedToken = decodedToken()
    const tokenExists = await RefreshToken.exists({_id: decodeToken.id})
    if(tokenExists){
        return decodedToken
    }else{
        console.log(err)
    }
}

const logout = async (req, res, session) => {
    const refreshToken = await validateRefreshToken(req.body.refreshToken);
    await models.RefreshToken.deleteOne({_id: refreshToken.tokenId});
    return {success: true};
}

const logoutAll = async (req, res, session) => {
    const refreshToken = await validateRefreshToken(req.body.refreshToken);
    await models.RefreshToken.deleteMany({owner: refreshToken.id});
    return {success: true};
};


module.exports = {
    signUp,
    signIn,
    newRefreshToken,
    newAccessToken,
    logout,
    logoutAll
}