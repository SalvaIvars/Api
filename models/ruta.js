const mongoose = require('mongoose');

let rutaSchema = new mongoose.Schema({
    id_usuario: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
    },
    nombre: {
        type: String,
    },
    categoria: {
        type: String,
        default: 'escalada',
    },
    distancia: {
        type: Number,
    },
    dificultad: {
        type: String,
        enum: ['facil', 'media', 'dificil'],
        
    },
    duracion: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
    foto: {
        type: String,
    },
    privacidad: {
        type: String ,
    },
    empresa: {
        type: String,
    
    },
    url: {
        type: String,
    }
});

let rutaColl = mongoose.model('Ruta', rutaSchema);
module.exports = rutaColl;