const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")
const tempController= require("../controllers/temperatureController")
const CoinController = require("../controllers/coinsController")

//cowin API'S
router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.post("/cowin/verifyotp", cowinController.verifyOtp)


//temperature API'S
router.get("/london/londontemp", tempController.LondonWeather)
router.get("/london", tempController.LondonCitytemp)
router.get("/sortCityByTemp", tempController.sortCityByTemp)

//coins API"S
router.get("/assets", CoinController.fetchCoins)
// router.get("/assetscoins", CoinController.coinsCreation)



module.exports = router;
