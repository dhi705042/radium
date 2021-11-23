const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema= new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    
    balance: {
        type: Number,
        default: 100
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "LGBTQ"]
    },
    freeAppUser: {
        type: Boolean,
        required: true,
        default: false
    }


}, {timestamps: true} )

module.exports = mongoose.model( 'User', userSchema ) 