let headers = function require(req,res,next){
    let value = req.headers["isfreeapp"];
    let isAppFree;

   if(!value){
       res.send({msg: 'the request is missing a mandatory header'})
   } 
   if(appTypeHeader === 'false') {
    isAppFree = false
} else {
    isAppFree = true
}
  req.isFreeAppUser = isAppFree

  next()


}

module.exports.headers = headers; 


