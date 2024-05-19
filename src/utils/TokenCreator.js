var jwt= require('jsonwebtoken')
var config=require('../config') 

module.exports= async function(tokenData)
    {
        try {
            const tokenVal= await jwt.sign(
                {
                    data:tokenData
                },
                config.TOKEN_KEY,
                {
                    expiresIn:config.TOKEN_EXPIRY
                })
            return tokenVal
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
        
    }
