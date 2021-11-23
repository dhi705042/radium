const express = require('express');

const router = express.Router();

const UserController= require("../controllers/userController")
const tokenMidd = require("../middleware/tokenMiddleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;


router.post('/users', UserController.createUser)
router.post('/login', UserController.loginUser)
router.get('/users/:userId', tokenMidd.mytoken, UserController.userDetails) 
router.put('/users/:userId', tokenMidd.mytoken, UserController.userUpdate) 