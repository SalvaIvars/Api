const Usuario = require("../models/usuarios")
const bcrypt = require('bcryptjs')

const getAllUsers = (req,res) => {
    Usuario.find((error, info) => {
        if(error){
            res.status(400)
        }else{
            res.status(200).json({
                status:'ok',
                data:info
            })
        }
    })
}

const getUser = (req,res) => {
    Usuario.findById(req.params.id, (err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json({
                status:'ok',
                data: info,
            })
        }
    })
}

const createUser = async (req, res) => {

    const {nombre, password} = req.body

    if(!nombre || !password) return res.status(400).json({message:'Username and password are required.'})


    const duplicate = await Usuario.findOne({"nombre":nombre}, (err, info) => {
        if(err){
            res.status(400)
        }else{ 
            return info
        }
    }).clone()

    if(duplicate != null)  return res.status(409).json({message:'Username is allready chosen'})

    const hashedPwd = await bcrypt.hash(password, 10)

    const usuarioGuardar = await new Usuario({
        id_usuario: req.body.id_usuario,
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


    usuarioGuardar.save((err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(201).json({
                status: 'ok',
                message: 'New user created!',
                data: info
            })
        }
    })
}

const updateUser = (req, res) => {
        Usuario.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.status(400)
        }else{
            res.status(204).json({
                status:'ok'
            })
        }
    })

}

const deleteUser = (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json({
                status: 'ok',
                data: info
            })
        }
    })
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser
}