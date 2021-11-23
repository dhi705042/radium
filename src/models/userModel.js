const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        unique: true
    },
    
    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    passward: {
        type: String,
        require: true
    },
    isDeleted: {
        type: Boolean,
           default: false
    }

}, {timestamps: true} )

module.exports = mongoose.model( 'userdata', userSchema )  