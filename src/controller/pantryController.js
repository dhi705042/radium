const pantryModel = require('../models/pantryModel')
const bucketModel = require('../models/bucketModel')
const mongoose = require('mongoose')
const validate = require('../utils/validate')

const createPantry = async function(req, res){
    try{
        requestBody = req.body;
        if(!validate.isValidRequestBody(requestBody)){
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide pantry details" })
        }

         //Destructuring
         let { name, email } = requestBody;

         //validation starts

         if (!validate.isValid(name)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide name" })
        }

        if (!validate.isValid(email)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide email" })
        }

        if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
            return res.status(400).send({ status: false, message: `Email should be a valid email address` });
        }

        let isEmailAlredyPresent = await pantryModel.findOne({ email: email })

        if (isEmailAlredyPresent) {
            return res.status(400).send({ status: false, message: `Email Already Present` });
        }

        //validation ends
        const updatedBody = { name, email}
        const createPantry = await pantryModel.create(updatedBody)
        res.status(201).send({ status: true, message: 'pantry created successfully', data: createPantry })

    }
    catch(err){
        res.status(500).send({ status: false, msg: err.message })
    }
}

const getPantryDetails = async function (req, res) {
    try {
        const pantryId = req.params.pantryId;
        //validation starts

        if (!validate.isValidObjectId(pantryId)) {
            return res.status(400).send({ status: false, message: "Invalid pantryId in params." })
        }
        if (!validate.isValid(pantryId)) {
            return res.status(400).send({ status: false, message: `${pantryId} is not a valid pantryId or not present ` })

        }
        
        //validation ends

        let pantryDetails = await pantryModel.findOne({ _id: pantryId })
        if (!pantryDetails) {
            return res.status(400).send({
                status: false, message: `User doesn't exists by ${pantryId}`
            })
        }

        const bucketList = await bucketModel.find({pantryId: pantryId})
        let count = bucketList.length;

        pantryDetails = pantryDetails.toObject();
        pantryDetails.bucketList = bucketList;
        pantryDetails.percentFull = count;

        return res.status(200).send({ status: true, message: "Pantry detail found successfully.", data: pantryDetails })
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: "Error is: " + err.message
        })
    }
}

module.exports = {
    createPantry,
    getPantryDetails
}