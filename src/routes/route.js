const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController= require("../controllers/publisherController")



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );
//router.get('/book',  BookController.getBook  );

// Publisher Api
router.post('/createPublisher',  PublisherController.createPublisher  );
module.exports = router;  