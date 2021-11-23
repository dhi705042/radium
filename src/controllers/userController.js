const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})    
}


const loginUser = async function (req, res) {
    //let data = req.body;
    let Name = req.body.name;
    let Passward = req.body.passward;
     
    let data = await userModel.find({name: Name, passward: Passward, isDeleted: false})

    if(data){
        let token = jwt.sign({userId: data._id}, "abcdefg")

        res.header('x-auth-token', token);
        res.send({
            status: true,
            data: data,
            token
        })

    }
    else{
        res.send({
            status: false,
             msg: "login not successful"
        })
    }
}

const userDetails = async function (req, res) {
    let userid= req.params.userId;
    let savedData= await userModel.findById(userid)
    res.send({
        status: true,
        msg: savedData})    
}


const userUpdate = async function (req, res) {
    let userId = req.params.userId;
    let data = await userModel.findById(userId)

    if(data){
        let updatedData = await userModel.findOneAndUpdate({_id: userId}, {email: "aaaaaaaaa@gmail.com"}, {new: true})
        console.log(updatedData);
        res.send({
            status: true,
            data: updatedData
        })
    }
    else{
        res.send({
            
                status: false,
                msg: "id not valid"
              
        })
    }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.userDetails = userDetails;
module.exports.userUpdate = userUpdate;
