const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id_user: {
        type: Number,
        trim: true,
        required: true,
    },
    name:{
        type: String,
        trim: true,
        required: true,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    date:{
        type: String,
    },
    nick:{
        type: String,
        required: true,
        trim: true,
    },
    password:{        
        type: String,
        required: true,
    },
    following:[{
        type: String,
    }],
    photo:{
        type: String,
    },
    rol:{
        type: String,
        default: "user"
    },
})  


let User = mongoose.model('User', userSchema);
module.exports = User;