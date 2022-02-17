const bucketModel = require('../models/bucketModel')
const pantryModel = require('../models/pantryModel')
const mongoose = require('mongoose')
const validate = require('../utils/validate')

const createBucket = async function (req, res) {
    try {

        let pantryId = req.params.pantryId;
        let bucketName = req.params.bucketName;
        let requestBody = req.body;
        console.log(requestBody)

        if (!validate.isValid(pantryId)) {
            return res.status(400).send({ status: false, message: `${pantryId} is not a valid pantryId or not present ` })

        }

        if (!validate.isValidObjectId(pantryId)) {
            return res.status(400).send({ status: false, message: "Invalid pantryId in params." })
        }

        const isPantryPresent = await pantryModel.findById({ _id: pantryId })
        if (!isPantryPresent) {
            return res.status(400).send({ status: false, message: `pantry with ${pantryId} does not exist ` })
        }

        if (!validate.isValid(bucketName)) {
            return res.status(400).send({ status: false, message: `${bucketName} is not provided ` })

        }

        existingBucketName = await bucketModel.findOne({ bucketName: bucketName, pantryId: pantryId })
        if (existingBucketName) {
            existingBucketName.store = requestBody.store;
            const replaceBucket = await bucketModel.create(existingBucketName)
            return res.status(200).send({ status: true, message: 'bucket replaced successfully', data: replaceBucket })
        }
        let ttl = Math.floor(Date.now() / 1000)
        requestBody.ttl = ttl;
        requestBody.pantryId = pantryId;
        requestBody.bucketName = bucketName;

        const createBucket = await bucketModel.create(requestBody)

        const BucketList = await bucketModel.find({ pantryId: pantryId })
        let count = BucketList.length;

        let filter = {
            percentFull: count
        }

        await pantryModel.findByIdAndUpdate({ _id: pantryId }, filter, { new: true })

        res.status(201).send({ status: true, message: 'bucket created successfully', data: createBucket })

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const updateBucket = async function (req, res) {
    try {
        let requestBody = req.body;
        let pantryId = req.params.pantryId;
        let bucketName = req.params.bucketName;

        if (!validate.isValid(pantryId)) {
            return res.status(400).send({ status: false, message: `${pantryId} is not a valid pantryId or not present ` })

        }

        if (!validate.isValidObjectId(pantryId)) {
            return res.status(400).send({ status: false, message: "Invalid pantryId in params." })
        }

        const isPantryPresent = await pantryModel.findById({ _id: pantryId })
        if (!isPantryPresent) {
            return res.status(400).send({ status: false, message: `pantry with ${pantryId} does not exist ` })
        }

        if (!validate.isValid(bucketName)) {
            return res.status(400).send({ status: false, message: `${bucketName} is not provided ` })

        }

        let bucketDetails = await bucketModel.findOne({ bucketName: bucketName, pantryId: pantryId })
        if (!bucketDetails) {
            return res.status(400).send({ status: false, message: `${bucketName} does not exist with this pantry` })
        }
        let obj = bucketDetails.posts;

        let index = Object.keys(requestBody)

        let values = Object.values(requestBody)

        for (let i = 0; i < index.length; i++) {


            if (obj.hasOwnProperty(index[i])) {
                obj[index[i]] = values[i]

            } else {
                obj[index[i]] = values[i]
            }

        }
        const bucket = await bucketModel.findOneAndUpdate({ bucketName: bucketName }, { posts: obj }, { new: true })
        return res.status(201).send({ status: true, message: 'bucket updated successfully', data: bucket })


    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const getBasketDetail = async function (req, res) {
    try {
        let pantryId = req.params.pantryId;
      //  console.log(pantryId)
        let bucketName = req.params.bucketName;

        if (!validate.isValidObjectId(pantryId)) {
            return res.status(400).send({ status: false, message: "Invalid pantryId in params." })
        }
        if (!validate.isValid(pantryId)) {
            return res.status(400).send({ status: false, message: `${pantryId} is not a valid pantryId or not present ` })

        }

        const isPantryPresent = await pantryModel.findById({ _id: pantryId })
       // console.log(isPantryPresent)
        if (!isPantryPresent) {
            return res.status(400).send({ status: false, message: `pantry with ${pantryId} does not exist ` })
        }

        if (!validate.isValid(bucketName)) {
            return res.status(400).send({ status: false, message: `${bucketName} is not provided ` })

        }

        let existingBucketdata = await bucketModel.findOne({ bucketName: bucketName, pantryId: pantryId })
        if (!existingBucketdata) {
            return res.status(400).send({ status: false, message: ` ${bucketName} does not exist ` })

        }

        return res.status(201).send({ status: true, message: 'bucket fetched successfully', data: existingBucketdata })

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteBasket = async function (req, res) {
    try {

        let pantryId = req.params.pantryId;
       // console.log(pantryId)
        let bucketName = req.params.bucketName;
       // console.log(bucketName)

        if (!validate.isValid(pantryId)) {
            return res.status(400).send({ status: false, message: `${pantryId} is not a valid pantryId or not present ` })

        }

        if (!validate.isValidObjectId(pantryId)) {
            return res.status(400).send({ status: false, message: "Invalid pantryId in params." })
        }


        const isPantryPresent = await pantryModel.findById({ _id: pantryId })

        if (!isPantryPresent) {
            return res.status(400).send({ status: false, message: `pantry with ${pantryId} does not exist ` })
        }
        let name = isPantryPresent.name;
      //  console.log(name)

        if (!validate.isValid(bucketName)) {
            return res.status(400).send({ status: false, message: `${bucketName} is not provided ` })
        }

        let Bucketdata = await bucketModel.findOne({ bucketName: bucketName, pantryId: pantryId })
        if (!Bucketdata) {
            return res.status(400).send({ status: false, message: `${bucketName} does not exist with this ${pantryId} id` })

        }
        await bucketModel.deleteOne({ pantryId: pantryId, bucketName: bucketName })
        let bucketCount = await bucketModel.find({ pantryId: pantryId })
        let count = bucketCount.length;
        let query = { percentFull: count }
       // console.log(count)
        await pantryModel.updateOne({ name: name }, query)


        return res.status(200).send({ status: true, message: 'bucket deleted successfully' })

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports = {
    createBucket,
    updateBucket,
    getBasketDetail,
    deleteBasket
}