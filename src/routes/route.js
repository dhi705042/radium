const express = require('express');

const router = express.Router();

const pantryController = require('../controller/pantryController')
const bucketController = require('../controller/bucketController')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/pantry/createPantry', pantryController.createPantry )
router.get('/pantry/:pantryId', pantryController.getPantryDetails )
router.post('/pantry/:pantryId/basket/:bucketName', bucketController.createBucket)
router.put('/pantry/:pantryId/basket/:bucketName', bucketController.updateBucket)
router.get('/pantry/:pantryId/basket/:bucketName', bucketController.getBasketDetail)
router.delete('/pantry/:pantryId/basket/:bucketName', bucketController.deleteBasket)

module.exports = router; 
