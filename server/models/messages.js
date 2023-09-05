const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const messageSchema = new Schema ({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    personTitle:{
        type: String,
        enum: ['Client', 'Collaborator', 'Simply Interested'],
        required: true,
    },
    message:{
        type: String,
        required: true,
        default: ""
    },
})

const Message =mongoose.model('message', messageSchema);

module.exports = Message;
