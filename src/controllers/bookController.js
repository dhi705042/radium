const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")


// Creations 
const createBooks= async function (req, res) {
    var data= req.body
    if (data.author_id){
        let savedData= await BookModel.create(data) 

        res.send({msg: savedData})    

    }    

}


const getAllBooks= async function (req, res) {
    let books = await AuthorModel.find({author_name: "chetan bhagat"}).select({"author_id": 1})
    console.log(books)
    const a = books[0].author_id;

    let booksByChatanBhagat = await bookModel.find({author_id: a}).select({name: 1})
   // console.log(a)

    res.send(booksByChatanBhagat)
}

const authorTwoStates = async function (req, res) {
    let all = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{"price": 100}}).select({"author_id": 1, price: 1});
    let id = all.author_id;
    let price = all.price;
    console.log(price)

    let author = await AuthorModel.findOne({author_id: id}).select({author_name: 1, price:100, _id: 0})
    // let name = author[0].author_name

    res.send({author, price})
}

const costOfBook = async function(req, res){
    let booksWithPrice = await BookModel.find({price:{$gte: 50, $lte: 100}})//.select({author_id: 1})
     
    let arr = [];
    for (let i = 0; i<booksWithPrice.length; i++){
        console.log(booksWithPrice[i])
         arr.push(booksWithPrice[i].author_id)
        // console.log(arr)
    }
    console.log(arr)
      let auth = []
    for(let j = 0; j<arr.length; j++){
        let index = arr[j];
        let authorName = await AuthorModel.find({author_id: index}).select({author_name: 1})
        console.log(authorName)
        auth.push(authorName)
    }

    res.send(auth)
} 



module.exports.createBooks = createBooks



 module.exports.getAllBooks = getAllBooks
 module.exports.authorTwoStates = authorTwoStates
 module.exports.costOfBook = costOfBook