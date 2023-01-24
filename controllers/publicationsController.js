const rutaSchema = require("../models/ruta")

const getAllRoutes = async (req, res) =>  {
    await rutaSchema.find((err, info) => {
        if (err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    }).clone()
}

const getRoute = async (req, res) => {
    await rutaSchema.findById(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}

const deleteRoute = async (req, res) => {
    await rutaSchema.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(201).send({
                status:'201',
                data: info
            })
        }
    })
}
const createRoute = async (req, res) => {
    const id_publicacion = await rutaSchema.find().sort({"id_publicacion":-1}).limit(1)


    if(id_publicacion == undefined){
        id_publicacion.id_publicacion = 0;
    }

    const rutaGuardar = new rutaSchema({
        id_publicacion: id_publicacion.id_publicacion+1,
        id_usuario: req.body.id_usuario,
        fecha: req.body.fecha,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        distancia: req.body.distancia,
        dificultad: req.body.dificultad,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion, 
        foto: req.body.fotos,
        privacidad: req.body.privacidad,
    })
    
    await rutaGuardar.save((err, info) =>{
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(201).send({
                status:'201',
                data: info
            })
        }
    })
}

const updateRoute = async (req, res) => {
    await rutaSchema.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}

module.exports = {
    getAllRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute,
}