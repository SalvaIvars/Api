const rutaSchema = require("../models/ruta")

const getAllRoutes = (req, res) =>  {
    rutaSchema.find((err, info) => {
        if (err){
            res.sendStatus(400)
        }else{
            res.status(200).json(
                info,
            );
        }
    })
}

const getRoute = (req, res) => {
    rutaSchema.findById(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400)
        }else{
            res.status(200).json(
               info
            )
        }
    })
}

const deleteRoute = (req, res) => {
    rutaSchema.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400)
        }else{
            res.status(201).json(
                 info
            )
        }
    })
}
const createRoute = (req, res) => {
    const rutaGuardar = new rutaSchema({
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
        empresa: req.body.empresa,
        url: req.body.url,
    })
    rutaGuardar.save((err, info) =>{
        if(err){
            res.sendStatus(400)
        }else{
            res.status(201).json( 
                info
            )
        }
    })
}

const updateRoute = (req, res) => {
    rutaSchema.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.sendStatus(400)
        }else{
            res.status(200).json({
                status: 'ok',
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