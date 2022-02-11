 const mongoose = require('mongoose')
 let schematype ='String';

const bucketSchema = new mongoose.Schema({

     posts: mongoose.Schema.Types.Mixed,
   
    bucketName: {
        type: String,
        unique: true,
        trim: true,
    },
    pantryId: {
        type: mongoose.Schema.Types.ObjectId
    },
    ttl: {
        type: Number
    }

})
module.exports = mongoose.model('Bucket', bucketSchema)  