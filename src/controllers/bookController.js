const bookModel = require("../models/bookModel.js");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");

const mongoose = require("mongoose");

const createBook = async function (req, res) {
  let body = req.body;
  let authorId = req.body.author;
  let publisherId = req.body.publisher;

  //console.log(authorId)
  if(authorId){
    let authorData = await AuthorModel.findById(authorId);
    console.log(authorData)
    if(!authorData){
      res.send(" authorid not valid")
      }
  }else{
    res.send("id not present")
  } 
  if(publisherId){
    let publisherData = await PublisherModel.findById(publisherId);
    console.log(publisherData)
    if(!publisherData){
      res.send("publisherid is not valid")
    } 
  }else{
    res.send("publisher id not present") 
  }


  let savedbook = await bookModel.create(body)
  res.send({msg: savedbook})
  
}
   
const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author', {author_name: 1, _id:1, age:1}).populate('publisher');
  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
//module.exports.getBook = getBook; 

