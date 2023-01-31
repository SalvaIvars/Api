const mongoose = require('mongoose');

let comentarioSchema = new mongoose.Schema({
    fecha:{
        type: String,
        required: true,
    },
    mensaje:{
        type: String,
        required: true,
    },
    id_usuario:{
        type: Number,
        required: true,
    },
    id_publicacion:{
        type: Number,
        required: true,
    },
});

let Comentario = mongoose.model('Comentario', comentarioSchema);
module.exports = Comentario;