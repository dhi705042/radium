const jwt = require('jsonwebtoken')


const mytoken = async function (req, res, next){
    let tok = req.headers['x-auth-token']
    //console.log(req.headers['x-auth-token'])
    if(tok){
        let validToken = jwt.verify(tok, "abcdefg");
        console.log(validToken)

        if(!validToken){
            res.send({
                status: false,
                msg: "invalid token provided"
              })

        }

    } 
    else{
        res.send({
            status: false,
            msg: "token not provided"
          })
    }
     next();
}


module.exports.mytoken = mytoken;