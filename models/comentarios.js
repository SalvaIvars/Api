const mongoose = require('mongoose');

let comentarioSchema = new mongoose.Schema({
    fecha:{
        //type: Date,
        type: String,
        required: true,
    },
    mensaje:{
        type: String,
        required: true,
    },
    id_usuario:{
        type: String,
        required: true,
    },
    id_publicacion:{
        type: String,
        required: true,
    },
});

let Comentario = mongoose.model('Comentario', comentarioSchema);
module.exports = Comentario;