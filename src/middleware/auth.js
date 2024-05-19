var jwt = require('jsonwebtoken')
var config=require('../config')

async function decodeToken(req,res,next){
const tokenKey= config.TOKEN_KEY

try {
    const bearerToken= req.headers.authorization.split(' ')[1]

    if(!bearerToken){
        return res.status(500).json({msg:"Application not accessible without auth token"})
    }
    
    const decodeToken= jwt.verify(bearerToken, config.TOKEN_KEY)

    req.currentUser=decodeToken;

    console.log(decodeToken)

} catch (error) {
    console.log(error)
    return res.status(500).json({error})
}
    return next()
}

module.exports=decodeToken