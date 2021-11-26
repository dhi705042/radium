const coinModel = require("../models/coinsModel")



const axios = require("axios");

let coinsData;
let arr = [];
let arr2 = []
//let abc;
//coinsData = abc;

const fetchCoins = async function (req, res) {
    try {
      let options = {
        method: "get",
        url: "http://api.coincap.io/v2/assets",
        headers: {
          Authorization: 'Bearer ' + "cf79ca27-6ae8-483a-a20f-70f56588b502"
        }
    }
        let response = await axios(options);
        let value = response.data.data;

        let sorted = value.sort(function(a, b)  {return parseFloat(b.changePercent24Hr)- parseFloat(a.changePercent24Hr)})
        let savedCoin = await coinModel.create(sorted);
        res.status(200).send({msg: savedCoin});
    }
    catch(err){
        res.status(500).send({msg: "something went wrong", err: err.message});
    }
      }
     
 
//   const coinsCreation = async function (req, res) {
//      // console.log(coinsData)
//       let aaa = coinsData;
//       let sorted = aaa.sort(function(a, b)  {return parseFloat(b.changePercent24Hr)- parseFloat(a.changePercent24Hr)})
//     for(let i=0;i<sorted.length;i++){
//       let newCoin = sorted[i];
//       let savedCoin = await coinModel.create(newCoin)
//       arr.push(savedCoin)
//      }
  
//      res.send(arr)

//    }


    

   module.exports.fetchCoins = fetchCoins 
  // module.exports.coinsCreation = coinsCreation