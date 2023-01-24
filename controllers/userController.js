const Usuario = require("../models/usuarios")
const bcrypt = require('bcryptjs')

const getAllUsers = async (req,res) => {
    await Usuario.find((error, info) => {
        if(error){
            res.status(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    }).clone()
}

const getUser = async (req,res) => {
    await Usuario.findById(req.params.id, (err, info) => {
        if(err){
            res.status(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}

const updateUser = async (req, res) => {
        await Usuario.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(204).send({
                status:'204',
                data: info
            })
        }
    })

}

const deleteUser = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id,  (err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{  
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    }).clone()
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}