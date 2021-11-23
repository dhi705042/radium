const express = require('express');
const router = express.Router();
const ProductController= require("../controllers/productController")
const UserController= require("../controllers/userController")
const mWare = require("../middlewares/myMiddleware")
const OrderController = require("../controllers/orderController")


// router.post('/test-me', function (req, res, next) {    
//     console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
//     let host = req.headers['host']
//     let hostWithName = host + " " + "Sabiha Khan"
//     console.log('My response headers: '+res.getHeaderNames())
//     res.setHeader('hostWithName', hostWithName)
//     //res.send({data: 'I was in the handler'})
//     res.finalData = {data: 'I was in the handler'}
//     next()
// });

router.post('/products', mWare.headers,ProductController.createProduct)
router.post('/user', mWare.headers, UserController.createUser)
router.post('/order',mWare.headers, OrderController.createOrder )



module.exports = router; 