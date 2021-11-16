const express = require('express');

const router = express.Router();

const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel.js")

const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthors',  AuthorController.createAuthors  );
 
router.post('/createBooks',  BookController.createBooks  );
router.get('/getAllBooks', BookController.getAllBooks)
router.put('/authorTwoStates', BookController.authorTwoStates)
router.get('/costOfBook', BookController.costOfBook)





module.exports = router;


