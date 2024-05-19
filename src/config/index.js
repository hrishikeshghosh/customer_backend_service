var dotenv = require('dotenv') 

if(process.env.NODE_ENV !=="prod"){
    const configFile=`./.env.${process.env.NODE_ENV}`
    dotenv.config({path:configFile})
}else{
    dotenv.config()
}

module.exports={
    PORT: process.env.PORT,
    DB_URL: process.env.DATABASE_URL,
    TOKEN_KEY: process.env.JWT_TOKEN_KEY,
    TOKEN_EXPIRY:process.env.JWT_EXPIRY
}