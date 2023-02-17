const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
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
        unique: true,
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
    fav_routes:[{
        type:String
    }],
    description:{
        type: String
    }
})  


let User = mongoose.model('User', userSchema);
module.exports = User;