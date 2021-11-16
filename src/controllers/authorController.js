const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")


const createAuthors= async function (req, res) {
    var data= req.body
    if (data.author_id){
        let savedData= await AuthorModel.create(data) 

        res.send({msg: savedData})    
    }

}

module.exports.createAuthors = createAuthors