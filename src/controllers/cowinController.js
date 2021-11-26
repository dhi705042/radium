const axios = require("axios");

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

const getByPin = async function (req, res){

  try{ 

      let pin= req.query.pincode
      let date= req.query.date

      let options = {
        method : "get",
        url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
      }
      let response= await axios(options)
      


      let centers= response.data
      console.log(centers)
      res.status(200).send( {msg: "Success", data: centers} )

  }
  catch(err) {
      console.log(err.message)
      res.status(500).send( { msg: "Something went wrong" } )
  }
}


const getOtp = async function (req, res){

  try{ 

       let options = {
        method : "post", // method has to be post
        url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
        data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
      }
      let response= await axios(options)

      let id= response.data
      res.status(200).send( {msg: "Success", data: id} ) 

  }
  catch(err) {
      console.log(err.message)
      res.status(500).send( { msg: "Something went wrong" } )
  }
}

const verifyOtp = async function (req, res){

  try{ 

    let Otp = req.body.otp;
    let txid = req.body.txnId;
    //console.log("my otp is", Otp , "and transctionid is",  txid )

       let options = {
        method : "post", 
        url : ` `,
        data: {
           "otp": req.body.otp , 
           "txnId": req.body.txnId } 
      }
      let response= await axios(options)

      let token= response
      res.status(200).send( {msg: "Success", data: token} )

  }
  catch(err) {
      console.log(err.message)
      res.status(500).send( { msg: "Something went wrong" (err.message)} )
  }
}



module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.verifyOtp = verifyOtp