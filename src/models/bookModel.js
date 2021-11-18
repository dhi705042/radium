const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    price: Number,
    address: String,
    publisher: {
        type: ObjectId,
        ref: 'Publisher'
    }


}, {timestamps: true} )

module.exports = mongoose.model( 'myBookk', bookSchema ) 

