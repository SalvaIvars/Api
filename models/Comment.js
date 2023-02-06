const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    id_publication:{
        type: String,
        required: true,
    },
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;