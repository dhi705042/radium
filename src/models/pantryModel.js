const mongoose = require('mongoose')

const pantrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    discription:{
        type: String,
        default: "Good Pantry"
    },
    errors: {
        type: Array
    }, 
    notifications:{
        type: Boolean,
        default: true
    },
    percentFull:{
        type: Number,
        default: 0
    }

}, { timestamps: true })

module.exports = mongoose.model('Pantry', pantrySchema)  